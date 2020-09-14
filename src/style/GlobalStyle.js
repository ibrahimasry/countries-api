import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600&display=swap');
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: ${({ theme }) => theme.text};
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: ${({ theme }) => theme.text};
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: ${({ theme }) => theme.text};
}

* {
    box-sizing: border-box;
  }
  ::selection {
  background: #ffb7b7; /* WebKit/Blink Browsers */
}
::-moz-selection {
  background: #ffb7b7; /* Gecko Browsers */
}

  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    font-size: inherit;
    font: inherit;
  }
  span {
    font-size: inherit;
  }
  html {
    font-size: 62.5%;
  }
  
  body {
    margin: 0;
    font-family: 'Nunito Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${({ theme }) => theme.backGround};
    min-height: 100vh;
    color : ${({ theme }) => theme.text};
    line-height:1.2;
    font-size : 18px;

  }
  li {
    list-style-type: none
  }

  @media only screen and (max-width: 635px) {
    body {
      font-size : 16px;
    }

  }


`;
