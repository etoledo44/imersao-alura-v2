import { useState } from 'react'
import styled from 'styled-components'

const InputField = styled.input`
    width: 100%;
    border: 3px solid ${({theme})=>theme.colors.primary};
    background-color: '#020202';
    border-radius: ${({theme})=>theme.borderRadius};
    padding: 10px;
    padding-left: 10px;
    font-weight: bold;
    margin-top: 5px;
`
const ButtonPlay = styled.button`
    width:100%;
    height: 40px;
    background-color: ${({theme})=>theme.colors.primary};
    margin-top:5px;
    border-radius: ${({theme})=>theme.borderRadius};
    font-size: 1rem;
    font-weight: bold;
    color: #FFFFFF;
    cursor: pointer;
    transition: 0.1s;
    border: 0;

    :hover {
        opacity: 0.8
    }

`


function Input({disabled, withButton, placeholder}){

    const [answer, setAnswer] = useState()
    if(withButton){
        return (
            <>
                <InputField alt="Write your answer" autoFocus placeholder={placeholder} value={disabled ? 'Em breve' : answer} onChange={(e)=>{setAnswer(e.target.value)}} disabled={disabled}/>
                <ButtonPlay onClick={()=>alert(`Oi, ${answer}! Guardei seu nome num state, vou usar depois`)}>
                    BORA JOGAR!
                </ButtonPlay>

            </>
            
        )

    }
    return (
        <InputField alt="Write your answer" autoFocus placeholder="www.github.com/etoledo44" value={disabled ? 'Em breve' : answer} onChange={(e)=>{setAnswer(e.target.value)}} disabled={disabled}/>

    )

}

export default Input