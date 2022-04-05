import p from 'prop-types';
import * as styled from './styles';
import { SectionBackground } from '../SectionBackground/index'
import { Heading } from '../Heading';
import { Texting } from '../Text';

export const GridTwoColumns = ({ title, text, srcImage, background = false }) => {
    return (
        <>
            <SectionBackground background={background}>
                <styled.Container background={background}>
                    <styled.TextContainer>
                        <Heading upperCase colorDark={false}> {title}</Heading>
                        <Texting>{text}</Texting>
                    </styled.TextContainer>
                    <styled.ImageContainer>
                        <styled.Image src={srcImage} title={title} />
                    </styled.ImageContainer>
                </styled.Container>
            </SectionBackground>
        </>
    )
}

GridTwoColumns.propTypes = {
    title: p.string.isRequired,
    text: p.string.isRequired,
    srcImage: p.string.isRequired,
    background: p.bool,
}
