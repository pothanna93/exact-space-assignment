import React, { useState } from 'react' 
import { v4 as uuidv4 } from 'uuid';
import InputEmoji from 'react-input-emoji' 
import UserPage from '../UserPage'
import "./index.css" 

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"]

const EmojiPage= ()=> {
    const [ text, setText ] = useState('')
    const [setValue,setterValue] = useState([]) 

    let x = Math.floor((Math.random() * user_list.length)); 
    const d = user_list[x] 
    
    
      function handleOnEnter (text) {
        console.log('enter', text) 
        
      } 

      const onSubmitForm=event=>{
        event.preventDefault()
        const newObj = { 
          id:uuidv4(),
          d,
          text,
          "date":new Date()
        } 
        

        setterValue(pre=>[...pre,newObj])
      }
      console.log(setValue)
      return (
        <div className='emoji-container'>
          <ul className='ul-list'>
            {setValue.map((item)=>( 
              <UserPage userDetails={item} key={item.id}/>
              //<li>{item.date.toLocaleTimeString()}</li>
            ))}
          </ul>
          <form onSubmit={onSubmitForm} className="form-el"> 
          
            <InputEmoji
            value={text}
            onChange={setText}
            cleanOnEnter
            onEnter={handleOnEnter} 
            className = "input-el" 
            
            placeholder="Type a message" />  
            
            <button type='submit' className='btn-click'>Send</button>
          </form>
          
          
        </div>
        
      )
    }
export default EmojiPage