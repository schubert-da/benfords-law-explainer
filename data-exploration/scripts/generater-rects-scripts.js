(() => {
    const elements = [...document.querySelectorAll('*')];

    const data = elements.map((el, index) => {
        // Add random border color
        const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        el.style.border = `1px solid ${color}`;

        // Safely get class names
        let classes = [];
        if (el.classList && el.classList.length) {
            classes = [...el.classList];
        } else if (typeof el.className === 'string') {
            classes = el.className.trim() ? el.className.trim().split(/\s+/) : [];
        }

        const rect = el.getBoundingClientRect();

        return {
            index,
            tag: el.tagName ? el.tagName.toLowerCase() : null,
            id: el.id || null,
            width: rect.width,
            height: rect.height,
            area: rect.width * rect.height,
            x: rect.x,
            y: rect.y
        };
    });

    // Download JSON
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'elements-with-borders.json';
    document.body.appendChild(a);
    a.click();
    a.remove();

    URL.revokeObjectURL(url);
    console.log(`Processed ${elements.length} elements and downloaded JSON.`);
})();
