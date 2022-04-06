import { GridImage } from '.';
import mock from './mock';

export default {
    title: 'TemplateGridImage',
    component: GridImage,
    args : mock
}
export const Grid = (args) => <GridImage {...args} />
