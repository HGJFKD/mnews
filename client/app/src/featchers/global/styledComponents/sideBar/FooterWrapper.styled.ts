import styled from 'styled-components'

export const FooterWrapper = styled.div`
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 55px;
    -webkit-box-shadow: 0px -10px 14px -10px rgba(0, 0, 0, 0.22);
    -box-shadow: 0px -10px 14px -10px rgba(0, 0, 0, 0.22);
`;

export const Footer = styled.ul`
    list-style: none;
    margin: 0;
    padding: 10px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    > li > a {
        text-decoration: none;
        color: #b8b8b8;
        font-size: 12px;
        &:hover{
            color: #fff;
            transition: all 0.4s ease; 
        }
    }
    > i {
        font-size: 5px;
        margin: 5px 5px 0px 5px;
        color: #ffffff45;
    }
`;

export const SubFooter = styled.div`
    position: absolute;
    bottom: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    color: #ffffff45;
    font-size: 12px;
    user-select:  none;
    cursor: default
`
 