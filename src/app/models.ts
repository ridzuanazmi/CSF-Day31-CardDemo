export interface Card {
    imageIdx: number;
    Suit: string;
    Value: string;
}

const suits = ['Heart', 'Spade', 'Clover', 'Diamond'];
const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];

let imageIdxCounter = 1;

export class DeckOfCards {
    deck: Card[] = [];

    constructor() {

        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < values.length; j++) {
                this.deck.push({
                    imageIdx: 0,
                    Suit: suits[i],
                    Value: values[j]
                })
            }
        }
    }

    shuffle() {

        for (let i = this.deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            let temp = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = temp;
        }

        // console.log('The first ten cards are:');

        // for (let i = 0; i < 10; i++) {
        //     console.log(`${this.deck[i].Value} of ${this.deck[i].Suit}`);
        // }
    }

    drawCard(): Card | undefined {
        if (this.deck.length === 0) {
            throw new Error("The deck is empty");
        }
        let card = this.deck.pop();
        imageIdxCounter++;
        return card;
    }
}
