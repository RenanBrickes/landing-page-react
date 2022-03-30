import styled, { css } from 'styled-components';

const titleSizes = {
    small: (theme) => css`
        font-size: ${theme.font.size.medium}
    `,
    medium: (theme) => css`
        font-size: ${theme.font.size.large}
    `,
    big: (theme) => css`
    font-size: ${theme.font.size.xlarge}
    `,
    huge: (theme) => css`
    font-size: ${theme.font.size.xhuge};
    ${mediaFont(theme)}`,
}

const caseTitle = (upperCase) => css`
    text-transform ${upperCase ? "uppercase" : "lowercase"}
`

const mediaFont = (theme) => css`
    @media ${theme.media.lteMedium}{
        font-size : ${theme.font.size.xlarge};
        background: purple;
    }
`;


export const Title = styled.h1`
    ${({ theme, colorDark, size, upperCase }) => css`
        color: ${colorDark ? theme.colors.whiteColor : theme.colors.primaryColor};
        ${titleSizes[size](theme)};
        ${caseTitle(upperCase)}

    `}
`;