import os
import json
import re
import subprocess
import sys

sys.stdout.reconfigure(encoding='utf-8')

# Root search directories
SCAN_ROOTS = [
    r"C:\Users\Admin\Desktop\Projects",
    r"D:\Antigravity-Projects",
    r"D:\youtube-projects",
    r"E:\hdd-data\Projects",
    r"E:\hdd-data\Projects\Agentic-AI-Projects",
    r"E:\hdd-data\pulse-vector"
]

PORTFOLIO_JS_PATH = r"e:\hdd-data\Projects\portfolio-website\developerFolio\src\portfolio.js"

def resolve_shortcut(lnk_path):
    ps_cmd = f'''
    $sh = New-Object -ComObject WScript.Shell
    $target = $sh.CreateShortcut('{lnk_path}').TargetPath
    Write-Host $target
    '''
    res = subprocess.run(["powershell", "-NoProfile", "-Command", ps_cmd], capture_output=True, text=True)
    return res.stdout.strip()

def get_git_remote(dir_path):
    try:
        res = subprocess.run(["git", "config", "--get", "remote.origin.url"], cwd=dir_path, capture_output=True, text=True)
        if res.returncode == 0:
            url = res.stdout.strip()
            if url.endswith('.git'):
                url = url[:-4]
            if url.startswith('git@github.com:'):
                url = url.replace('git@github.com:', 'https://github.com/')
            return url
    except:
        pass
    return None

def extract_project_meta(dir_path):
    name = os.path.basename(dir_path)
    if name in ["portfolio-website", "developerFolio"]:
        return None
    
    try:
        files = os.listdir(dir_path)
    except:
        return None
    
    git_url = get_git_remote(dir_path)
    
    readme_file = None
    readme_text = ""
    for f in files:
        if f.lower().startswith("readme"):
            readme_file = f
            try:
                with open(os.path.join(dir_path, f), 'r', encoding='utf-8', errors='ignore') as rf:
                    readme_text = rf.read(4000)
            except:
                pass
            break
            
    pkg_data = {}
    if 'package.json' in files:
        try:
            with open(os.path.join(dir_path, 'package.json'), 'r', encoding='utf-8', errors='ignore') as pf:
                pkg_data = json.load(pf)
        except:
            pass

    tech_stack = set()
    if 'package.json' in files:
        tech_stack.add("JavaScript")
        pkg_str = str(pkg_data).lower()
        if 'react' in pkg_str: tech_stack.add("React")
        if 'next' in pkg_str: tech_stack.add("Next.js")
        if 'typescript' in pkg_str: tech_stack.add("TypeScript")
        if 'tailwind' in pkg_str: tech_stack.add("Tailwind CSS")
        if 'vite' in pkg_str: tech_stack.add("Vite")

    if 'requirements.txt' in files or any(f.endswith('.py') for f in files) or 'pyproject.toml' in files:
        tech_stack.add("Python")
        req_text = ""
        if 'requirements.txt' in files:
            try:
                with open(os.path.join(dir_path, 'requirements.txt'), 'r', encoding='utf-8', errors='ignore') as reqf:
                    req_text = reqf.read()
            except: pass
        
        combo_text = (req_text + "\n" + readme_text).lower()
        if 'fastapi' in combo_text: tech_stack.add("FastAPI")
        if 'streamlit' in combo_text: tech_stack.add("Streamlit")
        if 'langchain' in combo_text or 'langgraph' in combo_text: tech_stack.add("LangChain")
        if 'crewai' in combo_text: tech_stack.add("CrewAI")
        if 'openai' in combo_text: tech_stack.add("OpenAI")
        if 'groq' in combo_text: tech_stack.add("Groq")
        if 'ollama' in combo_text: tech_stack.add("Ollama")
        if 'supabase' in combo_text: tech_stack.add("Supabase")
        if 'neo4j' in combo_text: tech_stack.add("Neo4j")
        if 'gemini' in combo_text: tech_stack.add("Gemini API")

    if 'Dockerfile' in files or 'docker-compose.yml' in files:
        tech_stack.add("Docker")

    if '.github' in files:
        tech_stack.add("GitHub Actions")

    proj_title = pkg_data.get('name', name)
    proj_title = proj_title.replace('_', ' ').replace('-', ' ').title()
    
    h1_match = re.search(r'^#\s+(.+)$', readme_text, re.MULTILINE)
    if h1_match:
        raw_title = h1_match.group(1).strip()
        cleaned_title = re.sub(r'[^\w\s\-\(\)\:\.\,]', '', raw_title).strip()
        if cleaned_title:
            proj_title = cleaned_title

    desc = pkg_data.get('description', '')
    if not desc and readme_text:
        lines = readme_text.split('\n')
        para_lines = []
        for line in lines:
            line_str = line.strip()
            if line_str.startswith('#') or line_str.startswith('!') or line_str.startswith('[') or line_str.startswith('---'):
                continue
            if line_str:
                # clean markdown links/bold
                line_clean = re.sub(r'\[([^\]]+)\]\([^\)]+\)', r'\1', line_str)
                line_clean = re.sub(r'[\*\_\`]', '', line_clean)
                para_lines.append(line_clean)
                if len(' '.join(para_lines)) > 120:
                    break
        desc = ' '.join(para_lines)[:280]
    
    if not desc:
        desc = f"A production-grade application and system built using {', '.join(sorted(list(tech_stack))[:4])}."

    return {
        "folder_name": name,
        "path": dir_path,
        "projectName": proj_title,
        "projectDesc": desc,
        "techStack": sorted(list(tech_stack)),
        "gitUrl": git_url
    }

def scan_all_projects():
    candidates = set()
    def explore(path, depth=0):
        if depth > 4 or not os.path.exists(path):
            return
        try:
            items = os.listdir(path)
        except:
            return
        
        if ('.git' in items or 'package.json' in items or 'requirements.txt' in items or 'pyproject.toml' in items) and depth > 0:
            candidates.add(path)
            return

        for item in items:
            if item in ['node_modules', '.venv', 'venv', '.git', 'build', 'dist', '__pycache__', '.next'] or item.startswith('.'):
                continue
            full = os.path.join(path, item)
            if item.endswith('.lnk'):
                target = resolve_shortcut(full)
                if target and os.path.exists(target):
                    explore(target, depth+1)
            elif os.path.isdir(full):
                explore(full, depth+1)

    for r in SCAN_ROOTS:
        explore(r)

    projects = []
    for c in sorted(list(candidates)):
        meta = extract_project_meta(c)
        if meta:
            projects.append(meta)
    return projects

if __name__ == "__main__":
    discovered = scan_all_projects()
    print(f"Scanned and discovered {len(discovered)} projects.")
    for p in discovered:
        print(f" - {p['projectName']} ({p['folder_name']}) | Stack: {p['techStack']}")
