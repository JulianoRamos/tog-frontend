import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0 ;
    box-sizing: border-box;
  }

  body{
    background: #FFFFFF;
    color: #000000;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Futura', 'Roboto';
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-family: 'HurmeGeometricSans3-Bold', 'Roboto';
  }

  button {
    cursor: pointer;
  }
`;
