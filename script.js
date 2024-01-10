document.getElementById('draw-button').addEventListener('click', function() {
    const selectedCards = selectRandomCards(3);
    displayCards(selectedCards);
    this.style.display = 'none'; // 「カードを引く」ボタンを隠す
    document.getElementById('reset-button').style.display = 'block'; // 「戻る」ボタンを表示
});

document.getElementById('reset-button').addEventListener('click', function() {
    document.getElementById('cards-container').innerHTML = ''; // カードをクリア
    this.style.display = 'none'; // 「戻る」ボタンを隠す
    document.getElementById('draw-button').style.display = 'block'; // 「カードを引く」ボタンを表示
});

function selectRandomCards(count) {
    const totalCards = 89;
    let cards = [];
    for (let i = 1; i <= totalCards; i++) {
        cards.push(`https://raw.githubusercontent.com/Motoaki-Shimokawa/tarot-website/main/card${i}.jpg`);
    }
    const shuffled = cards.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function displayCards(cardFileNames) {
    const container = document.getElementById('cards-container');
    container.innerHTML = '';

    cardFileNames.forEach(fileName => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.style.backgroundImage = `url('${fileName}')`;
        container.appendChild(cardElement);
    });
}
