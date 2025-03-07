## Issue: Example code blocks in documentation lack word wrap making them unreadable

### Problem
In the examples section of the documentation, there are many code blocks showing example prompts. These code blocks (created using triple backticks) don't have word wrap, making them difficult to read as text extends beyond the visible area.

### Affected Files
The issue appears in multiple example files including:
- `docs/examples/effective-techniques.md`
- `docs/examples/project-management.md`
- `docs/examples/code-development.md`
- `docs/examples/devops.md`
- `docs/examples/code-review.md`

### Proposed Solution
Replace the current code blocks with an alternative formatting that:
1. Maintains clear visual separation from regular text
2. Supports word wrap
3. Preserves the content's readability

Possible alternatives include:
- Using blockquotes (with `>`) instead of code blocks
- Using a custom styled div or admonition component that supports word wrap
- Configuring CSS to enable word wrap in code blocks

### Impact
This change will significantly improve readability of the example prompts, making them more accessible and useful to users of the documentation.