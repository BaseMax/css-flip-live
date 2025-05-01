// Elements
const editor = document.getElementById('editor');
const output = document.getElementById('output');

// Functions
const processCSS = () => {
    const lines = editor.value.split('\n');
    const result = [];
    lines.forEach(line => {
        if (/left\s*:/i.test(line) || /right\s*:/i.test(line)) {
            const indent = line.match(/^\s*/)[0];
            const trimmed = line.trim();

            if (/\/\*max\*\/$/.test(trimmed)) {
                result.push(indent + trimmed);
                return;
            }

            let swapped = trimmed
                .replace(/left\s*:/gi, '__TMP__:')
                .replace(/right\s*:/gi, 'left:')
                .replace(/__TMP__:/g, 'right:');

            swapped += ' /*max*/';

            result.push(indent + swapped);
        } else {
            result.push(line);
        }
    });

    output.value = result.join('\n');
}

// Events
editor.addEventListener('input', processCSS);
