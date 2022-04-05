
export const theme = {
    colors: {
        primaryColor: '#0A1128',
        secondaryColor: '#dc143c',
        whiteColor: '#FFFFFF',
        mediumGray : '#DDDDDD'
    },
    font: {
        family: {
            default: "'Montserrat', sans-serif",
            secondery: "'Open Sans', sans-serif"
        },
        size: {
            xsmall: '8rem',
            small: '1.6rem',
            medium: '2.4rem',
            large: '3.2rem',
            xlarge: '4.0rem',
            xxlarge: '4.8rem',
            huge: '5.6rem',
            xhuge: '6.4rem'
        }
    },
    media: {
        lteMedium: '(max-width : 768px)',
    },
    spacing: {
        size: {
            xsmall: '8rem',
            small: '1.6rem',
            medium: '2.4rem',
            large: '3.2rem',
            xlarge: '4.0rem',
            xxlarge: '4.8rem',
            huge: '5.6rem',
            xhuge: '6.4rem'
        }
    }
}

// export const renderTheme = (children) => {
//   return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
// };