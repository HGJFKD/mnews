import { createGlobalStyle } from "styled-components"


const GlobalStyles = createGlobalStyle`

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        display: flex;
        min-width: 100vh;
        font-family: 'Poppins', sans-serif;

    }
    .row::after {
        content: "";
        clear: both;
        display: table;
       
    }

    [class*="col-"] {
        float: left;
        padding: 15px;
    }   

    .col-1 {width: 8.33%;}
    .col-2 {width: 16.66%;}
    .col-3 {width: 25%;}
    .col-4 {width: 33.33%;}
    .col-5 {width: 41.66%;}
    .col-6 {width: 50%;}
    .col-7 {width: 58.33%;}
    .col-8 {width: 66.66%;}
    .col-9 {width: 75%;}
    .col-10 {width: 83.33%;}
    .col-11 {width: 91.66%;}
    .col-12 {width: 100%;}

    .header {
        padding: 15px;
    }
    
    #root {
        display: flex;
        margin-top:45px;
        justify-content: center;
        align-items: center;
        width: 100%
    }


    /* .menu {
        width: 25%;
        float: left;
        padding: 15px;
    }

    .main {
        width: 75%;
        float: left;
        padding: 15px;
    } */

`

export default GlobalStyles