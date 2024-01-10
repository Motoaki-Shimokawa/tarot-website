document.getElementById('draw-button').addEventListener('click', function() {
    const selectedCards = selectRandomCards(3);
    displayCards(selectedCards);
    this.style.opacity = '0.6'; // ボタンを暗くする
    this.disabled = true;       // ボタンを非活性化
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
