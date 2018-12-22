import React, { Component } from 'react';
import logo from './logo.svg';

const deck_suits = ["diamonds", "hearts", "spades", "clubs"];
const card_numbers = [ "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K" ];
const row_count = 7;

class Game extends Component {
  constructor( props ) {
    super(props);
    this.state = {
      deck: this.return_shuffled_deck(),
    }
  }

  build_deck(){
    let deck = [];
    for (let i = 0; i < deck_suits.length; i++){
      let card_color = ( (deck_suits[i] == "diamonds" || deck_suits[i] == "hearts" ) ? 'red' : 'black');
      for (let j = 0; j < card_numbers.length; j++){
        let card = {
          "suit": deck_suits[i],
          "value": card_numbers[j],
          "color": card_color
        }
        deck.push(card);
      }
    }
    return deck;
  }

  return_shuffled_deck(){
    let deck = this.build_deck();
    return this.shuffle_array(deck);
  }

  shuffle_array(array){
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
  }

  render() {
    return (
      <div>
        {this.state.deck.map((card, i) => <div>{i}: {card.suit} {card.value} {card.color}</div>)}
      </div>
    );
  }
}

export default Game;
