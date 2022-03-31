import styled, { css } from 'styled-components';

export const SectionContainer = styled.section`
    ${({ theme }) => css`
        max-width : 120rem;
        margin : 0 auto;
        padding : ${theme.spacing.size.large};
    `}
`;