console.log("page loaded...");

function toggleVideo(element) {
    if (element.paused) {
        element.play()
    }
    else {
        element.pause()
    }
}

function toggleVideo_s(element) {
    if (element.paused) {
        element.play()
        element.muted = true
    }
    else {
        element.pause()
    }
}