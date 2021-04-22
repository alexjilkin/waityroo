(() => {
    const delta = 2;

    function swoosh(isRight = true) {
        const container = document.createElement('div');
        container.className = 'container'

        for (let i = 0; i < 10; i++) {
            const swoosh = document.createElement('div')
            swoosh.className = `bar ${isRight ? 'right' : 'left'}`;
            swoosh.style = `--index: ${i}; --delta: ${delta}`
            container.appendChild(swoosh)
        }
        
        document.body.appendChild(container)
        setTimeout(() => swoosh(!isRight), delta * 1000);
    }

    swoosh()
})()