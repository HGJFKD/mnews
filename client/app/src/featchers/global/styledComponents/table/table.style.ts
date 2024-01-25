import styled from "styled-components";

const StyledTable = styled.table`
  caption-side: top;
  border: none;
  border-collapse: collapse;
  border-collapse: separate; 
  border-spacing: 5px 5px;
  caption-side: bottom;
  -empty-cell: hide;
 /* vertical-align: baseline ; */
 padding: 20px 20px;
  /* | sub | super | text-top | 
                text-bottom | middle | top | bottom | 
                <percentage> | <length> */ 
            
  td, th {
    border: none;
    padding: 5px 20px
  }
  /* td,
  th {
    border: 1px solid;
  } */

  td {
    /* padding: 10px 10px; */
  }

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
    padding: 5px;
    font-weight: bold;
  }
`;

export default StyledTable