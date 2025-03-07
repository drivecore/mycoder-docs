---
sidebar_position: 1
---

# Windows Setup

This guide will help you set up MyCoder on Windows.

## Prerequisites

1. **Node.js**: Install Node.js version 20.0.0 or higher
   - Download from [nodejs.org](https://nodejs.org/)
   - Verify installation with `node --version`

2. **Git**: Install Git for Windows
   - Download from [git-scm.com](https://git-scm.com/download/win)
   - Verify installation with `git --version`

## Installation

Install MyCoder globally using npm:

```bash
npm install -g mycoder
```

Or use it directly with npx:

```bash
npx mycoder "Your prompt here"
```

## Environment Setup

### Setting up API keys

1. **Temporary Environment Variables**:
   ```
   set ANTHROPIC_API_KEY=your-api-key
   ```

2. **Persistent Environment Variables**:
   - Right-click on "This PC" or "My Computer"
   - Select "Properties"
   - Click "Advanced system settings"
   - Click "Environment Variables"
   - Under "User variables", click "New"
   - Add your API key (e.g., ANTHROPIC_API_KEY as variable name)

3. **Using .env File**:
   - Create a file named `.env` in your project directory
   - Add your API key: `ANTHROPIC_API_KEY=your-api-key`

## Browser Integration

MyCoder can use a browser for research. On Windows:

1. **Chrome/Edge**: MyCoder works with both browsers automatically
2. **First Run**: You may see a browser window open briefly when MyCoder is first run
3. **Headless Mode**: By default, browser windows are hidden (use `--headless false` to show them)

## Troubleshooting

### Common Issues

- **Permission Errors**: Run Command Prompt or PowerShell as Administrator
- **Node Version**: Ensure you're using Node.js 20+
- **Path Issues**: Make sure npm global bin directory is in your PATH

If you encounter any other issues, please check our [Discord community](https://discord.gg/5K6TYrHGHt) for help.