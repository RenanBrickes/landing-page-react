import p from 'prop-types';
import * as styled from './styles';

export const Texting = ({ children }) => {
    return <styled.Container dangerouslySetInnerHTML={{ __html: children }} />;

};

Texting.propTypes = {
    children: p.node.isRequired,
}
