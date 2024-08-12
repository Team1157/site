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
    
    def process_directory(directory, relative_path=''):
        html_content = ''
        for item in os.listdir(directory):
            item_path = os.path.join(directory, item)
            relative_item_path = os.path.join(relative_path, item)
            if os.path.isdir(item_path):
                # Process subdirectories (you may want to add recursive handling here)
                pass
            elif item.lower().endswith(('.png', '.jpg', '.jpeg', '.gif')):
                with Image.open(item_path) as img:
                    creation_date = datetime.fromtimestamp(os.path.getmtime(item_path))
                    folder_name = creation_date.strftime('%Y-%m-%d')
                    
                    # Create folder for the image
                    folder_path = os.path.join(output_dir, '.vuepress', 'public', relative_path, folder_name)
                    os.makedirs(folder_path, exist_ok=True)
                    
                    # Copy original image to its folder
                    shutil.copy(item_path, folder_path)
                    
                    # Create and save thumbnail
                    img.thumbnail((900, 900), Image.LANCZOS)
                    thumbnail_name = f"thumb_{relative_item_path.replace(os.path.sep, '_')}"
                    thumbnail_path = os.path.join(thumbnails_dir, thumbnail_name)
                    img.save(thumbnail_path, quality=95)
                
                # Add image to HTML content
                html_content += f'''
<div class="image-item">
    <a href="/{os.path.join(relative_path, folder_name, item)}" target="_blank" class="image-link">
        <img src="/thumbnails/{thumbnail_name}?url" alt="{item}" loading="lazy">
        <div class="image-overlay">
            <p class="image-title">{item}</p>
            <p class="image-date">{folder_name}</p>
        </div>
        <br></br>
    </a>
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

<ClientOnly>
<div class="image-viewer">
    {process_directory('src/.vuepress/public/img/archive')}
</div>
</ClientOnly>

<style>
.image-viewer {{
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}}

.folder-title {{
    font-size: 24px;
    margin-top: 40px;
    margin-bottom: 20px;
    color: #333;
    border-bottom: 2px solid #eee;
    padding-bottom: 10px;
}}

.image-grid {{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    margin-bottom: 40px;
}}

.image-item {{
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    aspect-ratio: 1 / 1;
}}

.image-item:hover {{
    transform: translateY(-5px);
}}

.image-link {{
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
}}

.image-link img {{
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}}

.image-overlay {{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 10px;
    transform: translateY(100%);
    transition: transform 0.3s ease;
}}

.image-item:hover .image-overlay {{
    transform: translateY(0);
}}

.image-title {{
    margin: 0;
    font-size: 14px;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}}

.image-date {{
    margin: 5px 0 0;
    font-size: 12px;
    opacity: 0.8;
}}
</style>
'''

    # Write VuePress page file
    with open(os.path.join(output_dir, 'photos.md'), 'w') as f:
        f.write(page_content)
    
    print("Modern VuePress page created successfully in the 'src/photos.md' file.")

if __name__ == "__main__":
    create_image_viewer()
