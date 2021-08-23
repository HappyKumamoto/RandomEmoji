//秒当てゲームの中心的Js
//gameオブジェクト //音を追加

let el = document.createElement("script");//紙吹雪のkamiFu.jsを持ってくる
el.src = "kamiFu.js";

let sn = document.createElement("script");//雪の結晶のsnow.jsを持ってくる
sn.src = "snow.js";

let sp = document.createElement("script");//「おしい」のときのspecial.js
sp.src = "special.js";

const game = {
    startTime: null,
    displayArea: document.getElementById('display-area'),
    onclickArea: document.getElementById('onclick-area'),

    bgm1:new Audio('bgm/hands.mp3'),
    bgm2:new Audio('bgm/tekkin.mp3'),
    bgm3:new Audio('bgm/oshii.mp3')

};


let ss = [ 5 , 6 , 7 , 8 , 9 , 10 ]; //今回当てる秒数を5〜10の中からランダムで出す
let ssNo = Math.floor(Math.random() * ss.length);//ss[ssNo]はconfirmに表示させる


function start(){
    game.startTime = Date.now();      //上で用意した変数startTimeへ現在時刻のミリ秒を代入
    document.body.onclick = stop;
}
//onclick-areaの絵文字をランダムに出す
let emojis = [' 💡 ' ,  ' ☁️ '  , ' 🤍 ' , ' 🥚 ' , '🖱' , ' 🎾 ' ,' 🗿 ' ,
' 🥛 ' , ' 🗑 ' , ' 🌕 '  , ' 📷 ' , ' 🧰 ' , ' 📀 ' , 
 ' 🌶 ' , ' 🍊 ' , ' 🎰 ' , ' 🔋 ' , ' 🌵  ' , ' 🧮 ' ,
 ' 📅 ' , ' 🔒 ' , ' 🗝️ ' ,  ' 🎲 '  , ' 📻 ' , ' 🥝 ' , ' 📱 ' ,
' 🗄️ ' ,  ' 🍎 ' , ' 🍐 ' , ' 🍱 ' ,' 🍙 ' ,  ' 🍋 ' ,
' 🔔 ' , ' 🏆 ' , ' 🏯 ' , ' 🌿 ' , ' 🍇 ' , ' 🎨 ' , ];
//' 🪙 ' , ' 🫑 '  ,' 🫖 ' ,' 🍡🍡 ' , '🎍🎍' , ' 🧷 ' ,

let emojiNo = Math.floor( Math.random() * emojis.length);
console.log(emojis[emojiNo]);
document.getElementById('onclick-area').innerHTML = emojis[emojiNo];


function stop() {
    let currentTime = Date.now();
    let seconds = (currentTime - game.startTime) / 1000;
    if ( (ss[ssNo]) <= seconds && seconds < (ss[ssNo]+0.5) ) {
        //( 当てる秒数 + 0.5 )未満ならば 「おめでとう」と紙吹雪表示
        game.displayArea.innerText = `${seconds}秒でした！
        おめでとうございます!! `;
        document.body.appendChild(el);  //kami.jsで紙吹雪を出す
        game.bgm1.play();
        //game.bgm1.loop = true;//bgm繰り返し

    }else if( (ss[ssNo]) <= seconds && seconds < (ss[ssNo]+1) ) {
        //( 当てる秒数 + 1 )未満ならば 「すばらしい」を表示
        displayArea.innerText = `${seconds}秒でした！
        ＼すばらしい！／`;
        document.body.appendChild(sn);//snow.jsで回転する絵文字を降らせる
        snow.innerHTML= emojis[emojiNo];
        game.bgm2.play();
    }else{
        game.displayArea.innerText = `${seconds}秒でした！
        ＼ おしいです ／ `;
        //今回の絵文字が回転しながら透過度も変化しながら降りていく
        document.body.appendChild(sp);
        special.innerText = emojis[emojiNo];
        //appendScript(sp);
        game.bgm3.play();
    }
  document.body.onclick = null;   //二回以上は押せないようにする
}   

//コンファーム内の表示
if(confirm(`👉[[  OK  ]] を押した後
　　　　　　　　　　　　　　　　　　　　
⏳[[　　${ss[ssNo]} 秒　　]]⌛ 経ったと思ったら
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　
動いている👉[[　❔Emoji❔　]]を押してください。 `)){
　　　　　
  start();

  document.write(ss[ssNo]);  //今回、何秒を当てるのかを画面に表示
}
