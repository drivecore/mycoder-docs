---
sidebar_position: 3
---

# Linux Setup

This guide will help you set up MyCoder on Linux.

## Prerequisites

1. **Node.js**: Install Node.js version 20.0.0 or higher
   - Using package manager (Ubuntu/Debian):
     ```bash
     curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
     sudo apt-get install -y nodejs
     ```
   - Using package manager (Fedora/RHEL):
     ```bash
     curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
     sudo yum install -y nodejs
     ```
   - Verify installation with `node --version`

2. **Git**: Install Git if not already available
   - Ubuntu/Debian: `sudo apt-get install git`
   - Fedora/RHEL: `sudo yum install git`
   - Verify with `git --version`

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
   ```bash
   export ANTHROPIC_API_KEY=your-api-key
   ```

2. **Persistent Environment Variables**:
   - Add to your shell profile file (`.bashrc`, `.zshrc`, etc.):
   ```bash
   echo 'export ANTHROPIC_API_KEY=your-api-key' >> ~/.bashrc
   source ~/.bashrc
   ```

3. **Using .env File**:
   - Create a file named `.env` in your project directory
   - Add your API key: `ANTHROPIC_API_KEY=your-api-key`

## Browser Integration

MyCoder can use a browser for research. On Linux:

1. **Chromium/Chrome/Firefox**: MyCoder works with these browsers automatically
2. **Dependencies**: You may need to install additional dependencies for browser automation:
   ```bash
   # Ubuntu/Debian
   sudo apt-get install -y libx11-xcb1 libxcomposite1 libxcursor1 libxdamage1 \
       libxi6 libxtst6 libnss3 libcups2 libxss1 libxrandr2 \
       libasound2 libatk1.0-0 libatk-bridge2.0-0 libpangocairo-1.0-0 \
       libgtk-3-0 libgbm1
   ```
3. **Headless Mode**: By default, browser windows are hidden (use `--headless false` to show them)

## Troubleshooting

### Common Issues

- **Permission Errors**: You may need to use `sudo` for global npm installations
- **Missing Browser**: If you get browser-related errors, ensure Chromium/Chrome is installed
- **Node Version**: Ensure you're using Node.js 20+

If you encounter any other issues, please check our [Discord community](https://discord.gg/5K6TYrHGHt) for help.