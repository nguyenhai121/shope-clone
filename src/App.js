import logo from './logo.svg';
import './App.css';
import ShoppingCard from './shoping-card'
import ShoppeIcon from "./icon/shope-logo.svg";
import { Line, Circle } from 'rc-progress';
import { useState, useEffect } from "react";

const listProductions = [
  {
    name: 'computer',
    manufacturer: 'Japan',
    sold: 15,
    key: 1
  }, 
  {
    name: 'monitor',
    manufacturer: 'Usa',
    sold: 14,
    key: 2
  },
  {
    name: 'motorbike',
    manufacturer: 'Japan',
    sold: 15,
    key: 3
  },
  {
    name: 'motorbike',
    manufacturer: 'Japan',
    sold: 15,
    key: 4
  },
  {
    name: 'motorbike',
    manufacturer: 'Japan',
    sold: 15,
    key: 5
  },
  {
    name: 'motorbike',
    manufacturer: 'Japan',
    sold: 15,
    key: 6
  },
  {
    name: 'motorbike',
    manufacturer: 'Japan',
    sold: 15,
    key: 7
  },
  {
    name: 'motorbike',
    manufacturer: 'Japan',
    sold: 15,
    key: 8
  },
  {
    name: 'motorbike',
    manufacturer: 'Japan',
    sold: 15,
    key: 9
  }
]
function App() {
  const [count, setCount] = useState(0);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount((count) => count + 5);
  //   }, 1000);
  // });
  // handleOnClick() {
  //   setCount((count) => count + 5)}
  // }
  return (
    <div style={{display: 'flex', flexDirection: 'row', width: '600px', flexWrap: 'wrap'}}> 
      <Line percent={count} strokeWidth={4} strokeColor="blue" />
      <h1>I've rendered {count} times!</h1>;
      {/* <button onClick={()=> handleOnClick()}> 
        Add
      </button> */}
      <img src={ShoppeIcon} />
      {
        listProductions.map((production) => {
          return <ShoppingCard name={production.name} manufacturer={production.manufacturer} sold={production.sold} key={production.key}/>
        })
      }
{/* 
      <ShoppingCard name={listProductions[0].name} manufacturer={listProductions[0].manufacturer} sold={listProductions[0].sold} /> */}
    </div>

  );
}

export default App;
