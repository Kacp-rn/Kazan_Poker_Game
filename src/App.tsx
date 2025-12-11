import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Append2random() {
    const rand_card_x1: number = Math.floor(Math.random() * 13) + 1;
    const rand_x_color1: number = Math.floor(Math.random() * 4) + 1;
    const src1 = `/src/assets/${rand_x_color1}/${rand_card_x1}-${rand_x_color1}.jpg` // dostosuj ścieżkę do zasobów

    let rand_card_x2: number;
    let rand_x_color2: number;

    // wybierz drugą kartę aż będzie różna od pierwszej
    do {
        rand_card_x2 = Math.floor(Math.random() * 13) + 1;
        rand_x_color2 = Math.floor(Math.random() * 4) + 1;
    } while (rand_card_x2 === rand_card_x1 && rand_x_color2 === rand_x_color1);

    const src2 = `/src/assets/${rand_x_color2}/${rand_card_x2}-${rand_x_color2}.jpg` // dostosuj ścieżkę do zasobów

    return (
      <div className="append2random">
        <img id="img_2rand" src={src1} alt={`${rand_card_x1}-${rand_x_color1}`} />
        <img id="img_2rand" src={src2} alt={`${rand_card_x2}-${rand_x_color2}`} />
      </div>
    )
}

function Display3hidden()
{
  return (
    <>
    <div className='dispay3hidden'>
      <img id="img_3_hidden" src="src/assets/back_card.png" alt="back_card"/>
      <img id="img_3_hidden" src="src/assets/back_card.png" alt="back_card"/>
      <img id="img_3_hidden" src="src/assets/back_card.png" alt="back_card"/>
    </div>
    </>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

        <Display3hidden/>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {/* Tutaj wyrenderowany komponent */}
      <Append2random />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
