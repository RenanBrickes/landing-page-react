import p from 'prop-types';
import * as styled from './styles';
import { SectionContainer } from '../SectionContainer';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
export const Conteudo = ({ title, description, background = false }) => {
    return (
        <SectionBackground background={background}>
            <SectionContainer>
                <Heading colorDark={background} as="h2" size='big' upperCase={true}>{title}</Heading>
                <styled.Container>{description}</styled.Container>
            </SectionContainer>
        </SectionBackground>

    );
}

Conteudo.propTypes = {
    background: p.bool,
    title: p.string.isRequired,
    description: p.string.isRequired,
}
