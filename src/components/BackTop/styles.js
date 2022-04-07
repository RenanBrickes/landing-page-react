import styled, { css } from 'styled-components';

export const Container = styled.a`
    ${({ theme }) => css`
        position : fixed;
        width : 4rem;
        bottom: 2rem;
        right: 2rem;
        opacity : 0.5;
    `}
`;