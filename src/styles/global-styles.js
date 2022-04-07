import { createGlobalStyle } from 'styled-components'

export const GllobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,900;1,900&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');
    html {
        font-size: 62.5%;
        scroll-behavior : smooth;
        margin : 0;
        padding : 0;
    }

    body {
        font-size: 1.6rem;
        font-family: ${(theme) => theme.theme.font.family.default};
        margin: 0;
        padding: 0;
    }
    
    h1 {
        font-family: 'Montserrat', sans-serif;
        font-family: ${(theme) => theme.theme.font.family.secondary}
    }
`;

