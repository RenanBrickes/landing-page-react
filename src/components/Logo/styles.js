import styled, { css } from 'styled-components';

export const Logo = styled.a`
    ${({ theme }) => css`
        display: flex;
        color : black;
        text-decoration: none;
        align-items : center;
        
        > img {
            max-height : 2.5rem;
            width: 100%;
        }
    `}
`;