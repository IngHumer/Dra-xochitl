let global = document.getElementById("global")

function globalPOS(){
    global.style.marginTop = window.innerHeight + "px"
}

globalPOS()
setInterval(global, 10000)