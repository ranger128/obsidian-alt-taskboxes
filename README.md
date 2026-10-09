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

The markers follow David Allen's [GTD workflow](https://gettingthingsdone.com/wp-content/uploads/2024/05/GTD_workflow_map.pdf). Each status gets a colored [Lucide](https://lucide.dev) square icon in reading view and live preview. Markers, icons and colors are defined in the `MARKERS` map in `main.ts`. Any other character falls back to a checked box. Only done and cancelled tasks are struck through.

| Markdown | Status | GTD | Icon |
| --- | --- | --- | --- |
| `- [ ]` | To do | Next action | square |
| `- [x]` | Done | Do it | square-check-big |
| `- [X]` | Done | Do it | square-check-big |
| `- [@]` | Waiting for | Delegate | square-user |
| `- [<]` | Scheduled | Defer to calendar / tickler | square-arrow-left |
| `- [?]` | Someday / maybe | Incubate | square-help |
| `- [-]` | Cancelled | Trash | square-x |
