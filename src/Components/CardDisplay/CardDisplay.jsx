import React, { useEffect, useState } from 'react'
import cl from './CardDisplay.module.css';
import img from './bg-card-front.png';
import CardInfo from 'card-info';
const CardDisplay = ({getInput}) => {
  const [logo, setLogo] = useState();
  
  const [card, setCard] = useState();
  useEffect(() =>{
    if(!getInput) return;
    console.log(getInput)
    if(getInput.num){
        setCard( new CardInfo((getInput.num).trim(), {
        banksLogosPath : '/node_modules/card-info/dist/banks-logos/',
        brandsLogosPath: '/node_modules/card-info/dist/brands-logos/'
      }))
    }
  },[getInput])
  if(!getInput) return;
  console.log(card ?card: '')
  return (
    <div className={cl.block}>
          <div className={cl.cardDisplay}>
            <div className={cl.wrap}>
              <div className={cl.contents}>
                <div className={cl.front}>
                  <img src={card && card.brandLogo} alt="" />
                  <div className={cl.logo}>{<svg width="84" height="47" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff"/><path d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z" stroke="#fff"/></svg>}</div>
                  <p className={cl.numberCard}>{getInput.num !== ''? getInput.num: '0000 0000 0000 0000' }</p>
                  <p className={cl.nameCard}>{getInput.name !== ''? getInput.name: 'IVAN IVANOV' }</p>
                  <p className={cl.date}>{getInput.dateM !== ''? getInput.dateM : '00'}/{getInput.dateY !== ''? getInput.dateY : '00'}</p>
                  <div className={cl.typeCard}>{card? card.brandAlias : ''}</div>
                </div>
              </div>
              <svg></svg>
              <div className={cl.contents2}>
                <div className={cl.back}>
                  <p className={cl.CVC}>{getInput.cvc !== ''? getInput.cvc: '404' }</p>
                </div>
              </div>
            </div>
{/*             C:\Users\XXXYO\OneDrive\Рабочий стол\normal project\card\src\Components\CardDisplay\CardDisplay.jsx
              src\Components\CardDisplay\CardDisplay.jsx
            <div className={cl.content1}>
              <div className={cl.front}>
              <div className={cl.logo}><svg width="84" height="47" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff"/><path d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z" stroke="#fff"/></svg></div>
              <p className={cl.numberCard}>0000 0000 0000 0000</p>
              <p className={cl.nameCard}>IVAN IVANOV</p>
              <div className={cl.typeCard}>visa</div>
              </div>
            </div>
            <div className={cl.back}>
              <div className={cl.contant2}>
              <p className={cl.CVC}>404</p>
              </div>
            </div> */}
          </div>
    </div>
  )
}

export default CardDisplay
