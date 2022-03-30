import p from 'prop-types';
import * as styled from './styles';

export const Heading = ({ children, colorDark = true, as = 'h1', size = "big", upperCase = false }) => {
    return (
        <styled.Title
            colorDark={colorDark}
            as={as}
            size ={size}
            upperCase = {upperCase}
            >
            {children}
        </styled.Title>
    )
}

Heading.propTypes = {
    children: p.node.isRequired,
    colorDark: p.bool,
    as: p.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
    size : p.oneOf(['small', 'medium', 'big', 'huge']),
    upperCase : p.bool
}
