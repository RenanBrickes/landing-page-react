import p from 'prop-types';
import * as styled from './styles';

export const Texting = ({ children }) => {
    return (
        <styled.Text>
            {children}
        </styled.Text>
    )
}

Texting.propTypes = {
    children: p.node.isRequired,
}
