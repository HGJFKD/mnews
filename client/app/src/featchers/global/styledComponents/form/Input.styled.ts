import styled from 'styled-components'

type InputTypeProps = {
  type: string;
};

export const InputGruop = styled.div`
  position:relative; 
  margin: 18px 0;
  border-bottom: 1px solid #6e0082;
  transition: border-bottom-color 0.5s;
  &:focus-within {
    border-bottom-color: #e15ff9; 
  }
  
  & :focus~label, :valid~label {
      top: -4px;
      left: 5px;
      color:#e15ff9;
      font-size: 12px;
    }
`;

export const Input = styled.input`
    width: 320px;
    height: 40px;
    font-size: 16px;
    color: #6e0082;
    padding: 10px;
    background: transparent;
    border: none;
    outline: none;
`

export const Label = styled.label<InputTypeProps>`
    position: absolute;
    top: 50%;
    left: ${({ type }) => type === 'date' ? '36px' : '5px'};
    transform: translateY(-50%);
    font-size: 16px;
    color: #6e0082;
    pointer-events: none;
    transition: 0.5s;
`