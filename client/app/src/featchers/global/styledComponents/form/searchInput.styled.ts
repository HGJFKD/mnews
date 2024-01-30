import styled from "styled-components";
import { Icon } from "../globalStyles/Icon.styled";
import { Input } from "./Input.styled";


const SearchInput = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row-reverse;
    align-content: stretch;
    align-items: flex-end;
    justify-content: center;
    ${Input}{
        border-bottom: solid 1px #dc7eed;
        padding: 0 15px 0 38px;
        outline:none;
        &::placeholder {
            color: #dc7eed;
        }
    }
    ${Icon}{
        position:absolute;
        left: 5px;
        margin-left: 5px;
        margin-right: 0px;
        font-size: 18px;
        line-height:31px;
        color: #6e0082;
        border-bottom: solid 1px #dc7eed
}
`

export default SearchInput