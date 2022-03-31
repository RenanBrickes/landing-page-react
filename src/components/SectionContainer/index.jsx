import p from 'prop-types';
import * as styled from './styles';

export const SectionContainer = ({ children }) => {
    return (
        <styled.SectionContainer>
            {children}
        </styled.SectionContainer>
    )
}

SectionContainer.propTypes = {
    children: p.node.isRequired,
}
