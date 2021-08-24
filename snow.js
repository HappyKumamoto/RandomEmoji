//当てる秒数 + 0.5秒以降のとき
//絵文字が回りながら降るJs
//当初、涼しげな雪の結晶絵文字「固定」で作り始めたためsnow.js
let snow = document.getElementsByClassName('snow');

let oncli = document.createElement("script");   //onclick.jsを持ってくる
oncli.src = "onclick.js";

//絵文字を作る関数。n は個数
function snowMaker(n) {
    let snow = document.createElement("div");
    snow.className = "snow";
    snow.textContent = `${emojis[emojiNo]}`;   //今回の絵文字
    for(let i = 0; i < n; i++) {
        snowSet(snow);
    }
}

//❄のセッティングをする関数。
function snowSet(clone) {
    let snowClone = clone.cloneNode(true);
    let snowStyle = snowClone.style;

    //絵文字の位置（left）、時間をずらす（animation-delay）、サイズ（font-size）をランダムで指定
    snowStyle.left = 100 * Math.random() + "%";
    snowStyle.animationDelay = 12 * Math.random() + "s";
    snowStyle.fontSize = Math.floor(50 * Math.random() + 20) + "px";
    document.body.appendChild(snowClone);

    //一つのアニメーションが終わったら新しい絵文字を生成
    snowClone.addEventListener("animationend", function() {
        this.parentNode.removeChild(this);
        let snow = document.createElement("div");
        snow.className = "snow";
        snow.textContent = `${emojis[emojiNo]}`;   //今回の絵文字
        snowSet(snow);
    }, false)
}

//絵文字を50個降らせる
snowMaker(50)
