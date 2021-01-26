/* eslint-disable no-alert */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const InputField = styled.input`
    width: 100%;
    border: 3px solid ${({ theme }) => theme.colors.primary};
    background-color: '#020202';
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 10px;
    padding-left: 10px;
    font-weight: bold;
    margin-top: 5px;
`;
export const ButtonPlay = styled.button`
    width:100%;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.primary};
    margin-top:5px;
    border-radius: ${({ theme }) => theme.borderRadius};
    font-size: 1rem;
    font-weight: bold;
    color: #FFFFFF;
    cursor: pointer;
    transition: 0.1s;
    border: 0;
    font-size: ${({ fontSize }) => (fontSize || 16)};

    :hover {
        opacity: 0.8
    }

`;

// eslint-disable-next-line react/prop-types
function Input({ disabled, withButton, placeholder }) {
  const [answer, setAnswer] = useState('Visitante');
  const route = useRouter();

  function buttonHandler() {
    route.push(`/quiz?name=${answer}`);
  }

  if (withButton) {
    return (
      <>
        <InputField alt="Write your answer" autoFocus placeholder={placeholder} onChange={(e) => { setAnswer(e.target.value); }} disabled={disabled} />
        <ButtonPlay onClick={buttonHandler}>
          {`BORA JOGAR, ${answer ? answer.toUpperCase() : 'Visitante'}!`}
        </ButtonPlay>

      </>

    );
  }
  return (
    <InputField alt="Write your answer" autoFocus placeholder="www.github.com/etoledo44" onChange={(e) => { setAnswer(e.target.value); }} disabled={disabled} />

  );
}

export default Input;
