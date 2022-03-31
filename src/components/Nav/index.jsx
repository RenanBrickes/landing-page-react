import p from 'prop-types';
import * as styled from './styles';
import { Link } from '../Link/index'

export const Nav = ({ links = [] }) => {
    return (
        <styled.Nav>
            {links.map((link) => <Link key={link.link} {...link} />)}
        </styled.Nav>
    );
}

Nav.propTypes = {
    links: p.arrayOf(
        p.shape({
            children: p.node.isRequired,
            link: p.string.isRequired,
            newTable: p.bool
        }),
    ).isRequired
};
