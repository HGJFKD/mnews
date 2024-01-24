// import { styled, keyframes } from '@mui/system';
// import Box from '@mui/material/Box';

// const expand = keyframes`
//   0% {
//     transform: scale(0.1) rotate(45deg);
//     border: 0.3rem #fff solid;
//   }
//   50% {
//     border: 0.3rem #12c511 solid;
//   }
//   100% {
//     transform: scale(1) rotate(270deg);
//     border: 0.3rem transparent solid;
//   }
// `;

// const FullScreenContainer = styled(Box)({
//   position: 'fixed',
//   top: 0,
//   left: 0,
//   width: '100%',
//   height: '100%',
//   backgroundColor: '#11111a',
// });

// const Square = styled('div')({
//   width: '5rem',
//   height: '5rem',
//   background: 'transparent',
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%)',
//   animation: `${expand} 3s ease infinite`,
// });

// const Square1 = styled(Square)({
//   animationDelay: '0.5s',
// });

// const Square2 = styled(Square)({
//   animationDelay: '1s',
// });

// const Square3 = styled(Square)({
//   animationDelay: '1.5s',
// });

// const LoadingAnimation = () => {
//   return (
//     <FullScreenContainer>
//       <Square1 />
//       <Square2 />
//       <Square3 />
//     </FullScreenContainer>
//   );
// };

// export default LoadingAnimation;
