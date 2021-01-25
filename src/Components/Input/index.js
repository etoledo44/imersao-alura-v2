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



function Input({disabled}){

    const [answer, setAnswer] = useState()

    return (
        <InputField alt="Write your answer" autoFocus placeholder="Digite sua resposta" value={disabled ? 'Em breve' : answer} onChange={(e)=>{setAnswer(e.target.value)}} disabled={disabled}/>
    )

}

export default Input