# Market Moves

Static, mobile-friendly stream and resource library for Max Lipset.

## Maintenance
- Add content to `content.json`. Each entry has `type` (Streams, Decks, Charts, Research), title, date (ISO or blank when unconfirmed), label, description, note, links, image.
- Add only audience-approved materials to `assets/`. No personal holdings, account information, credentials, coaching feedback, or internal notes.
- Keep source dates and methodology attached to research. These are historical resources, not live data.
- The featured recording is in `index.html`; update it along with its library entry when replacing it.
- Zoom recordings open on Zoom. Their original access requirements remain in force; this site does not host or unlock video.
- No signup form, analytics, or email/SMS collection is enabled.

## Preview
Run `python3 -m http.server 8874` in this directory. Open http://localhost:8874.

## Publish
GitHub Pages: branch `main`, directory `/`. No build tools needed.
