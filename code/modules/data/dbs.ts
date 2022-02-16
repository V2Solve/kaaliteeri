/**
 * The suite of card.
 */
enum CardSuit
{
    clubs,
    diamonds,
    hearts,
    spades
}

/**
 * The card in a deck.
 */
enum CardPip
{
    ace,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    jack,
    queen,
    king,
    joker
}

// Represents one card in a Deck.
export class Card
{
     deck: Deck;
     suit: CardSuit;
     pip: CardPip;

     public constructor (deck: Deck, suit: CardSuit, pip: CardPip)
     {
         this.deck = deck;
         this.suit = suit;
         this.pip = pip;
     }

     getCardPoints (): number
     {
        switch (this.pip)
        {
            case CardPip.ace : return 10;
            case CardPip.two : return 0;
            case CardPip.three : {
                if (this.suit == CardSuit.spades)
                return 30;
                else
                return 0;
            }
            case CardPip.four : return 0;
            case CardPip.five : return 5;
            case CardPip.six : return 0;
            case CardPip.seven : return 0;
            case CardPip.eight : return 0;
            case CardPip.nine : return 0;
            case CardPip.ten : return 10;
            case CardPip.jack : return 10;
            case CardPip.queen : return 10;
            case CardPip.king : return 10;
            case CardPip.joker : return 0;
            default : return 0;
        }

        return 0;
     }

     printSuit () : string
     {
         switch (this.suit)
         {
             case CardSuit.clubs: return 'C';
             case CardSuit.hearts: return 'H';
             case CardSuit.diamonds: return 'D';
             case CardSuit.spades: return 'S';
             default:
                 return 'X';
         }
     }

     printPip () : string
     {
        switch (this.pip)
        {
            case CardPip.ace : return 'A';
            case CardPip.two : return '2';
            case CardPip.three : return '3';
            case CardPip.four : return '4';
            case CardPip.five : return '5';
            case CardPip.six : return '6';
            case CardPip.seven : return '7';
            case CardPip.eight : return '8';
            case CardPip.nine : return '9';
            case CardPip.ten : return '0';
            case CardPip.jack : return 'J';
            case CardPip.queen : return 'Q';
            case CardPip.king : return 'K';
            case CardPip.joker : return '^';
            default : return 'x';
        }

        return 'x';
     }

     printInfo (): string
     {
        return this.printSuit () + this.printPip ();
     }
}

/**
 * Represents a Deck.
 */
export class Deck
{
    name: string;   // Name of the Deck in case there are more than 1.
    cards: Array<Card> = new Array();

    public constructor (name: string)
    {
        this.name = name;
        // Lets create the cards.
        this.loadDeck();
    }   

    public getName (): string
    {
        return this.name;
    }

    getCards () : Array<Card>
    {
        return this.cards;
    }

    addCardToDeck (card: Card)
    {
        this.cards.push(card);   
    }


    getDeckPoints (): number
    {
        let numberofPoints = 0;
        this.cards.forEach(card => {

            numberofPoints += card.getCardPoints ();
        })

        return numberofPoints;
    }

    /**
     * Shuffles the deck;
     */
    shuffle ()
    {
        let newCardArray = new Array<Card> ();
        while (this.cards.length > 0)
        {
            let pick = getRandomInt(this.cards.length);
            let card = this.cards.splice(pick,1);
            newCardArray.push(card.pop());
        }
        
        // Okay so now the cards are all gone. Lets just put them back shuffled.
        
        newCardArray.forEach(card=>{
            this.cards.push(card);
        })
    }

    loadDeck ()
    {
        this.addCardToDeck(new Card(this,CardSuit.clubs,CardPip.ace));
        this.addCardToDeck(new Card(this,CardSuit.clubs,CardPip.two));
        this.addCardToDeck(new Card(this,CardSuit.clubs,CardPip.three));
        this.addCardToDeck(new Card(this,CardSuit.clubs,CardPip.four));
        this.addCardToDeck(new Card(this,CardSuit.clubs,CardPip.five));
        this.addCardToDeck(new Card(this,CardSuit.clubs,CardPip.six));
        this.addCardToDeck(new Card(this,CardSuit.clubs,CardPip.seven));
        this.addCardToDeck(new Card(this,CardSuit.clubs,CardPip.eight));
        this.addCardToDeck(new Card(this,CardSuit.clubs,CardPip.nine));
        this.addCardToDeck(new Card(this,CardSuit.clubs,CardPip.ten));
        this.addCardToDeck(new Card(this,CardSuit.clubs,CardPip.jack));
        this.addCardToDeck(new Card(this,CardSuit.clubs,CardPip.queen));
        this.addCardToDeck(new Card(this,CardSuit.clubs,CardPip.king));
    
        this.addCardToDeck(new Card(this,CardSuit.diamonds,CardPip.ace));
        this.addCardToDeck(new Card(this,CardSuit.diamonds,CardPip.two));
        this.addCardToDeck(new Card(this,CardSuit.diamonds,CardPip.three));
        this.addCardToDeck(new Card(this,CardSuit.diamonds,CardPip.four));
        this.addCardToDeck(new Card(this,CardSuit.diamonds,CardPip.five));
        this.addCardToDeck(new Card(this,CardSuit.diamonds,CardPip.six));
        this.addCardToDeck(new Card(this,CardSuit.diamonds,CardPip.seven));
        this.addCardToDeck(new Card(this,CardSuit.diamonds,CardPip.eight));
        this.addCardToDeck(new Card(this,CardSuit.diamonds,CardPip.nine));
        this.addCardToDeck(new Card(this,CardSuit.diamonds,CardPip.ten));
        this.addCardToDeck(new Card(this,CardSuit.diamonds,CardPip.jack));
        this.addCardToDeck(new Card(this,CardSuit.diamonds,CardPip.queen));
        this.addCardToDeck(new Card(this,CardSuit.diamonds,CardPip.king));
    
        this.addCardToDeck(new Card(this,CardSuit.hearts,CardPip.ace));
        this.addCardToDeck(new Card(this,CardSuit.hearts,CardPip.two));
        this.addCardToDeck(new Card(this,CardSuit.hearts,CardPip.three));
        this.addCardToDeck(new Card(this,CardSuit.hearts,CardPip.four));
        this.addCardToDeck(new Card(this,CardSuit.hearts,CardPip.five));
        this.addCardToDeck(new Card(this,CardSuit.hearts,CardPip.six));
        this.addCardToDeck(new Card(this,CardSuit.hearts,CardPip.seven));
        this.addCardToDeck(new Card(this,CardSuit.hearts,CardPip.eight));
        this.addCardToDeck(new Card(this,CardSuit.hearts,CardPip.nine));
        this.addCardToDeck(new Card(this,CardSuit.hearts,CardPip.ten));
        this.addCardToDeck(new Card(this,CardSuit.hearts,CardPip.jack));
        this.addCardToDeck(new Card(this,CardSuit.hearts,CardPip.queen));
        this.addCardToDeck(new Card(this,CardSuit.hearts,CardPip.king));
    
        this.addCardToDeck(new Card(this,CardSuit.spades,CardPip.ace));
        this.addCardToDeck(new Card(this,CardSuit.spades,CardPip.two));
        this.addCardToDeck(new Card(this,CardSuit.spades,CardPip.three));
        this.addCardToDeck(new Card(this,CardSuit.spades,CardPip.four));
        this.addCardToDeck(new Card(this,CardSuit.spades,CardPip.five));
        this.addCardToDeck(new Card(this,CardSuit.spades,CardPip.six));
        this.addCardToDeck(new Card(this,CardSuit.spades,CardPip.seven));
        this.addCardToDeck(new Card(this,CardSuit.spades,CardPip.eight));
        this.addCardToDeck(new Card(this,CardSuit.spades,CardPip.nine));
        this.addCardToDeck(new Card(this,CardSuit.spades,CardPip.ten));
        this.addCardToDeck(new Card(this,CardSuit.spades,CardPip.jack));
        this.addCardToDeck(new Card(this,CardSuit.spades,CardPip.queen));
        this.addCardToDeck(new Card(this,CardSuit.spades,CardPip.king));        
    }

    printDeck ()
    {
        console.log(this.getName ())
        let printStr = '';
        this.cards.forEach (card => {
            printStr = printStr + ' ' + card.printInfo ();
        })

        console.log(printStr);
    }
}

export function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}    


export class Person
{
    id: string;
    name: string;

    constructor (id: string,name: string)
    {
        this.id = id;
        this.name = name;
    }
}

export class Game 
{
    uniqueId: string;   // The unique id of the game.
    createdAt: Date;    // The date when created;
    parentRoom: Room;   // The room to which the game belongs.
    auctionAmount: number;
    players: Array<GamingPlayer> = new Array<GamingPlayer> (); // The players playing the game.
    observers: Array<GamingObserver> = new Array<GamingObserver> (); // Just folks who are watching..
    leader: GamingPlayer;   // The person who is the leader (won the auction.)
    trumpCardSuit: CardSuit;
    decks: Array<Deck> = new Array<Deck>();
    completedHands: Array<Hand> = new Array<Hand>();
    currentHand: Hand;
}

export class GamingCard
{   
    card: Card;     // The card thrown.
    game: Game;     // The game that it was thrown in.
    player: GamingPlayer;   // The player who owns the Card;
    hand: Hand; // The Hand that it belongs to.
}

/**
 * A Round of cards thrown in a Hand.
 */
export class Hand
{
    cards: Array<GamingCard> = new Array ();
    trumpCardSuit: CardSuit;
    firstCard: GamingCard;
    winningCard: GamingCard;
}


export class GamingPlayer
{
    persona: Person;
    allotedCards: Array<Card> = new Array ();
    game: Game; // The game that the player is in.
    
    clearCards ()
    {
        this.allotedCards.length = 0;
    }

    addCard (card: Card)
    {
        this.allotedCards.push(card);
    }


}

/**
 * Just a person that is a gaming observer.
 */
export class GamingObserver
{
    persona: Person;

}


export class Room 
{
    uniqueId: string;
    roomName: string;
    admins: Array<Person> = new Array();  // Room Administrators.
    games: Array<Game> = new Array<Game>();


}




let d = new Deck ("MyDeck");
d.printDeck ();
console.log("After Shuffling..");
d.shuffle ();
d.printDeck ();
console.log("After Shuffling..");
d.shuffle ();
d.printDeck ();
console.log("After Shuffling..");
d.shuffle ();
d.printDeck ();
console.log("After Shuffling..");
d.shuffle ();
d.printDeck ();

console.log ("Deck Points: " + d.getDeckPoints());
