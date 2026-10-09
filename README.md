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

Each task character gets a [Lucide](https://lucide.dev) square icon in reading view and live preview. Any other character falls back to a checked box. Only done and cancelled tasks are struck through.

| Markdown | Meaning | Icon |
| --- | --- | --- |
| `- [ ]` | To do | square |
| `- [x]` | Done | square-check-big |
| `- [X]` | Done | square-check-big |
| `- [/]` | In progress | square-slash |
| `- [-]` | Cancelled | square-x |
| `- [B]` | Blocked | square-stop |
| `- [P]` | Paused / on hold | square-pause |
| `- [>]` | Forwarded / migrated | square-arrow-right |
| `- [<]` | Scheduled | square-arrow-left |
| `- [D]` | Delegated | square-user |
| `- [?]` | Question | square-dashed |
| `- [!]` | Important | square-exclamation-point |
| `- [*]` | Star | square-star |
| `- [n]` | Note | square-pen |
| `- ["]` | Quote | message-square-quote |
| `- [i]` | Information | square-text |
| `- [I]` | Idea | square-sparkles |
| `- [l]` | Location | square-dot |
| `- [b]` | Bookmark | square-bookmark |
| `- [S]` | Savings | square-percent |
| `- [p]` | Pro | square-plus |
| `- [c]` | Con | square-minus |
| `- [f]` | Fire | square-activity |
| `- [k]` | Key | square-asterisk |
| `- [w]` | Win | square-chevron-up |
| `- [u]` | Up | square-arrow-up |
| `- [d]` | Down | square-arrow-down |
