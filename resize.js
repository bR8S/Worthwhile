// Function to set the width of the target div as a CSS variable
function setDivHeightAsCSSVariable() {
    const timelineCards = document.querySelectorAll('.plan-card')
    const timelineSteps = document.querySelectorAll('.plan-line')

    const timeline = document.querySelector('.plan-timeline')

    const timelineCardsArr = Array.from(timelineCards)
    const timelineStepsArr = Array.from(timelineSteps)

    timelineCardsArr.forEach((card, index) => {
        if(window.innerWidth > 1024 ){
            handleDesktopResize(card, timelineStepsArr[index])
        }
    
        else if(window.innerWidth <= 1024 && window.innerWidth > 768){
            handleTabletResize(card, timelineStepsArr[index])
        }
         
        else if(window.innerWidth <= 768){
            handleMobileResize(card, timelineStepsArr[index])
        }
    })

    const targetDiv = document.querySelector('.plan-card-first');
    const height = targetDiv.offsetHeight;

    // Set the CSS variable with the width
    document.documentElement.style.setProperty('--target-div-height', `${height}px`);
}

function handleDesktopResize(card, step){
    const dotHeight = 20
    const padding = 40

    /* height = (TARGET DIV HEIGHT + MARGIN BOT) - (DOT HEIGHT + PADDING TOP + PADDING BOT) */
    step.style.height = card.offsetHeight - (dotHeight + padding) + "px"
}

function handleTabletResize(card, step){
    const dotHeight = 20
    const padding = 48

    /* height = (TARGET DIV HEIGHT + MARGIN BOT) - (DOT HEIGHT + PADDING TOP + PADDING BOT) */
    step.style.height = (card.offsetHeight + 32) - (dotHeight + padding) + "px"
}

function handleMobileResize(card, step){
    const dotHeight = 16
    const padding = 48

    /* height = (TARGET DIV HEIGHT + MARGIN BOT) - (DOT HEIGHT + PADDING TOP + PADDING BOT) */
    step.style.height = (card.offsetHeight + 32) - (dotHeight + padding) + "px"
}

// Run the function when the page loads
window.addEventListener('load', setDivHeightAsCSSVariable);

// Re-run the function if the window is resized
window.addEventListener('resize', setDivHeightAsCSSVariable);