import { GridSection } from '.';
import mock from './mock';

export default {
    title: 'TemplateGrid',
    component: GridSection,
    args : mock
}
export const Grid = (args) => <GridSection {...args} />
