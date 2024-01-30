import styled from "styled-components";

const StyledTable = styled.table`
  caption-side: top;
  border: none;
  border-collapse: collapse;
  border-collapse: separate; 
  border-spacing: 5px 5px;
  caption-side: bottom;
  -empty-cell: hide;
 vertical-align: baseline ;
 padding: 20px 10px;

            
  tbody tr:nth-of-type(odd) {
  background-color: #fcebff;
}

tbody tr:hover {
  background-color: #FF99CC;
  cursor: pointer;
}
  thead > tr {
    background-color: #ce00f4;
    color: #fff;
    
  }
  caption {
    font-size: 0.9em;
    padding: 4px;
    font-weight: bold;
  }
`;

export const Td = styled.td<{
  bold?: string,
}>`
  border: none;
  padding: 5px;
  text-align: center;
  vertical-align: middle;
  font-weight: ${({ bold }) => (bold === 'true' ? 'bold' : 'normal')};
`;
export const Th = styled.th`
  border: none;
  padding: 5px 20px;
`
export default StyledTable