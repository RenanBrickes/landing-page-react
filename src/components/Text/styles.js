import styled, { css } from 'styled-components';

export const Text = styled.p`
    ${({ theme }) => css`
        font-size : ${theme.font.size.small};
        font-weight: 100;
    `}
`;