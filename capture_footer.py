import subprocess
import time
import json
import urllib.request
import os

# We can use Chrome remote debugging or a simple HTML wrapper/script
html_scroll = """<!DOCTYPE html>
<html>
<body style="margin:0;overflow:hidden;">
  <iframe id="f" src="http://localhost:5173" style="width:1536px;height:1000px;border:none;"></iframe>
  <script>
    const f = document.getElementById('f');
    f.onload = () => {
      setTimeout(() => {
        try {
          f.contentWindow.scrollTo(0, f.contentDocument.body.scrollHeight);
        } catch(e) {}
      }, 800);
    };
  </script>
</body>
</html>
"""
with open("scroll_helper.html", "w") as f:
    f.write(html_scroll)

chrome = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
cwd = os.path.abspath(".")
url = "file:///" + os.path.join(cwd, "scroll_helper.html").replace("\\", "/")

cmd = [
    chrome,
    "--headless=new",
    "--disable-gpu",
    "--no-sandbox",
    "--disable-web-security",
    "--window-size=1536,1000",
    "--virtual-time-budget=3000",
    "--screenshot=footer_view.png",
    url
]
subprocess.run(cmd)
print("Done footer screenshot")
