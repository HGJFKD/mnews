import styled from "styled-components";

const StyledTable = styled.table`
  caption-side: top;
  border: none;
  border-collapse: collapse;
  border-collapse: separate; 
  border-spacing: 5px 5px;
  caption-side: bottom;
  /* -empty-cell: show | hide; */
  /* empty-cell is a property of table or the cells themselves

  /* vertical-align: baseline | sub | super | text-top | 
                text-bottom | middle | top | bottom | 
                <percentage> | <length> */
            
  td,
  th {
    border: none;
    padding: 5px 20px
  }
  /* td,
  th {
    border: 1px solid;
  } */

  td {
    padding: 5px 10px;
  }

  tbody tr:nth-of-type(odd) {
  background-color: #efefef;
}

tbody tr:hover {
  background-color: lightpink;
}
  thead > tr {
    background-color: #c2c2c2;
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }
`;

export default StyledTable