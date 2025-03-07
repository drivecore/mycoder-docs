---
sidebar_position: 3
---

# Usage

Learn how to use MyCoder effectively for your development tasks.

## Basic Usage

### Running with a Prompt

The simplest way to use MyCoder is to provide a natural language prompt:

```bash
mycoder "Fix all TypeScript build errors and ensure tests pass"
```

### Interactive Mode

You can run MyCoder in interactive mode for ongoing conversation:

```bash
mycoder -i
```

### Reading Prompts from Files

For complex tasks, you can prepare your prompt in a file:

```bash
mycoder --file=my-task-description.txt
```

## Command Line Options

| Option              | Description                                                                       |
| ------------------- | --------------------------------------------------------------------------------- |
| `[prompt]`          | Main prompt text (positional argument)                                            |
| `-i, --interactive` | Run in interactive mode, asking for prompts                                       |
| `-f, --file`        | Read prompt from a specified file                                                 |
| `-l, --logLevel`    | Set minimum logging level (debug, verbose, info, warn, error)                     |
| `--tokenUsage`      | Output token usage at info log level                                              |
| `--headless`        | Use browser in headless mode with no UI showing (default: true)                   |
| `--userSession`     | Use user's existing browser session instead of sandboxed session (default: false) |
| `--pageFilter`      | Method to process webpage content (simple, none, readability)                     |
| `--profile`         | Enable performance profiling of CLI startup                                       |
| `--modelProvider`   | Specify the AI model provider to use (anthropic, openai, mistral, xai, ollama)    |
| `--modelName`       | Specify the model name to use with the selected provider                          |
| `-h, --help`        | Show help                                                                         |
| `-V, --version`     | Show version number                                                               |

## Configuration Management

MyCoder provides a configuration system that allows you to set default values for various options. This saves you from having to specify the same options repeatedly on the command line.

### Configuration Commands

| Command                            | Description                        |
| ---------------------------------- | ---------------------------------- |
| `mycoder config list`              | List all configuration values      |
| `mycoder config get [key]`         | Get a specific configuration value |
| `mycoder config set [key] [value]` | Set a configuration value          |

### Available Configuration Options

| Option          | Description                                        | Example                                                   |
| --------------- | -------------------------------------------------- | --------------------------------------------------------- |
| `logLevel`      | Default logging level                              | `mycoder config set logLevel verbose`                     |
| `tokenUsage`    | Show token usage by default                        | `mycoder config set tokenUsage true`                      |
| `headless`      | Use browser in headless mode                       | `mycoder config set headless false`                       |
| `userSession`   | Use existing browser session                       | `mycoder config set userSession true`                     |
| `pageFilter`    | Default webpage content processing method          | `mycoder config set pageFilter readability`               |
| `modelProvider` | Default AI model provider                          | `mycoder config set modelProvider openai`                 |
| `modelName`     | Default model name                                 | `mycoder config set modelName gpt-4o`                     |
| `customPrompt`  | Custom instructions to append to the system prompt | `mycoder config set customPrompt "Always use TypeScript"` |
| `githubMode`    | Enable GitHub integration mode                     | `mycoder config set githubMode true`                      |
| `profile`       | Enable performance profiling                       | `mycoder config set profile true`                         |

## Custom Prompt

The `customPrompt` configuration option allows you to append custom instructions to the system prompt used by MyCoder. This can be useful for guiding the AI's behavior for your specific use cases:

```bash
# Example: Set a custom prompt to prefer TypeScript
mycoder config set customPrompt "Always use TypeScript when writing code. Prefer functional programming patterns when possible."
```

The custom prompt will be included in both the main agent and any sub-agents that are created.

## GitHub Mode

MyCoder supports GitHub integration through the `githubMode` configuration option. When enabled, MyCoder will:

- Work with GitHub issues and PRs as part of its workflow
- Create branches for issues it's working on
- Make commits with descriptive messages
- Create PRs when work is complete

To enable GitHub mode:

```bash
mycoder config set githubMode true
```

This requires the GitHub CLI (`gh`) to be installed and authenticated. For more details, see the [GitHub Mode documentation](./usage/github-mode.md).

## Available Tools

MyCoder has access to a variety of tools that enable it to perform complex tasks:

| Tool                 | Description                                      | Use Case                                                         |
| -------------------- | ------------------------------------------------ | ---------------------------------------------------------------- |
| **textEditor**       | Views, creates, and edits files with persistence | Reading and modifying project files with advanced capabilities   |
| **shellStart**       | Executes shell commands                          | Running builds, tests, installations, git operations             |
| **shellMessage**     | Interacts with running shell processes           | Working with interactive CLIs, monitoring long-running processes |
| **fetch**            | Makes HTTP requests                              | Accessing APIs, downloading resources                            |
| **browseStart**      | Starts a browser session                         | Researching documentation, exploring solutions                   |
| **browseMessage**    | Performs actions in an active browser            | Navigating websites, extracting information                      |
| **subAgent**         | Creates specialized sub-agents                   | Handling complex tasks in parallel                               |

For more detailed information about specific features, check the following pages:

- [Configuration Options](./usage/configuration.md)
- [GitHub Mode](./usage/github-mode.md)
- [Performance Profiling](./usage/performance-profiling.md)