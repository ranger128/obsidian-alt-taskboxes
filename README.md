# obsidian-alt-taskboxes

Alternate task checkbox styles for Obsidian.

## Install with BRAT

In the BRAT plugin, choose "Add Beta plugin" and enter `ranger128/obsidian-alt-taskboxes`.

## Development

```
npm install
npm run dev     # watch build
npm run build   # production build
```

## Releases

Merging a PR into `main` builds the plugin and publishes a GitHub release tagged with the `manifest.json` version, with `main.js`, `manifest.json` and `styles.css` attached. If that version is already released, the patch version is bumped automatically and committed back to `main`. To release a minor or major version, change the version in `manifest.json`, `package.json` and `versions.json` in your PR.
