# 🧬 .EZ Protocol: Installation & Infection Guide

Welcome to the lab. This document outlines how to make your system compatible with the `.ez` protocol across Windows and macOS.

## Prerequisites
- [Python](https://www.python.org/) installed and added to your system PATH.
- Clone the repo: `git clone https://github.com/keane3029-lab/keane3029-lab`

## Windows Infection
1. Open **Command Prompt** as Administrator.
2. Navigate to your local `keane3029-lab` folder.
3. Run the following commands to register the file type:
   ```cmd
   assoc .ez=EZFile
   ftype EZFile=python "%CD%\ez_run.py" "%1"
