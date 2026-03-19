import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle` 
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@font-face {
  font-family: 'EditechRegular';
  src: url('/fonts/EditechRegular.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}
@font-face{ 
       font-family: 'EditechBold';
  src: url('/fonts/EditechBold.woff2') format('woff2');
  font-weight: bold;
  font-style: normal;
      
}
@font-face{
      font-family: "Brushline";
  src: url("fonts/Brushline.ttf") format("truetype");

}

* {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
     font-family: 'Barlow', sans-serif;
}
:root {
      --primary__font: 'EditechRegular', sans-serif;
      --primary__fontBold: 'EditechBold', sans-serif;
      --secondary__font: 'Barlow', sans-serif;
}
a {
    text-decoration: none !important;
}
.mm-listitem a{
  text-transform: capitalize;
}
`;
