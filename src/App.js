import image from "./niike.jpg";
import "./App.css";
import { useState } from "react";

function App() {
  const [click,setClick] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [info, setInfo] = useState(false)
  const clickButton = () => {
     if(click) {
      setClick(false)
      setDisabled(true)
     }
     else {
     setClick(true)
     setDisabled(false)
      
     }
  }
  const inCart = () => {
    if(!click){
     setClick(true)
     setDisabled(false)
     
    }
    else {
      setDisabled(true)
    }
  }
  const details = () => {
    if(!info) {
      setInfo(true)
    }
  }
  const clickDivBtn  = () => {
    setInfo(false)
  }
  
  
  return (
    <div className="card">
      <div className="cards">
        <div className="logo">
          <img src={image} />
        </div>
        <div className="middle">
          <div className="middleDiv">
            <div className="shoes">
              <b>Nike sneakers</b>
            </div>
            <div className="price">
              <b>120$</b>
            </div>
          </div>

          <div className="btnDiv">
            <button className="button" onClick={details}>Детали</button>
            {info && (<div className="infoDiv"  > этат красавак насил лутший чилавек в штате арызона он убил им 7 негров и 2 коровы  <button className="info-btn" onClick={clickDivBtn}>X</button> </div>)}
          </div>
        </div>
        <hr className="line"></hr>
        <div className="footer"> <h1 className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h1>
        <div >
          <button className={disabled ? 'secondBtn' : 'buy-btn'}disabled={disabled} onClick={clickButton} >
            {click ? 'Добавить в коризну ' : 'уже в корзине'}
          </button> 
          {!click && (<button className="footerText" onClick={inCart} >удалить из корзины</button>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
