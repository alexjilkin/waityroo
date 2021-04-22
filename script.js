(() => {
    const delta = 2;
    const height = document.documentElement.clientHeight;
    const count = Math.round(height / 80);
    let lastRandom = Math.random() * (100) + 80;

    function swoosh(isRight = true) {
        const container = document.createElement('div');
        container.className = 'container'
        const brightness = lastRandom + (((Math.random() * 20) + 10) * (Math.random() > 0.5 ? -1 : 1));
        lastRandom = brightness;

        for (let i = 0; i < count; i++) {
            const swoosh = document.createElement('div')
            swoosh.className = `bar ${isRight ? 'right' : 'left'}`;
            swoosh.style = `--index: ${i}; --delta: ${delta}; filter:brightness(${brightness}%)`
            container.appendChild(swoosh)
        }
        
        document.body.appendChild(container)
        setTimeout(() => swoosh(!isRight), delta * 1000);
        setTimeout(() => container.remove(), delta * 2500)
    }

    swoosh()
})()