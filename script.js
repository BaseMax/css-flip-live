const editor = document.getElementById('editor');
const output = document.getElementById('output');

function processCSS() {
const lines = editor.value.split('\n');
const result = [];
lines.forEach(line => {
    // Check for left: or right: in the line
    if (/left\s*:/i.test(line) || /right\s*:/i.test(line)) {
    const indent = line.match(/^\s*/)[0];
    const trimmed = line.trim();

    // Skip lines already ending with /*max*/
    if (/\/\*max\*\/$/.test(trimmed)) {
        return; // do not include
    }

    // Swap left: and right:
    let swapped = trimmed
        .replace(/left\s*:/gi, '__TMP__:')
        .replace(/right\s*:/gi, 'left:')
        .replace(/__TMP__:/g, 'right:');

    // Append comment
    swapped += ' /*max*/';

    // Reapply indentation
    result.push(indent + swapped);
    } else {
    // Keep other lines unchanged
    result.push(line);
    }
});

output.value = result.join('\n');
}

// Live processing on input change
editor.addEventListener('input', processCSS);
