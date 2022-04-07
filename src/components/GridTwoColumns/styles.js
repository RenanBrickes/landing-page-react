import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';
import {Container as textingContainer} from '../Text/styles';

export const Container = styled.div`
    ${({ theme, background }) => css`
        display : grid;
        grid-template-columns : 1fr 2fr;
        align-items: center;
        gap : ${theme.spacing.size.small};
        padding : 3.2rem;
        @media ${theme.media.lteMedium} {
            grid-template-columns : 1fr;
            text-align : center;
        }

        ${Title} {
            margin-bottom : ${theme.spacing.size.xxlarge};
            color : ${background ? theme.colors.whiteColor : theme.colors.primaryColor }
        }

        ${textingContainer}{
            font-size : ${theme.font.size.medium};
        }

    `}
`;

export const TextContainer = styled.div`
    ${({ theme }) => css`
        @media ${theme.media.lteMedium} {
            margin-bottom : ${theme.spacing.size.large}
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