# MyCoder Documentation

This repository contains the official documentation for MyCoder, an AI-powered coding assistant. The documentation is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## What's Inside

- **Product Documentation**: Comprehensive guides on how to use MyCoder
- **Getting Started**: Platform-specific setup instructions for Windows, macOS, and Linux
- **Usage Guides**: Detailed information on features and capabilities
- **Blog**: Updates, tutorials, and insights about MyCoder

## Development

### Prerequisites

- Node.js version 18.0 or above
- pnpm (recommended), npm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/drivecore/mycoder-docs.git
cd mycoder-docs

# Install dependencies
pnpm install
```

### Local Development

```bash
# Start the development server
pnpm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
# Generate static content
pnpm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```bash
# Deploy to GitHub Pages
USE_SSH=true pnpm deploy
```

Or if not using SSH:

```bash
GIT_USER=<Your GitHub username> pnpm deploy
```

The site is automatically deployed when changes are pushed to the main branch.

## Contributing

We welcome contributions to improve the documentation:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-improvement`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing improvement'`)
5. Push to the branch (`git push origin feature/amazing-improvement`)
6. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

If you have questions or feedback, please join our [Discord community](https://discord.gg/5K6TYrHGHt).
