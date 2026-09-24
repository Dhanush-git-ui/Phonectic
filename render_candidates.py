import subprocess
import os
from PIL import Image

chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
cwd = os.path.abspath(".")

for i in range(1, 5):
    html_file = os.path.join(cwd, f"c{i}.html")
    url = f"file:///{html_file.replace(os.sep, '/')}"
    out_png = os.path.join(cwd, f"candidate_{i}_full.png")
    
    cmd = [
        chrome_path,
        "--headless=new",
        "--disable-gpu",
        "--no-sandbox",
        "--default-background-color=00000000",
        "--window-size=5376,1267",
        "--hide-scrollbars",
        f"--screenshot={out_png}",
        url
    ]
    subprocess.run(cmd, capture_output=True)
    
    # generate thumbnail for viewing
    if os.path.exists(out_png):
        img = Image.open(out_png)
        thumb = img.resize((1075, 253), Image.Resampling.LANCZOS)
        thumb.save(os.path.join(cwd, f"candidate_{i}_thumb.png"))
        print(f"Candidate {i} full and thumb saved: {img.size}")

print("Complete!")
