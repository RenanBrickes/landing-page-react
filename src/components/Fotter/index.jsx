import p from 'prop-types';
import * as styled from './styles';
import { Texting } from '../Text';
import { SectionContainer } from '../SectionContainer';
export const Footer = ({ children }) => {
    return (
        <styled.Container>
            <SectionContainer>
                <Texting>
                    {children}
                </Texting>
            </SectionContainer>
        </styled.Container>
    )
}

Footer.propTypes = {
    children: p.node.isRequired,
}
