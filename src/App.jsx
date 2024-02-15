import { useState } from "react";
import "./App.css";
import dice1 from './assets/images/1.png';
import dice2 from './assets/images/2.png';
import dice3 from './assets/images/3.png';
import dice4 from './assets/images/4.png';
import dice5 from './assets/images/5.png';
import dice6 from './assets/images/6.png';
import notReady from './assets/images/3d.jpg';
import rolling from './assets/videos/dice.mp4';

let dices = [dice1, dice2, dice3, dice4, dice5, dice6];

function App() {
    const [firstDiceNum, setFirstDiceNum] = useState("");
    const [secondDiceNum, setSecondDiceNum] = useState("");
    const [present, setPresent] = useState(0);
    const [total, setTotal] = useState(present);
    const [roll, setRoll] = useState(false);
    let isStart = firstDiceNum !== "";


    const continueGame = (e) => {
       if(e.keyCode===32){
           console.log("space bosildi")
       }else{
           console.log("error")
       }
        const firstRandomNum = Math.floor(Math.random() * 6);
        setFirstDiceNum(firstRandomNum);
        const secondRandomNum = Math.floor(Math.random() * 6);
        setSecondDiceNum(secondRandomNum);
        setPresent(firstRandomNum + secondRandomNum + 2);
        setTotal(prev => prev + present);
        setRoll(true)
        setTimeout(() => setRoll(false),2000)
   
       
    }
    const finishGame = () => {
        location.reload();
    }
 
  return (
      <>
          <h1 className="title">Dice Game</h1>
          <span className={isStart ? "tablo" : "hidden"}>Total : {total}</span>
          {roll ?  <video src={rolling} autoPlay ></video> :<div>
              <div className={isStart ? "container" : "notStarted"}>
                  {isStart ?
                      <><img src={dices[firstDiceNum]} /><img src={dices[secondDiceNum]} /></> :
                      <img src={notReady} />
                  }
              </div>.
              <span className={isStart ? "presentPoint" : "hidden"}>{present}</span>
              <button className={isStart ? "clickBox" : "startBox"} disabled={roll} onClick={continueGame}><p>{isStart ? "add the score and continue" : "Start Game"}</p></button>
              <button className={isStart?"finishButton":"hidden"} onClick={finishGame}>Finish the game</button>
          </div>}
         
    </>
  )
}

export default App;
