# 🧬 .EZ Protocol: Installation Guide

Welcome to the lab. This document outlines how to make your system compatible with the `.ez` protocol across Windows and macOS.

## Prerequisites
- [Python](https://www.python.org/) installed and added to your system PATH.
- Clone the repo: `git clone https://github.com/keane3029-lab/keane3029-lab`

## Windows Setup
1. Open **Command Prompt** as Administrator.
2. Navigate to your local `keane3029-lab` folder.
3. Run the following commands to register the file type:
   ```cmd
   assoc .ez=EZFile
   ftype EZFile=python "%CD%\ez_run.py" "%1"
   ```
4. Double-clicking any `.ez` file now runs it through `ez_run.py`.

## macOS Setup
1. Open **Terminal**.
2. Navigate to your local `keane3029-lab` folder.
3. Make the runner executable:
   ```bash
   chmod +x ez_run.py
   ```
4. Double-click support on macOS needs a small wrapper app (Automator or a `.command` file) since macOS doesn't do file-type registration via the shell the way Windows does. Simplest option — a `.command` file that Finder can open directly:
   ```bash
   echo 'python3 "'"$(pwd)"'/ez_run.py" "$1"' > run_ez.command
   chmod +x run_ez.command
   ```
   Then set `.ez` files to open with `run_ez.command` via **Get Info → Open with** in Finder.

## What actually happens when a `.ez` file runs
`ez_run.py` only does one thing: if the file contains `@anim`, it opens a URL in your default browser. It does not read, modify, or execute anything else on your system — by design. See the README for why `.ez` stays data-only.
