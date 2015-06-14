

var app = app || {};

var suits = ["heart", "spade", "diamond", "club"]


var oncard;


var CardCol = Backbone.Collection.extend({
  // sets the basic model i guess i use
  model: app.card,
// adds a new 52 cards to the deck, 13 of each suit
  makeDeck: function(){

    for(i in suits){
     console.log(i)
     for(var q = 1; q < 14; q++){
     //  console.log(suits[i], q);
       this.add(new app.card({number:q, suit: suits[i]}))

       }
     }

  },


  // Draw a random card and remove it from the collection
  drawCard:function(){
    console.log('drawing a card');
    console.log(this)

    oncard = this.at(Math.floor(Math.random()*this.length))
    //console.log(this.at(oncard))
      //app.deck.where(oncard))
    // think I can return app.remove a
    return this.remove(oncard)


  }

})

app.deck = new CardCol();

app.deck.makeDeck();





var ace = new app.card({number:3, suit:'hearts'});

console.log(app.deck);

//app.deck.add(ace)
//app.deck.remove("c7")

//console.log(getCard())

//app.deck.drawCard();


function getCard(){
//  console.log(suits[Math.floor(Math.random()* 3)] )
  oncard = app.deck.at(Math.floor(Math.random()*app.deck.length))
  console.log(app.deck.at(oncard))
    //app.deck.where(oncard))
  // think I can return app.remove a
  return app.deck.remove(oncard)
}
