import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}
html{
    @media(max-width: 1080px) {
        font-size: 93.75%; //15px
    }
    @media(max-width: 720px) {
        font-size: 87.5%; //14px
    }
}
:root{
  --gray-600:#3A3838;
  --write-50: #FFFDE8;
}
body{
  background-color: var(--gray-600);
  font-family: 'Roboto',sans-serif;
  -webkit-font-smoothing: antialiased;
}
button{
  border: 0;
  cursor: pointer;
}
`;
