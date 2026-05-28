# TEC Lite Quiz

React/Vite project structured for GitHub + Vercel deployment.

## Local setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production files will output to:

```txt
dist/
```

## Main files

```txt
src/TecLiteQuiz.jsx  # main quiz component
src/main.jsx         # React entry file + iframe height postMessage
src/index.css        # Tailwind/styles
index.html           # Vite HTML entry
```

## Deploy

Push this folder to GitHub, then import the repo into Vercel.

Vercel settings:

```txt
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```
