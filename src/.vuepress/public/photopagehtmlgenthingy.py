import os
import shutil
from PIL import Image
from datetime import datetime

def create_image_viewer():
    # Create output directory
    output_dir = 'image_viewer'
    if os.path.exists(output_dir):
        shutil.rmtree(output_dir)
    os.makedirs(output_dir)

    # Create thumbnails directory
    thumbnails_dir = os.path.join(output_dir, 'thumbnails')
    os.makedirs(thumbnails_dir)

    # Function to process images in a directory
    def process_directory(directory, relative_path=''):
        html_content = ''
        for item in os.listdir(directory):
            item_path = os.path.join(directory, item)
            relative_item_path = os.path.join(relative_path, item)

            if os.path.isdir(item_path):
                # Create corresponding folder in output directory
                output_subdir = os.path.join(output_dir, relative_item_path)
                os.makedirs(output_subdir, exist_ok=True)

                # Add folder to HTML content
                html_content += f'<h2>{item}</h2>\n'
                html_content += '<div class="image-grid">\n'
                html_content += process_directory(item_path, relative_item_path)
                html_content += '</div>\n'
            elif item.lower().endswith(('.png', '.jpg', '.jpeg', '.gif')):
                # Process image file
                with Image.open(item_path) as img:
                    creation_date = datetime.fromtimestamp(os.path.getmtime(item_path))
                    folder_name = creation_date.strftime('%Y-%m-%d')
                    
                    # Create folder for the image
                    folder_path = os.path.join(output_dir, relative_path, folder_name)
                    os.makedirs(folder_path, exist_ok=True)
                    
                    # Copy original image to its folder
                    shutil.copy(item_path, folder_path)
                    
                    # Create and save thumbnail
                    img.thumbnail((200, 200))
                    thumbnail_name = f"thumb_{relative_item_path.replace(os.path.sep, '_')}"
                    thumbnail_path = os.path.join(thumbnails_dir, thumbnail_name)
                    img.save(thumbnail_path)
                
                # Add image to HTML content
                html_content += f'''
                    <div class="image-item">
                        <a href="{os.path.join(relative_path, folder_name, item)}" target="_blank">
                            <img src="{os.path.join('thumbnails', thumbnail_name)}" alt="{item}">
                        </a>
                        <p>{item}<br>{folder_name}</p>
                    </div>
                '''
        
        return html_content

    # Generate HTML content
    html_content = '''
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Image Viewer</title>
        <style>
            body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
            .image-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 20px; }
            .image-item { text-align: center; }
            .image-item img { max-width: 100%; height: auto; }
        </style>
    </head>
    <body>
        <h1>Image Viewer</h1>
    '''

    # Process the img directory and its subdirectories
    html_content += process_directory('img')

    html_content += '''
    </body>
    </html>
    '''

    # Write HTML file
    with open(os.path.join(output_dir, 'index.html'), 'w') as f:
        f.write(html_content)

    print("Image viewer created successfully in the 'image_viewer' directory.")

if __name__ == "__main__":
    create_image_viewer()
