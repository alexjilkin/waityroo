const swoosh = (() => {
    const delta = 2
    let height
    let count
    let brightness = 100;
    let anchor
    let barHeight

    function init(_anchor, _barHeight = 50) {
        anchor = _anchor
        anchor.style.position = 'relative'
        height = anchor.clientHeight
        barHeight = _barHeight
        count = Math.round(height / barHeight)
        
        triggerSwoosh(false, 1)
    }

    function triggerSwoosh(isRight, isBrighter) {
        brightness += + (((Math.random() * 15) + 20) * isBrighter)
        const container = document.createElement('div')

        container.className = 'container'
        container.style = `filter: brightness(${brightness}%);`
    
        for (let i = 0; i < count; i++) {
            const swoosh = document.createElement('div')
            swoosh.className = `bar ${isRight ? 'right' : 'left'}`;
            swoosh.style = `--index: ${i}; --delta: ${delta}; --barHeight:${barHeight}`
            container.appendChild(swoosh)
        }
        
        anchor.appendChild(container)
        setTimeout(() => triggerSwoosh(!isRight, isBrighter * -1), delta * 1000)
        setTimeout(() => container.remove(), delta * 5000)
    }

    return {init}
})