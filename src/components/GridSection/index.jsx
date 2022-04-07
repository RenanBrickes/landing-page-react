import p from 'prop-types';
import * as styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { SectionContainer } from '../SectionContainer';
import { Heading } from '../Heading';
import { Texting } from '../Text';
export const GridSection = ({ title, description, grid, background = false }) => {
    return (
        <SectionBackground background={background}>
            <SectionContainer>
                <styled.Container>
                    <Heading size='huge' upperCase={true} colorDark={background} as="h2" >
                        {title}
                    </Heading>
                    <Texting>{description}</Texting>
                    <styled.Grid>
                        {grid.map((elemente, index) => (
                            <styled.GridElemente key={index} >
                                <Heading size='small' colorDark={background} >{elemente.title}</Heading>
                                <Texting>{elemente.description}</Texting>
                            </styled.GridElemente>
                        ))}
                    </styled.Grid>
                </styled.Container>
            </SectionContainer>
        </SectionBackground >
    )
}

GridSection.propTypes = {
    title: p.string.isRequired,
    description: p.string.isRequired,
    grid: p.arrayOf(p.shape({
        title: p.string.isRequired,
        description: p.string.isRequired
    })).isRequired,
    background: p.bool
}
