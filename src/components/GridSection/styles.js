import styled, { css } from 'styled-components';
import { Title as HeadingContainer } from '../Heading/styles'

export const Container = styled.div`
    ${({ theme }) => css`
    
    `}
`;
export const Grid = styled.div`
    ${({ theme }) => css`
        counter-reset : grid-counter;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap : ${theme.spacing.size.large};
        margin : 50px 0 50px 0;
    `}
`;
export const GridElemente = styled.div`
    ${({ theme }) => css`
        ${HeadingContainer} {
            position: relative;
            left : 5rem;
            margin-bottom : 30px;
        }
        
        ${HeadingContainer}::before {
            counter-increment : grid-counter;
            content : counter(grid-counter);
            position : absolute;
            font-size : ${theme.font.size.xlarge};
            top : -1rem;
            left : -5rem;
            transform: rotate(10deg);
        }  
    `}
`;