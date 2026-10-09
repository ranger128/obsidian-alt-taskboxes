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

## Task markers

Each status gets a colored [Lucide](https://lucide.dev) square icon in reading view and live preview. Markers, icons and colors are defined in the `MARKERS` map in `main.ts`. Any other character falls back to a checked box. Only done and cancelled tasks are struck through.

| Markdown | Status | Icon |
| --- | --- | --- |
| `- [ ]` | To do | square |
| `- [x]` | Done | square-check-big |
| `- [X]` | Done | square-check-big |
| `- [/]` | In progress | square-slash |
| `- [=]` | Paused / on hold | square-pause |
| `- [#]` | Blocked | square-stop |
| `- [@]` | Delegated / waiting on someone | square-user |
| `- [>]` | Forwarded / migrated | square-arrow-right |
| `- [<]` | Scheduled | square-arrow-left |
| `- [-]` | Cancelled | square-x |
