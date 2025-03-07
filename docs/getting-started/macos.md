---
sidebar_position: 2
---

# macOS Setup

This guide will help you set up MyCoder on macOS.

## Prerequisites

1. **Node.js**: Install Node.js version 20.0.0 or higher
   - Using Homebrew: `brew install node`
   - Or download from [nodejs.org](https://nodejs.org/)
   - Verify installation with `node --version`

2. **Git**: macOS typically comes with Git pre-installed
   - Verify with `git --version`
   - If not installed: `brew install git`

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
   - Add to your shell profile file (`.zshrc`, `.bash_profile`, or `.bashrc`):
   ```bash
   echo 'export ANTHROPIC_API_KEY=your-api-key' >> ~/.zshrc
   source ~/.zshrc
   ```

3. **Using .env File**:
   - Create a file named `.env` in your project directory
   - Add your API key: `ANTHROPIC_API_KEY=your-api-key`

## Browser Integration

MyCoder can use a browser for research. On macOS:

1. **Chrome/Safari**: MyCoder works with both browsers automatically
2. **First Run**: You may see a browser window open briefly when MyCoder is first run
3. **Headless Mode**: By default, browser windows are hidden (use `--headless false` to show them)

## Troubleshooting

### Common Issues

- **Permission Errors**: You may need to use `sudo` for global npm installations
- **Node Version**: Ensure you're using Node.js 20+
- **Homebrew Issues**: If Homebrew is having problems, try `brew doctor`

If you encounter any other issues, please check our [Discord community](https://discord.gg/5K6TYrHGHt) for help.