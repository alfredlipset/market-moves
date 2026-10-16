# Market Moves

Static, mobile-friendly stream and resource library for Max Lipset.

## Maintenance
- Add content to `content.json`. Each entry has `type` (Streams, Decks, Charts, Research), title, date (ISO or blank when unconfirmed), label, description, note, links, image.
- Add only audience-approved materials to `assets/`. No private holdings, account information, credentials, coaching feedback, or internal notes. User-requested recaps may summarize positions explicitly discussed in the linked streams; never import unrelated brokerage data.
- Keep source dates and methodology attached to research. These are historical resources, not live data.
- The featured recording is in `index.html`; update it along with its library entry when replacing it.
- Zoom recordings open on Zoom. Their original access requirements remain in force; this site does not host or unlock video.
- No signup form, analytics, or email/SMS collection is enabled.

## Preview
Run `python3 -m http.server 8874` in this directory. Open http://localhost:8874.

## Publish
GitHub Pages: branch `main`, directory `/`. No build tools needed.

## Stream ticker notes
- `tickers` contains ticker/asset, replay timestamp (minutes:seconds), status, stream-time price/levels, position recap and exact recovered OptionStrat links. Missing or ambiguous information remains labeled.
- `streams/YYYY-MM-DD.html` provides shareable standalone notes; keep these consistent with `content.json`.
- Linked OptionStrat models may be edited and show newer quotes. Do not present their current P&L as stream-time performance. The initial recap review was Oct 15, 2026.
- Search covers ticker notes; library cards expand to display them. Raw Zoom transcripts/chats remain outside this public repository.
