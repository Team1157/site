import os
import sqlite3
from PIL import Image
from datetime import datetime

def create_image_viewer():
    # Database setup for a very practical and demure use of sqlite
    db_path = 'src/.vuepress/public/photos.db'
    conn = sqlite3.connect(db_path)
    c = conn.cursor()
    
    # Create the photos table if it doesn't exist :3
    c.execute('''
    CREATE TABLE IF NOT EXISTS photos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        file_name TEXT,
        file_path TEXT,
        upload_date TEXT
    )
    ''')
    
    def process_directory(directory, relative_path=''):
        html_content = ''
        for item in os.listdir(directory):
            item_path = os.path.join(directory, item)
            relative_item_path = os.path.join(relative_path, item)
            if os.path.isdir(item_path):
                # Process subdirectories recursively
                html_content += process_directory(item_path, relative_item_path)
            elif item.lower().endswith(('.png', '.jpg', '.jpeg', '.gif')):
                # Check if the photo is already in the database
                c.execute('SELECT upload_date FROM photos WHERE file_path = ?', (relative_item_path,))
                result = c.fetchone()
                
                if result is None:
                    # Get the original upload date (file modification time)
                    upload_date = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
                    
                    # Insert the photo into the database
                    c.execute('''
                    INSERT INTO photos (file_name, file_path, upload_date) 
                    VALUES (?, ?, ?)
                    ''', (item, relative_item_path, upload_date))
                    conn.commit()
                else:
                    upload_date = result[0]
                
                # Add image to HTML content, showing the upload date
                html_content += f'''
<div class="image-item">
    <div target="_blank" class="image-link">
        <img src="/img/archive/{relative_item_path}" alt="{item}" loading="lazy">
        <div class="image-overlay">
            <p class="image-title">{item}</p>
            <p class="image-date">Uploaded on {upload_date}</p>
        </div>
    </div>
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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-bottom: 40px;
    width: 100%;
}}
.image-grid {{
    display: contents; 
}}

.image-item {{
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    aspect-ratio: 1 / 1;
    width: 100%; 
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

@media (max-width: 719px) {{
    .image-overlay {{
        display: none;
    }}
    .image-item:hover {{
        transform: none;
    }}
}}
</style>
'''

    # Write VuePress page file
    with open(os.path.join('src', 'photos.md'), 'w') as f:
        f.write(page_content)
    
    print("Page created successfully in the 'src/photos.md' file.")
    
    # Close the database connection
    conn.close()

if __name__ == "__main__":
    create_image_viewer()
