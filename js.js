let tile = "tile-rock"

function change(id) {
    if (isMouseDown == true) {
        document.getElementById(id).className = tile;
    }
}

function change_(id) {
    document.getElementById(id).className = tile;
}

function fill(){
    let p = document.getElementsByClassName("map-chips")[0];
    let all_chips = p.getElementsByTagName("td");
    for (let i of all_chips) {
        if (i.className != "map-chip-fixed"){
            i.className = tile;
        }
    }
}

function select(tile_kind) {
    tile = tile_kind;
    let e = document.getElementsByClassName("now-color")[0];
    e.classList.remove(e.classList[1]);
    e.classList.add(tile);
}

const dict_tile = {
    "tile-none"    : "0",
    "tile-grass"   : "1",
    "tile-soil"    : "2",
    "tile-rock"    : "3",
    "tile-water"   : "4",
    "tile-loft"    : "5",
    "tile-maruzen" : "6",
    "tile-hotel"   : "7",
    "tile-clubroom": "8",
    "tile-floor"   : "9",
    "tile-gate"    : "g"
}

function ex(){
    let result = "00";
    for(let i of [..."0123456789abcdefghijklmnopqrstuvwxy"]) {
        for(let j of [..."0123456789abcdefghijklmnopqrstuvwxy"]) {
            let id = i+j;
            let element = document.getElementById(id);
            tile_name = element.className;
            if(["map-chip-fixed", "map-chip"].includes(tile_name)){
                tile_name = "tile-none";
            }
            result += dict_tile[tile_name];
        }
    }

    document.getElementsByClassName("result")[0].innerHTML = result;
}

let isMouseDown = false;

document.addEventListener('DOMContentLoaded',
    function(){
        chips = document.getElementsByClassName("map-chip");
        for (let i=0; i<chips.length; i++) {
            chips[i].onclick = function(){change_(this.id)};
            chips[i].onmouseover = function(){change(this.id)};
        }
    }
);

function copyButton(elementId) {
    // 指定したIDの要素のテキストを取得
    var element = document.getElementsByClassName(elementId)[0];

    // テキストをクリップボードにコピー
    navigator.clipboard.writeText(element.textContent);
}

document.addEventListener("mousedown", function() {
    isMouseDown = true;
});

document.addEventListener("mouseup", function() {
    isMouseDown = false;
});