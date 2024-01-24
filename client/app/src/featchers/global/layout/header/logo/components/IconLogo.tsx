import StyledSquareLogo from '../../../../styledComponents/logo/Square.styled';

const IconLogo = () => {
  return (
    <>
      <StyledSquareLogo opacity='0.3' rotate={45} />
      <StyledSquareLogo opacity='0.6' rotate={70} />
      <StyledSquareLogo opacity='1' rotate={95} />
    </>
  );
};

export default IconLogo;
