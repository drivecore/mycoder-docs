## Convert from npm to pnpm

### Background
This project currently uses npm as its package manager. Converting to pnpm would provide several benefits:

- Faster installation times
- Disk space efficiency through content-addressable storage
- Strict dependency management preventing phantom dependencies
- Better monorepo support if needed in the future

### Proposed Changes
- Add pnpm-lock.yaml
- Remove package-lock.json
- Update documentation to reference pnpm instead of npm/yarn
- Add pnpm-specific configuration files if needed

### Implementation Details
The conversion should be straightforward:
1. Install pnpm globally
2. Remove node_modules and package-lock.json
3. Run pnpm install to generate pnpm-lock.yaml
4. Update README.md and other docs to use pnpm commands
5. Verify that the application builds and runs correctly with pnpm

### Impact
This change is expected to have minimal impact on the development workflow while providing the benefits mentioned above.