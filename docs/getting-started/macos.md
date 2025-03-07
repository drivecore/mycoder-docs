---
sidebar_position: 2
---

# macOS Setup

This guide will help you set up MyCoder on macOS.

## Prerequisites

1. **Homebrew**: The recommended package manager for macOS
   
   Homebrew makes it easy to install and manage development tools on macOS. Installing it first will simplify the rest of the setup process.
   
   ```bash
   # Install Homebrew
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   
   # Make sure Homebrew is in your PATH
   echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
   eval "$(/opt/homebrew/bin/brew shellenv)"
   
   # Verify installation
   brew --version
   ```

2. **Node.js**: Install Node.js version 20.0.0 or higher
   
   > **⚠️ Important:** MyCoder requires Node.js runtime to function properly.
   
   **Recommended: Using NVM (Node Version Manager)**
   
   NVM is the preferred way to install Node.js as it allows for easy version management and avoids permission issues:
   
   ```bash
   # Install NVM using Homebrew
   brew install nvm
   
   # Create NVM directory
   mkdir ~/.nvm
   
   # Add NVM configuration to your shell profile
   echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.zshrc
   echo '[ -s "$(brew --prefix)/opt/nvm/nvm.sh" ] && \. "$(brew --prefix)/opt/nvm/nvm.sh"' >> ~/.zshrc
   echo '[ -s "$(brew --prefix)/opt/nvm/etc/bash_completion.d/nvm" ] && \. "$(brew --prefix)/opt/nvm/etc/bash_completion.d/nvm"' >> ~/.zshrc
   
   # Reload shell configuration
   source ~/.zshrc
   
   # Install latest LTS version of Node.js
   nvm install --lts
   
   # Set it as default
   nvm use --lts
   
   # Verify installation
   node --version
   ```
   
   **Alternative: Direct Homebrew installation:**
   ```bash
   brew install node
   ```
   
   **Alternative: Direct download**
   Download from [nodejs.org](https://nodejs.org/)
   
   Verify installation with `node --version`

3. **Git**: Version control system
   ```bash
   # Install Git using Homebrew
   brew install git
   
   # Verify installation
   git --version
   ```

4. **GitHub CLI**: Command-line tool for interacting with GitHub
   ```bash
   # Install GitHub CLI using Homebrew
   brew install gh
   
   # Verify installation
   gh --version
   
   # Authenticate with GitHub
   gh auth login
   ```
   
   The GitHub CLI makes it easy to:
   - Create and manage issues
   - Create and review pull requests
   - Clone repositories
   - Manage GitHub workflows
   
   This is especially useful if you plan to contribute to MyCoder or related projects.

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