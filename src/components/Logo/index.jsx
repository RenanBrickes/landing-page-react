import p from 'prop-types';
import * as styled from './styles';
import { Heading } from '../Heading/index';
export const Logo = ({ text, scrImage = '', link }) => {
    return (
        <Heading size='small' upperCase={true} >
            <styled.Logo href={link}>
                {!!scrImage ? <img src={scrImage} alt={text} /> : text}
            </styled.Logo>
        </Heading>
    )
}

Logo.propTypes = {
    text: p.string.isRequired,
    scrImage: p.string,
    link: p.string.isRequired
}
