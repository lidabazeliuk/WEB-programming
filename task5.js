const moodArray = [
    {
        mood: "Веселий",
        url: "https://w7.pngwing.com/pngs/180/962/png-transparent-smiley-emoticon-smiley-miscellaneous-smiley-desktop-wallpaper-thumbnail.png"
    },
    {
        mood: "Сумний",
        url: "https://w7.pngwing.com/pngs/222/140/png-transparent-sad-emoticon-iphone-emoji-sadness-smiley-emoticon-emoji-face-electronics-face-emoji-face-thumbnail.png"
    },
]

document.getElementById("submit").onclick = () => {
    let inputValue = document.getElementById("mood").value;
    let image = document.getElementById("myImage");

    console.log(inputValue)

    if (Number(inputValue) === 1) {
        image.src = moodArray[0].url;
    } else if (Number(inputValue) === 2) {
        image.src = moodArray[1].url;
    } else {
        alert('Введіть настрій від 1 до 2')
    }
}

