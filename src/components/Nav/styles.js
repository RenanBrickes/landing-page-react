import styled, { css } from 'styled-components';

export const Nav = styled.nav`
    ${({ theme }) => css`
        display : flex;
        flex-flow : row wrap;

        @media ${theme.media.lteMedium} {
            flex-flow : colunm wrap;
            align-content : certer;
        }
    `}
`;