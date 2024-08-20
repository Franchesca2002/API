document = getElementById('generateCards').addEventListener('Click'.generateCards);
document = getElementById('generateMultipleCards').addEventListener('Click'.generateMultipleCards);

function generateCards(){
    const cardContainer =document.getElementById('cardContainer');

    const character = fetchCharaterData();

    const cart = createCard(charater.name,charater.quote);
    cartContainer.appenchill(cart)
}


