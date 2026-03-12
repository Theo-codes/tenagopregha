import os

directory = '/Users/user/Documents/tena-gopregha/src'

for root, _, files in os.walk(directory):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts') or file.endswith('.css'):
            path = os.path.join(root, file)
            with open(path, 'r') as f:
                content = f.read()
            
            new_content = content.replace('var(--amber)', 'var(--rust)')
            new_content = new_content.replace('from-amber', 'from-rust')
            
            if new_content != content:
                with open(path, 'w') as f:
                    f.write(new_content)
                print(f"Updated {path}")
