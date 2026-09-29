import cv2
import os

video_path = "public/t.mp4"
cap = cv2.VideoCapture(video_path)

fps = cap.get(cv2.CAP_PROP_FPS)
total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
duration = total_frames / fps if fps > 0 else 0

print(f"FPS: {fps}, Total Frames: {total_frames}, Duration: {duration:.2f}s")

os.makedirs("scratch/t_frames", exist_ok=True)

# Extract frames at 0%, 15%, 30%, 45%, 60%, 75%, 90%, 100% of duration
step = max(1, total_frames // 10)
saved = 0
for i in range(0, total_frames, step):
    cap.set(cv2.CAP_PROP_POS_FRAMES, i)
    ret, frame = cap.read()
    if ret:
        t_sec = i / fps if fps > 0 else 0
        out_name = f"scratch/t_frames/frame_{saved:02d}_{t_sec:.1f}s.png"
        cv2.imwrite(out_name, frame)
        print(f"Saved {out_name}")
        saved += 1

cap.release()
print("Done extracting frames!")
