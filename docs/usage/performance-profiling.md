---
sidebar_position: 3
---

# Performance Profiling

MyCoder includes a performance profiling feature that helps you understand startup times and identify potential bottlenecks. This is particularly useful for diagnosing performance differences between operating systems or environments.

## Enabling Profiling

You can enable performance profiling in two ways:

### 1. For a Single Session

Use the `--profile` flag with any MyCoder command:

```bash
# Enable profiling for a specific command
mycoder --profile "Fix the build errors"

# Or with other commands
mycoder --profile --interactive
```

### 2. As Default Behavior

Set profiling as the default behavior using the configuration system:

```bash
mycoder config set profile true
```

## Understanding Profiling Output

When profiling is enabled, MyCoder will output detailed timing information at the beginning of each session:

```
📊 Performance Profile:
=======================
Module initialization: 10.12ms (10.12ms)
After imports: 150.34ms (140.22ms)
Main function start: 269.99ms (119.65ms)
After dotenv config: 270.10ms (0.11ms)
After Sentry init: 297.57ms (27.48ms)
Before package.json load: 297.57ms (0.00ms)
After package.json load: 297.78ms (0.21ms)
Before yargs setup: 297.78ms (0.00ms)
After yargs setup: 401.45ms (103.67ms)
Total startup time: 401.45ms
=======================
```

The profiling output shows:

- **Absolute times**: The total elapsed time since the start of the process
- **Relative times** (in parentheses): The time taken by each specific step

## Key Performance Metrics

The most important metrics to watch are:

1. **Module initialization**: Time to load and initialize Node.js modules
2. **After imports**: Time to complete all JavaScript imports
3. **After yargs setup**: Time to set up the command-line interface
4. **Total startup time**: Overall time from start to when MyCoder is ready to run

## Diagnosing Performance Issues

If you notice slow startup times, here are some common causes and solutions:

### Slow Module Loading

If "Module initialization" or "After imports" takes a long time:
- Check for slow disk I/O
- Consider using an SSD if you're on a mechanical hard drive
- Verify you're not running many background processes

### Slow Command-Line Parsing

If "After yargs setup" takes a long time:
- Check if you have many environment variables
- Verify your shell initialization files aren't slowing things down

### Operating System Differences

Performance can vary significantly between operating systems:
- Windows may be slower due to different filesystem performance
- WSL (Windows Subsystem for Linux) may have overhead
- macOS with Apple Silicon tends to be fastest for Node.js applications

## Improving Performance

Some tips for improving MyCoder's startup performance:

1. **Use Node.js 20+**: Later versions of Node.js have better startup performance
2. **Minimize environment variables**: Having many environment variables can slow down process startup
3. **SSD storage**: Using an SSD can significantly improve module loading times
4. **Clean npm cache**: Occasionally run `npm cache clean --force` to clear cached packages

## Reporting Performance Issues

If you encounter significant performance problems that profiling doesn't help resolve, please report them on our [Discord server](https://discord.gg/5K6TYrHGHt) with:

1. Your operating system and version
2. Node.js version (`node --version`)
3. The complete profiling output
4. Any relevant hardware details (CPU, RAM, disk type)