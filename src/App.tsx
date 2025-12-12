import { useState } from 'react'
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

let credit:number = 100;

function Append2random() {
     rand_card_x1 = Math.floor(Math.random() * 13) + 1;
    rand_x_color1 = Math.floor(Math.random() * 4) + 1;
    src1 = `/src/assets/${rand_x_color1}/${rand_card_x1}-${rand_x_color1}.jpg` // dostosuj ścieżkę do zasobów

    

    // wybierz drugą kartę aż będzie różna od pierwszej
    do {
        rand_card_x2 = Math.floor(Math.random() * 13) + 1;
        rand_x_color2 = Math.floor(Math.random() * 4) + 1;
    } while (rand_card_x2 === rand_card_x1 && rand_x_color2 === rand_x_color1);

    src2 = `/src/assets/${rand_x_color2}/${rand_card_x2}-${rand_x_color2}.jpg` // dostosuj ścieżkę do zasobów

    return (
      <div className="append2random">
        <img id="img_2rand" src={src1} alt={`${rand_card_x1}-${rand_x_color1}`} />
        <img id="img_2rand" src={src2} alt={`${rand_card_x2}-${rand_x_color2}`} />
      </div>
    )
}

function Display3hidden({ src1 = backCard, src2 = backCard, src3= backCard }: { src1: string; src2: string; src3: string }) {
  return (
    <div className='display3hidden' id='display3hidden'>
      <img className="img_3_hidden" id='hidden1' src={src1} alt="card1"/>
      <img className="img_3_hidden" id='hidden2' src={src2} alt="card2"/>
      <img className="img_3_hidden" id='hidden3' src={src3} alt="card3"/>
    </div>
  )
}

function ShowFirst3Cards()
{
    do {
        rand_card_x3 = Math.floor(Math.random() * 13) + 1;
        rand_x_color3 = Math.floor(Math.random() * 4) + 1;
    } while((rand_card_x3 === rand_card_x1 && rand_x_color3 === rand_x_color1)||(rand_card_x3 === rand_card_x2 && rand_x_color3 === rand_x_color2));

    do {
      rand_card_x4 = Math.floor(Math.random() * 13) + 1;
      rand_x_color4 = Math.floor(Math.random() * 4) + 1;
    }while((rand_card_x4 === rand_card_x1 && rand_x_color4 === rand_x_color1)||(rand_card_x4 === rand_card_x2 && rand_x_color4 === rand_x_color2)||(rand_card_x4 === rand_card_x3 && rand_x_color4 === rand_x_color3));
    
    do {
      rand_card_x5 = Math.floor(Math.random() * 13) + 1;
      rand_x_color5 = Math.floor(Math.random() * 4) + 1;
    }while((rand_card_x5 === rand_card_x1 && rand_x_color5 === rand_x_color1)||(rand_card_x5 === rand_card_x2 && rand_x_color5 === rand_x_color2)||(rand_card_x5 === rand_card_x3 && rand_x_color5 === rand_x_color3)||(rand_card_x5 === rand_card_x4 && rand_x_color5 === rand_x_color4));
    
    src3 = `/src/assets/${rand_x_color3}/${rand_card_x3}-${rand_x_color3}.jpg`;
    src4 = `/src/assets/${rand_x_color4}/${rand_card_x4}-${rand_x_color4}.jpg`;
    src5 = `/src/assets/${rand_x_color5}/${rand_card_x5}-${rand_x_color5}.jpg`;
    
    return { src3, src4, src5 };
}

function Rise()
{
    credit = credit - 10;
}

function App() {
  const [count, setCount] = useState(0)
  const [hiddenSrc1, setHiddenSrc1] = useState(backCard);
  const [hiddenSrc2, setHiddenSrc2] = useState(backCard);
  const [hiddenSrc3, setHiddenSrc3] = useState(backCard);

  const handleShowFirst3Cards = () => {
    const { src3, src4, src5 } = ShowFirst3Cards();
    setHiddenSrc1(src3);
    setHiddenSrc2(src4);
    setHiddenSrc3(src5);
  };

  return (
    <>
      <div>
        <div>

        </div>
        <div>
          <Display3hidden src1={hiddenSrc1} src2={hiddenSrc2} src3={hiddenSrc3}/>
        </div>
        <div>
        <Append2random />
        </div>

        <div className="card">
          <button onClick={() => Rise()}>
            Rise
          </button>

          <button onClick={handleShowFirst3Cards}>
            Call
          </button>
        </div>
      </div>
    </>
  )
}

export default App
