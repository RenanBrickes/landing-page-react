import styled, { css } from 'styled-components';

export const Link = styled.a`
    ${({ theme }) => css`
        display: block;
        text-decoration : none;
        font-size : ${theme.font.size.small};
        padding : ${theme.spacing.size.small};
        color : ${theme.colors.primaryColor};
        position : relative;

        &::after {
            content : '';
            position: absolute;
            bottom : 0;
            left : 50%;
            width : 0;
            height : 0.2rem;
            background : ${theme.colors.secondaryColor};
            transition : all 300ms ease-in-out;
        }

        &:hover::after {
            left : 25%;
            width : 50%;
        }
    `}
`;