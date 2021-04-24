const swoosh = (() => {
    const delta = 2;
    let height;
    let count;
    let lastBrightness = Math.random() * (70) + 80;
    let lastNegative = -1;

    function swoosh(anchor, isRight = true) {
        anchor.style.position = 'relative'
        height = anchor.clientHeight;
        count = Math.round(height / 80);

        const container = document.createElement('div')
        container.className = 'container'

        lastNegative *= -1
        const brightness = lastBrightness + (((Math.random() * 15) + 20) * lastNegative)
        lastBrightness = brightness;

        for (let i = 0; i < count; i++) {
            const swoosh = document.createElement('div')
            swoosh.className = `bar ${isRight ? 'right' : 'left'}`;
            swoosh.style = `--index: ${i}; --delta: ${delta}; filter:brightness(${brightness}%)`
            container.appendChild(swoosh)
        }
        
        anchor.appendChild(container)
        setTimeout(() => swoosh(anchor, !isRight), delta * 1000)
        setTimeout(() => container.remove(), delta * 2500)
    }

    return swoosh
})()