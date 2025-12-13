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

}

function RiseBet()
{

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
        <button onClick={() => RiseBet()}>
          Rise
        </button>

        <button onClick={() => Check_button_clicks()}>
          Bet / Call 
        </button>
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
  count_button += 1;

  switch(count_button%4)
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
          break;
        }
  }
}