import p from 'prop-types';
import * as styled from './styles';

export const Link = ({ children, link, newTable = false }) => {
    let target = newTable ? "_blank" : "_self";
    return (
        <styled.Link href={link} target={target} >
            {children}
        </styled.Link>
    );
}

Link.propTypes = {
    children: p.node.isRequired,
    link: p.string.isRequired,
    newTable: p.bool
}
