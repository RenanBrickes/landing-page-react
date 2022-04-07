import styled, { css } from 'styled-components';
export const Container = styled.div`
    ${({ theme }) => css`
        margin-bottom: ${theme.spacing.size.xhuge};
    `}  
`;

export const Grid = styled.div`
    ${({ theme }) => css`
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacing.size.large};
    margin-top : 50px;
    `}
`;

export const GridElemente = styled.div`
    ${({ theme }) => css`
        overflow: hidden;
    `};
    `;

export const Img = styled.img`
    ${({ theme }) => css` 
        width: 100%;
        transition: all 300ms ease-in-out;
        &:hover{
            transform : scale(1.2) rotate(10deg);
        }
    `};
`; 