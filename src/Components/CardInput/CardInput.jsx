import React, { useEffect, useState } from 'react'
import cl from './CardInput.module.css';

const CardInput = ({setInput, complite}) => {
  const [num, setNum] = useState('');
  const [user, setUser] = useState({
    name:'',
    num:'',
    dateM: '',
    dateY: '',
    cvc:'',
  })
  const handleChangeNum = (e) =>{
    if(!Number((e.target.value).split(' ').join(''))) return setNum('');
    setNum((e.target.value).replace(/[^\d]/g, '').substring(0,16));
  } 
  const getVal = text => {
    
    return text != '' ? text.match(/.{1,4}/g).join(' ') : '';
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(user.cvc !=='' && user.name !=='' && user.dateM !=='' && user.dateY !=='' && user.num !==''){
      complite(true)
    }
    else{
      alert('Вы заполнили не всю информацию')
    }

  }
  const dateMonth = (e) =>{
    (Number(e.target.value) && Number(e.target.value) > 0 && Number(e.target.value) < 13)
    ?setUser({...user, dateM: e.target.value})
    : setUser({...user, dateM: ''})
  }
  useEffect(() =>{
    setUser({...user, num: num != '' ? num.match(/.{1,4}/g).join(' ') : ''})
  },[num])
  useEffect(()=>{
    setInput(user)
  }, [user])
  return (
    <form className={cl.cardInput} onSubmit={handleSubmit}>
          <div className={cl.inputInfo}>
            <div className={cl.name}>
              <p className={cl.txt}>CARDHOLDER NAME</p>
              <input className={cl.inputName} value={user.name} onChange={(e) => setUser({...user, name: (e.target.value).toUpperCase()})} type="text" placeholder='IVAN IVANOV' />
              <p className={cl.txt}>CARD NUMBER</p>
              <input className={cl.inputNum} maxLength={20} value={getVal(num)} onChange={handleChangeNum} type="text" placeholder='1234 5678 9100 3333' />
            </div>
            <div className={cl.dateACVC}>
              <div className={cl.date}>
                <p className={cl.txt}>DATE</p>
                <input className={cl.inputDate} value={user.dateM} onChange={dateMonth} maxLength={2} type="text" placeholder='MM' />
                <input className={cl.inputDate} value={user.dateY} onChange={(e) => setUser({...user, dateY:e.target.value})} maxLength={2} type="text" placeholder='YY' />
              </div>
              <div className={cl.cvc}>
                <p className={cl.txt}>CVC</p>
                <input className={cl.inputCVC} value={user.cvc} onChange={(e) => Number(e.target.value)?setUser({...user, cvc:e.target.value}):setUser({...user, cvc:''})} maxLength={3} type="text" placeholder='404' />
              </div>
            </div>
            <button className={cl.complite} onClick={handleSubmit}>ЗАКАЗАТЬ</button>
          </div>
  
    </form>
  )
}

export default CardInput
