let gridofcolor = document.getElementById('colors');
let select = document.getElementById('selected');


function initGrid() {
    // collect colors in an array
    var colors = [];
    var range = ["00", "33", "66", "99", "cc", "ff"];

    for (var r = 0; r < range.length; r++) {
        for (var g = 0; g < range.length; g++) {
            for (var b = 0; b < range.length; b++) {
                colors.push("#" + range[r] + range[g] + range[b]);
            }
        }
    }

    // TODO complete the rest
    for (let i = 0; i < colors.length; i++) {
        let div = document.createElement('div');
        div.classList.add('choice');
        gridofcolor.appendChild(div);
        div.style.background = colors[i];
    }
    const boxes= document.querySelectorAll('.choice');
    boxes.forEach(box => {
        box.addEventListener('click' , function(){
            select.style.backgroundColor= box.style.background;
            select.innerText= box.style.background;
    })
})
}

window.onload = function () {
    initGrid();
}

