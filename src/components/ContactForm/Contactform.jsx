import Button from '../Button/Button.jsx';
import styles from './Contactform.module.css'
import { MdMessage } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { useState } from 'react';

function Contactform() {
    const [Name,setName]=useState('')

    let email=''
    let text=''
    const onSubmit=(event)=>{
        setName( event.target[0].value)
        
        email=event.target[1].value
        text=event.target[2].value

    }
    const onViaCall=()=>{
        console.log('i am call event')
    }
  return (
    <section className={`${styles.sect} `}>
        <div className='sect1div'>
        <div className={styles.top_btn}>
            <div className={styles.Prime}>
                <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} /> 
                <Button onClick={onViaCall} text='VIA CALL' icon={<FaPhone fontSize='24px' />} />        
            </div>
            <div className={styles.second}>
                <Button isSecondry={true} text='VIA EMAIL FORM' icon={<IoMail fontSize='32px' />}/>
            </div>
        </div>

        <form className={styles.top_btn} onSubmit={onSubmit}>
            <div className={styles.formFild}>
                <label htmlFor="naam">Name</label>
                <input type="text" id='naam' />                
            </div>
            <div className={styles.formFild}>
                <label htmlFor="mail">E-Mail</label>
                <input type="email" id='mail' />                
            </div>
            <div className={styles.formFild}>
                <label htmlFor="area">TEXT</label>
                <textarea name="" id="area" rows="5"></textarea>                
            </div>
            <div className={styles.submit_btn}>
                <Button text='SUBMIT BUTTON'/>
            </div>
            {Name + " " + email +" "+ text}
        </form>
        </div>

    <div className={styles.contact_image}>
        <img src="/image/serv.svg" alt="contact image" />        
    </div>
    </section>
  )
}              

export default Contactform