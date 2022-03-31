import p from 'prop-types';
import * as styled from './styles';

export const SectionBackground = ({ children, background = false }) => {
    return (
        <styled.SectionBackground
            background={background}
        >
            {children}
        </styled.SectionBackground>
    )
}

SectionBackground.propTypes = {
    children: p.node.isRequired,
    background: p.bool
}
