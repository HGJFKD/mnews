import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaCheckCircle } from "react-icons/fa";

const fillAnimation = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;


const MessageBox = styled.div`
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  top: 90vh;
  right: 10px;
  min-width: 200px;
  transform: translateY(-50%);
  background-color: #ffffff;
  padding: 10px;
  border: 1px solid #ccc;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Message = styled.div<{ completed: boolean }>`
  position:relative;
  color: ${({ completed }) => (completed ? '#4caf50' : '#f2f2f2')};
   animation: ${fillAnimation} 0.5 linear forwards;
  `;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 10px;
  border-radius:10px;
  background-color: #f2f2f2;
  position: relative;
  `;

const ProgressBar = styled.div`
  height: 100%;
  background-color: #4caf50;
  border-radius:10px;
  animation: ${fillAnimation} 1s linear forwards;
  `;

const CheckIcon = styled(FaCheckCircle) <{ completed: boolean }>`
 left: 5px;
 font-size:25px;
 color: ${({ completed }) => (completed ? '#4caf50' : '#f2f2f2')};
 animation: ${fillAnimation} 0.5 linear forwards;
  margin-left: 10px;
`;

interface Props {
  message: string;
}

const AnimatedMessage: React.FC<Props> = ({ message }) => {
  const [completed, setCompleted] = useState(false);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCompleted(true);
    }, 1500);

    const deleteTimeout = setTimeout(() => {
      setDeleted(true);
    }, 3000);

    return () => {
      clearTimeout(timeout);
      clearTimeout(deleteTimeout);
    };
  }, []);

  return (
    <>
      {!deleted && (
        <MessageBox>
          <MessageContainer>
            <Message completed={completed}>{message}</Message>
            <CheckIcon completed={completed} />
          </MessageContainer>
          <ProgressBarContainer>
            <ProgressBar />
          </ProgressBarContainer>
        </MessageBox>
      )}
    </>
  );
};

export default AnimatedMessage;
