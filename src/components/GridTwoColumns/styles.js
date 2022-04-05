import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles'

export const Container = styled.div`
    ${({ theme, background }) => css`
        display : grid;
        grid-template-columns : 1fr 2fr;
        aling-items: center;
        gap : ${theme.spacing.size.small};
        
        @media ${theme.media.lteMedium} {
            grid-template-columns : 1fr;
            text-aling : center;
        }

        ${Title} {
            margin-bottom : ${theme.spacing.size.xxlarge};
            color : ${background ? theme.colors.whiteColor : theme.colors.primaryColor }
        }

    `}
`;

export const TextContainer = styled.p`
    ${({ theme }) => css`
        @media ${theme.media.lteMedium} {
            margim-bottom : ${theme.spacing.size.large}
        }
    `}
`;
export const ImageContainer = styled.p`
    ${({ theme }) => css`

    `}
`;
export const Image = styled.img`
    ${({ theme }) => css`

    `}
`;