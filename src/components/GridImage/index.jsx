import p from 'prop-types';
import * as styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { SectionContainer } from '../SectionContainer';
import { Heading } from '../Heading';
import { Texting } from '../Text';
export const GridImage = ({ background = false, title, description, grid }) => {
    return (
        <SectionBackground background={!background}>
            <SectionContainer>
                <Heading
                    size='huge'
                    upperCase={true}
                    colorDark={!background}
                    as="h2">
                    {title}
                </Heading>
                <Texting>{description}</Texting>
                <styled.Grid>
                    {grid.map((elemento, index) => (
                        <styled.GridElemente key={index}>
                            <styled.Img src={elemento.srcImg} alt={title.altText}></styled.Img>
                        </styled.GridElemente>
                    ))}
                </styled.Grid>
            </SectionContainer>
        </SectionBackground>
    )
}

GridImage.propTypes = {
    background: p.bool,
    title: p.string.isRequired,
    description: p.string.isRequired,
    grid: p.arrayOf(p.shape({
        altText: p.string.isRequired,
        srcImg: p.string.isRequired
    })).isRequired
}
