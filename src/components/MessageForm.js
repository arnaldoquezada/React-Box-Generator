import React, { useState } from 'react';

const MessageForm = (props)=>{
    const[msg, setMsg] = useState("");
    
    const onSubmit = ()=>{

    }
    const handleSubmit = (e) => {
        console.log("Paso por aqui")
        e.preventDefault();
        // props.onMessage(msg);
        props.youGotMail(msg)
    };
    return(
        <form action="" onSubmit={ handleSubmit }>
            <h1>Set Message</h1>
            <textarea 
                rows="4"
                cold="50"
                placeholder="Enter your message here"
                onChange={ (e) =>setMsg(e.target.value) }
                value={ msg }
                name="" id="" cols="30" rows="10"></textarea>
                <input type="submit" value="Send Message"  />
        </form>
    );
};
export default MessageForm;
