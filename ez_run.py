import sys, subprocess, platform

def run_ez(file_path):
    print(f"Loading {file_path} into the lab...")
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Simple logic: If it contains @anim, open it in the default system browser
    if "@anim" in content:
        print("Detected animation: Launching viewer...")
        # This works on both Mac and Windows
        if platform.system() == "Darwin": subprocess.run(["open", "https://keane3029-lab.github.io/"])
        elif platform.system() == "Windows": subprocess.run(["start", "https://keane3029-lab.github.io/"], shell=True)

if __name__ == "__main__":
    if len(sys.argv) > 1:
        run_ez(sys.argv[1])
