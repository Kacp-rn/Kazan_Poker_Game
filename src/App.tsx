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

let rand_card_x_opponent1: number;
let rand_x_color_opponent1: number;
let src_oppo1:string;

let rand_card_x_opponent2: number;
let rand_x_color_opponent2: number;
let src_oppo2:string;


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

function Display3hidden() {
  return (
    <div className='display3hidden' id='display3hidden'>
      <img className="img_3_hidden" id='hidden1' src={backCard} alt="back_card"/>
      <img className="img_3_hidden" id='hidden2' src={backCard} alt="back_card"/>
      <img className="img_3_hidden" id='hidden3' src={backCard} alt="back_card"/>
    </div>
  )
}

function ShowFirst3Cards()
{

}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Display3hidden/>
      </div>

      <Append2random />

      <div className="card">
        <button onClick="">
          Rise
        </button>

        <button onClick="">
          Call
        </button>
      </div>
    </>
  )
}

export default App
