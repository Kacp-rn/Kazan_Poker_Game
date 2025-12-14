import { useState, useEffect } from 'react'
import './App.css'
import backCard from './assets/back_card.png'

let rand_card_x1: number;
let rand_x_color1: number;
let src1:string;

let rand_card_x2: number;
let rand_x_color2: number;
let src2:string;

let rand_card_x3: number;
let rand_x_color3: number;
let src3:string;

let rand_card_x4: number;
let rand_x_color4: number;
let src4:string;

let rand_card_x5: number;
let rand_x_color5: number;
let src5:string;

let rand_card_x6: number;
let rand_x_color6: number;
let src6:string;

let rand_card_x7: number;
let rand_x_color7: number;
let src7:string;

let count_button: number = 0;

//let src_back:string = "scr/assets/back_card.png";


let bet:number = 0;
let money:number = 1000;
let count_raise_clicks:number = 0;

// let rand_card_x_opponent1: number;
// let rand_x_color_opponent1: number;
// let src_oppo1:string;
// 
// let rand_card_x_opponent2: number;
// let rand_x_color_opponent2: number;
// let src_oppo2:string;


function SetUp7Cards()
{
     rand_card_x1 = Math.floor(Math.random() * 13) + 1;
    rand_x_color1 = Math.floor(Math.random() * 4) + 1;
    src1 = `/src/assets/${rand_x_color1}/${rand_card_x1}-${rand_x_color1}.jpg`;
    
    do {
        rand_card_x2 = Math.floor(Math.random() * 13) + 1;
        rand_x_color2 = Math.floor(Math.random() * 4) + 1;
    } while (rand_card_x2 === rand_card_x1 && rand_x_color2 === rand_x_color1);

    src2 = `/src/assets/${rand_x_color2}/${rand_card_x2}-${rand_x_color2}.jpg`;

    do {
        rand_card_x3 = Math.floor(Math.random() * 13) + 1;
        rand_x_color3 = Math.floor(Math.random() * 4) + 1;
    } while ((rand_card_x3 === rand_card_x1 && rand_x_color3 === rand_x_color1)
            ||(rand_card_x3 === rand_card_x2 && rand_x_color3 === rand_x_color2));

    src3 = `/src/assets/${rand_x_color3}/${rand_card_x3}-${rand_x_color3}.jpg`;

    do {
        rand_card_x4 = Math.floor(Math.random() * 13) + 1;
        rand_x_color4 = Math.floor(Math.random() * 4) + 1;
    } while ((rand_card_x4 === rand_card_x1 && rand_x_color4 === rand_x_color1)
           ||(rand_card_x4 === rand_card_x2 && rand_x_color4 === rand_x_color2)
           ||(rand_card_x4 === rand_card_x3 && rand_x_color4 === rand_x_color3));

    src4 = `/src/assets/${rand_x_color4}/${rand_card_x4}-${rand_x_color4}.jpg`;

    do {
        rand_card_x5 = Math.floor(Math.random() * 13) + 1;
        rand_x_color5 = Math.floor(Math.random() * 4) + 1;
    } while ((rand_card_x5 === rand_card_x1 && rand_x_color5 === rand_x_color1)
           ||(rand_card_x5 === rand_card_x2 && rand_x_color5 === rand_x_color2)
           ||(rand_card_x5 === rand_card_x3 && rand_x_color5 === rand_x_color3)
           ||(rand_card_x5 === rand_card_x4 && rand_x_color5 === rand_x_color4));

    src5 = `/src/assets/${rand_x_color5}/${rand_card_x5}-${rand_x_color5}.jpg`;

    do {
        rand_card_x6 = Math.floor(Math.random() * 13) + 1;
        rand_x_color6 = Math.floor(Math.random() * 4) + 1;
    } while ((rand_card_x6 === rand_card_x1 && rand_x_color6 === rand_x_color1)
           ||(rand_card_x6 === rand_card_x2 && rand_x_color6 === rand_x_color2)
           ||(rand_card_x6 === rand_card_x3 && rand_x_color6 === rand_x_color3)
           ||(rand_card_x6 === rand_card_x4 && rand_x_color6 === rand_x_color4)
           ||(rand_card_x6 === rand_card_x5 && rand_x_color6 === rand_x_color5));

    src6 = `/src/assets/${rand_x_color6}/${rand_card_x6}-${rand_x_color6}.jpg`;

    do {
        rand_card_x7 = Math.floor(Math.random() * 13) + 1;
        rand_x_color7 = Math.floor(Math.random() * 4) + 1;
    } while ((rand_card_x7 === rand_card_x1 && rand_x_color7 === rand_x_color1)
           ||(rand_card_x7 === rand_card_x2 && rand_x_color7 === rand_x_color2)
           ||(rand_card_x7 === rand_card_x3 && rand_x_color7 === rand_x_color3)
           ||(rand_card_x7 === rand_card_x4 && rand_x_color7 === rand_x_color4)
           ||(rand_card_x7 === rand_card_x5 && rand_x_color7 === rand_x_color5)
           ||(rand_card_x7 === rand_card_x6 && rand_x_color7 === rand_x_color6));

    src7 = `/src/assets/${rand_x_color7}/${rand_card_x7}-${rand_x_color7}.jpg`;

    console.log(`src1 = ${src1}`);
    console.log(`src2 = ${src2}`);
    console.log(`src3 = ${src3}`);
    console.log(`src4 = ${src4}`);
    console.log(`src5 = ${src5}`);
    console.log(`src6 = ${src6}`);
    console.log(`src7 = ${src7}`);

    //src_back = "scr/assets/back_card.png";
}

function App() {
  const [count, setCount] = useState(0)
  const [cards, setCards] = useState<{src1: string, src2: string, src3: string, src4: string, src5: string, src6: string, src7: string} | null>(null);

  useEffect(() => {
    SetUp7Cards();
    setCards({src1, src2, src3, src4, src5, src6, src7});
  }, []);

  if (!cards) {
    return (<><div>Loading...</div></>);
  }

  return (
    <>
      <div id='cards'>
        <div id='playercards'>
          <img className="playercards" id='player' src={cards.src1} alt="card_1"/>
          <img className="playercards" id='player' src={cards.src2} alt="card_2"/>
        </div>
        <div className='3hidden' id='3hidden_cards'>
          <img className="img_3_hidden" id='hidden1' src={backCard} alt="back_card"/>
          <img className="img_3_hidden" id='hidden2' src={backCard} alt="back_card"/>
          <img className="img_3_hidden" id='hidden3' src={backCard} alt="back_card"/>
        </div>
      </div>

      <div className="card">
        <button onClick={() => RaiseBet()}>
          Raise your bet by 100$
        </button>

        <button onClick={() => Check_button_clicks()}>
          Bet / Call
        </button>
        <div id='nag'></div>
        
      </div>
      <div>
        <img src="src/assets/wining_cases.jpg" alt="Poker_Hand_Rank"/>
      </div>
      
    </>
  )
}

export default App

function ShowFirst3Cards()
{
  let hid1 = document.getElementById('hidden1');
  hid1?.remove();
  let hid2 = document.getElementById('hidden2');
  hid2?.remove();
  let hid3 = document.getElementById('hidden3');
  hid3?.remove();

  let showing = document.getElementById('3hidden_cards');
  let card1shown = document.createElement('img');
  let card2shown = document.createElement('img');
  let card3shown = document.createElement('img');

  card1shown.src = src3;
  card1shown.className = 'img_3_hidden';
  card1shown.id='hidden1';

  card2shown.src = src4;
  card3shown.className = 'img_3_hidden';
  card2shown.id='hidden2';

  card3shown.src = src5;
  card3shown.className = 'img_3_hidden';
  card3shown.id='hidden3';

  showing?.appendChild(card1shown);
  showing?.appendChild(card2shown);
  showing?.appendChild(card3shown);
}

function Check_button_clicks()
{
  count_raise_clicks = 0;
  count_button += 1;

  switch((count_button%5))
  {
  case 1:
    {
        ShowFirst3Cards();
        break;
    }
  case 2:
    {
        let showing1 = document.getElementById('3hidden_cards');
        let x = document.createElement('img');
        x.src = src6;
        x.className = 'img_3_hidden';
        x.id = 'hidden4';
        showing1?.appendChild(x);
        break;
    }
    case 3:
    {
        let showing2 = document.getElementById('3hidden_cards');
        let y= document.createElement('img');
        y.src = src7;
        y.className = 'img_3_hidden';
        y.id = 'hidden5';
        showing2?.appendChild(y);
        break;
    }
    case 4:
    {
          //wining cases etc.
          Wining_Cases();

          break;
    }
    case 0:
    {
          resetImg();
          SetUp7Cards();
          updateMoney();
          break;
    }
  }
}

function Wining_Cases()
{
  //let cards_all : Array<number>; 
  let cards_nr:number[] = [rand_card_x1, rand_card_x2, rand_card_x3, rand_card_x4, rand_card_x5, rand_card_x6, rand_card_x7];

  let colors_nr:number[] = [rand_x_color1, rand_x_color2, rand_x_color3, rand_x_color4, rand_x_color5, rand_x_color6, rand_x_color7];

  colors_nr.sort();
  cards_nr.sort();

const cardCount = countOccurrences(cards_nr);
  const colorCount = countOccurrences(colors_nr);

  const counts = Object.values(cardCount).sort((a, b) => b - a);

  /* ================== KOLOR ================== */
  const isFlush = Object.values(colorCount).some(c => c >= 5);

  /* ================== POKER / STRIT ================== */
  const uniqueCards = Array.from(new Set(cards_nr));
  if (uniqueCards.includes(1)) uniqueCards.push(14); // as jako wysoki
  uniqueCards.sort((a, b) => a - b);

  let isStraight = false;
  let straightCount = 1;

  for (let i = 1; i < uniqueCards.length; i++) {
    if (uniqueCards[i] === uniqueCards[i - 1] + 1) {
      straightCount++;
      if (straightCount >= 5) {
        isStraight = true;
        break;
      }
    } else {
      straightCount = 1;
    }
  }

  /* ================== UKŁADY ================== */
  if (isStraight && isFlush) {
    alert("🔥 Poker!");
    money = money + (bet*25);
  }
  else if (counts[0] === 4) {
    alert("♣️ Kareta");
    money = money + (bet*20);
  }
  else if (counts[0] === 3 && counts[1] >= 2) {
    alert("🏠 Full House");
    money = money + (bet*15);
  }
  else if (isFlush) {
    alert("💎 Kolor");
    money = money + (bet*10);
  }
  else if (isStraight) {
    alert("➡️ Strit");
    money = money + (bet*7);
  }
  else if (counts[0] === 3) {
    alert("🎯 Trójka");
    money = money + (bet*5);
  }
  else if (counts[0] === 2 && counts[1] === 2) {
    alert("👯 Dwie pary");
    money = money + (bet*3);
  }
  else if (counts[0] === 2) {
    alert("👫 Para");
    money = money + (bet*2);
  }
  else {
    alert("🃏 Wysoka karta");
    money = money + bet;
  }
}

function countOccurrences(arr: number[]): Record<number, number> {
  const map: Record<number, number> = {};
  for (const v of arr) {
    map[v] = (map[v] || 0) + 1;
  }
  return map;
}

function RaiseBet()
{
  deleteH2();
  let card = document.getElementById('nag');
  let appcard = document.createElement("h2")
  appcard.textContent = `${money}$`;
  appcard.id = 'hwdp';
  card?.appendChild(appcard);
  if(!(money<100))
  {
  money = money - 100;
  bet = bet + 100;
  console.log(money);
  console.log(bet);
  }
  let recard = document.createElement('h2');
  recard.textContent = `${money}$`;
  recard.id = 'hwdp';
  card?.replaceChild(recard, appcard);  
  
}

function deleteH2()
{
  document.getElementById('hwdp')?.remove();
}
function updateMoney()
{
  const el = document.getElementById('hwdp');

  if (el) {
  el.textContent = `Pieniądze: ${money}$`;
  }
}

function resetImg()
{
  let hid1 = document.getElementById('hidden1');
  hid1?.remove();
  let hid2 = document.getElementById('hidden2');
  hid2?.remove();
  let hid3 = document.getElementById('hidden3');
  hid3?.remove();

  let hid4 = document.getElementById('hidden4');
  hid4?.remove();
  let hid5 = document.getElementById('hidden5');
  hid5?.remove();

  let showing = document.getElementById('3hidden_cards');
  let card1shown = document.createElement('img');
  let card2shown = document.createElement('img');
  let card3shown = document.createElement('img');

  card1shown.src = backCard;
  card1shown.className = 'img_3_hidden';
  card1shown.id='hidden1';

  card2shown.src = backCard;
  card3shown.className = 'img_3_hidden';
  card2shown.id='hidden2';

  card3shown.src = backCard;
  card3shown.className = 'img_3_hidden';
  card3shown.id='hidden3';

  showing?.appendChild(card1shown);
  showing?.appendChild(card2shown);
  showing?.appendChild(card3shown);
}