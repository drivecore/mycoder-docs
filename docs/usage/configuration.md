---
sidebar_position: 1
---

# Configuration Options

MyCoder provides a comprehensive configuration system that allows you to customize its behavior according to your preferences. This page details all available configuration options and how to use them.

## Using the Configuration System

MyCoder's configuration is managed through a simple command-line interface:

```bash
# List all configuration values
mycoder config list

# Get a specific configuration value
mycoder config get modelProvider

# Set a configuration value
mycoder config set modelProvider openai
```

Configuration values are stored persistently and will be used for all future MyCoder sessions until changed.

## Available Configuration Options

### AI Model Selection

| Option          | Description                 | Possible Values                                   | Default     |
| --------------- | --------------------------- | ------------------------------------------------- | ----------- |
| `modelProvider` | The AI provider to use      | `anthropic`, `openai`, `mistral`, `xai`, `ollama` | `anthropic` |
| `modelName`     | The specific model to use   | Depends on provider                               | `claude-3-opus-20240229` |

Example:
```bash
# Set OpenAI as the provider with GPT-4o model
mycoder config set modelProvider openai
mycoder config set modelName gpt-4o
```

### Logging and Debugging

| Option       | Description                     | Possible Values                           | Default |
| ------------ | ------------------------------- | ----------------------------------------- | ------- |
| `logLevel`   | Minimum level of logs to show   | `debug`, `verbose`, `info`, `warn`, `error` | `info`  |
| `tokenUsage` | Show token usage in logs        | `true`, `false`                            | `false` |
| `profile`    | Enable performance profiling    | `true`, `false`                            | `false` |

Example:
```bash
# Enable verbose logging and token usage reporting
mycoder config set logLevel verbose
mycoder config set tokenUsage true
```

### Browser Integration

| Option        | Description                       | Possible Values                    | Default |
| ------------- | --------------------------------- | ---------------------------------- | ------- |
| `headless`    | Run browser in headless mode      | `true`, `false`                    | `true`  |
| `userSession` | Use existing browser session      | `true`, `false`                    | `false` |
| `pageFilter`  | Method to process webpage content | `simple`, `none`, `readability`    | `simple` |

Example:
```bash
# Show browser windows and use readability for better web content parsing
mycoder config set headless false
mycoder config set pageFilter readability
```

### Behavior Customization

| Option         | Description                                        | Possible Values     | Default |
| -------------- | -------------------------------------------------- | ------------------- | ------- |
| `customPrompt` | Custom instructions for the AI                     | Any string          | `""`    |
| `githubMode`   | Enable GitHub integration                          | `true`, `false`     | `false` |

Example:
```bash
# Set a custom prompt to guide the AI's behavior
mycoder config set customPrompt "Always write TypeScript code with proper type annotations. Prefer functional programming patterns where appropriate."

# Enable GitHub integration
mycoder config set githubMode true
```

## Configuration File Location

MyCoder stores its configuration in a JSON file in your user directory:

- On macOS/Linux: `~/.config/mycoder/config.json`
- On Windows: `%APPDATA%\mycoder\config.json`

While you can edit this file directly, it's recommended to use the `mycoder config` commands to ensure proper formatting.

## Overriding Configuration

Command-line arguments always override the stored configuration. For example:

```bash
# Use a different model provider just for this session
mycoder --modelProvider openai "Create a React component"
```

This will use OpenAI for this session only, without changing your stored configuration.

## Resetting Configuration

To reset a specific configuration value to its default:

```bash
# Remove a specific configuration value
mycoder config set modelProvider ""
```

To reset all configuration to defaults, you can delete the configuration file and restart MyCoder.