let btn1 = document.getElementById("myButton");
let btn2 = document.getElementById("myButton2");
let copyDiv = document.querySelector(".copyCode")
let rgb1 = "#000";
let rgb2 = "#fff";

const myHexaValues = () => {
    let myHexValues = "0123456789abcdef";
    let color = "#";

    for(let i = 0; i < 6; i++){     
        color = color + myHexValues[Math.floor(Math.random() * 16)];
    }
    return color;
}

const handlebButton1 = () => {
    rgb1 = myHexaValues();
    console.log(rgb1);
    btn1.innerText = rgb1;
    btn1.style.backgroundColor =  `${rgb1}`;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2}`;
    copyDiv.innerHTML = 
    `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`
};

const handlebButton2 = () => {
    rgb2 = myHexaValues();
    console.log(rgb2);
    btn2.innerText = rgb2;
    btn2.style.backgroundColor = `${rgb2}`;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyDiv.innerHTML = 
    `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`
};

btn1.addEventListener("click", handlebButton1);
btn2.addEventListener("click", handlebButton2);

copyDiv.addEventListener("click", () => {

    navigator.clipboard.writeText(copyDiv.innerText);

    let copyText = document.getElementById("copyText");

    copyText.innerText = "✅ Copied!";

    setTimeout(() => {
        copyText.innerText = "Click the Code Block to Copy CSS";
    }, 2000);

});