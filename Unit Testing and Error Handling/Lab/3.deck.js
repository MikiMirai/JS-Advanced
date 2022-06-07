function deck(cards){
    let result = [];

    for (let cardString of cards) {
        const face = cardString.slice(0, -1);
        const suit = cardString.slice(-1);

        try {
            const card = cardsCreate(face, suit);
            result.push(card);
        } catch (error) {
            result = ['Invalid card: ' + cardString]
        }
    }
    console.log(result.join(' '));

    function cardsCreate(face, suit){
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'K', 'Q', 'A'];
        const suits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663',
        }
    
        if (faces.includes(face) == false) {
            throw new Error('Invalid face: ' + face);
        }
        if (suits[suit] == undefined) {
            throw new Error('Invalid suit: ' + face);
        }
    
        const result = {
            face,
            suit: suits[suit],
            toString(){
                return this.face + this.suit;
            }
        }
    
        return result;
    }
}

console.log(deck(['AS', '10D', 'KH', '2C']));
console.log(deck(['5S', '3D', 'QD', '1C']));