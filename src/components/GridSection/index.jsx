import p from 'prop-types';
import * as styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { Texting } from '../Text';
export const GridSection = ({ title, description, grid, background = false }) => {
    return (
        <SectionBackground background={!background}>
            <styled.Container>
                <Heading size='huge' colorDark={!background} >
                    {title}
                </Heading>
                <Texting>{description}</Texting>
                <styled.Grid>
                    {grid.map((elemente, index) => (
                        <styled.GridElemente key={index} >
                            <Heading size='small' colorDark={!background} >{elemente.title}</Heading>
                            <Texting>{elemente.description}</Texting>
                        </styled.GridElemente>
                    ))}
                </styled.Grid>
            </styled.Container>
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
    background : p.bool
}
