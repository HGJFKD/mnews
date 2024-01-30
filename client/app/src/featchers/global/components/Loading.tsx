import styled, { keyframes } from "styled-components";

const expand = keyframes`
  0% {
    transform: scale(0.1) rotate(45deg);
    border: 0.3rem #fff solid;
  }
  50% {
    border: 0.3rem #e15ff9 solid;
  }
  100% {
    transform: scale(1) rotate(270deg);
    border: 0.3rem transparent solid;
  }
`;

const FullScreenContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  background-color: #fff;
`;

const Square = styled.div`
  width: 5rem;
  height: 5rem;
  background: transparent;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  animation: ${expand} 3s ease infinite;
`;

const Square1 = styled(Square)`
  animation-delay: 0.5s;
`;

const Square2 = styled(Square)`
  animation-delay: 1s;
`;

const Square3 = styled(Square)`
  animation-delay: 1.5s;
`;

const LoadingAnimation = () => {
    return (
        <FullScreenContainer>
            <Square1 />
            <Square2 />
            <Square3 />
        </FullScreenContainer>
    );
};

export default LoadingAnimation;
