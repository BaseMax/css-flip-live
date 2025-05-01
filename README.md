# CSS Flip Live

**Live CSS Left/Right Property Processor**

A simple, client-side HTML/CSS/JS tool that processes CSS on-the-fly. It scans for `left:` and `right:` rules in your CSS, swaps them using a temporary token, appends a `/*max*/` marker to the new rules (unless already present), and displays the transformed CSS instantly.

## Features

- **Real-time Processing**: Changes in the input textarea are immediately reflected in the output.
- **Left/Right Swap**: Finds lines containing `left:` or `right:`, swaps them using a temporary placeholder to avoid conflicts.
- **Max Marker**: Automatically appends `/*max*/` to swapped lines, skipping lines that already have the marker.
- **Indentation Preservation**: Keeps original indentation for readability.

## Demo

1. Open `index.html` in your browser.
2. Paste or write your CSS with `left:`/`right:` rules in the **Input CSS** textarea.
3. See the processed output appear in the **Processed Output** textarea.

## Installation

No installation required—everything runs purely in the browser. Just clone the repo:

```bash
git clone https://github.com/BaseMax/css-flip-live.git
cd css-flip-live
``` 

Then open `index.html` in your favorite browser.

## Usage

Edit the CSS in the **Input CSS** field. The script (in `script.js`) handles the live processing:

- Splits input by lines
- Detects and processes `left:` / `right:` lines
- Swaps properties, skips marked lines
- Appends `/*max*/`

The finished CSS shows up in the **Processed Output** field, ready to copy back into your stylesheets.

## Files

- **index.html**: Main interface and layout
- **style.css**: Basic styling for the editor fields
- **script.js**: Core logic for live CSS processing
- **LICENSE**: MIT License

## License

MIT License

Copyright (c) 2025 Max Base
