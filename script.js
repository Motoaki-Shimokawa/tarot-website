document.getElementById('draw-button').addEventListener('click', function() {
    const selectedCard = selectRandomCards(1); // 1枚のカードを選択
    displayCards(selectedCard);
    this.style.display = 'none'; // 「カードを引く」ボタンを非表示にする
    document.getElementById('meditation-card-button').style.display = 'block'; // 「天符経瞑想カードはこちら」ボタンを表示
});

document.getElementById('meditation-card-button').style.display = 'none'; // 初期状態では非表示にする

function selectRandomCards(count) {
    const totalCards = 45; // カードの枚数を45枚に変更
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

// 「天符経瞑想カードはこちら」ボタンのクリックイベント
document.getElementById('meditation-card-button').addEventListener('click', function() {
    window.location.href = 'https://www.ilchihspshop.com/shop/shopdetail.html?brandcode=006000000018&search=%C5%B7%C9%E4%B7%D0&sort=';
});
