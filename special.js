//「おしいです」のとき、絵文字の透過度を時間とともに変化させるJs

let special = document.getElementById("special");

let isPositive = true;
let opacity = 0; // 不透明度

function opacitySpecial() {
  if (isPositive) {
    opacity += 0.05;
  } else {
    opacity -= 0.05;
  }

  if (opacity > 1) {
    isPositive = false;
  } else if (opacity < 0) {
    isPositive = true;
  }

  special.style.opacity = opacity;
}
// 200ミリ秒ごとに opacityAnimate 関数を実行する
setInterval(opacitySpecial, 200);

