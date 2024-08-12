import os
import shutil
from PIL import Image
from datetime import datetime

def create_image_viewer():
    # Create output directory
    output_dir = 'src'
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    # Create thumbnails directory
    thumbnails_dir = os.path.join(output_dir, '.vuepress', 'public', 'thumbnails')
    os.makedirs(thumbnails_dir, exist_ok=True)

    # Function to process images in a directory
    def process_directory(directory, relative_path=''):
        html_content = ''
        for item in os.listdir(directory):
            item_path = os.path.join(directory, item)
            relative_item_path = os.path.join(relative_path, item)
            if os.path.isdir(item_path):
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
                    folder_path = os.path.join(output_dir, '.vuepress', 'public', relative_path, folder_name)
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
    <a href="/{os.path.join(relative_path, folder_name, item)}" target="_blank">
        <img src="/thumbnails/{thumbnail_name}?url" alt="{item}">
    </a>
    <p>{item}<br>{folder_name}</p>
</div>
                '''
        
        return html_content

    # Generate VuePress page content
    page_content = f'''---
author: written by ada t 
title: Photos
createTime: {datetime.now().strftime('%Y/%m/%d %H:%M:%S')}
permalink: /photos
---
# Image Viewer

<ClientOnly>
<div class="image-viewer">
    {process_directory('src/.vuepress/public/img/archive')}
</div>
</ClientOnly>

'''

    # Write VuePress page file
    with open(os.path.join(output_dir, 'photos.md'), 'w') as f:
        f.write(page_content)

    print("VuePress page created successfully in the 'src/photos.md' file.")

if __name__ == "__main__":
    create_image_viewer()
