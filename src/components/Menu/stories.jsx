import { Menu } from '.';
import mockLinks from '../Nav/mock'

export default {
    title: 'Menu',
    component: Menu,
    args: {
        links: mockLinks,
        logoData: {
            text: `Logo`,
            scrImage: 'assets/images/logo.svg',
            link: 'http://globo.com'
        }
    }
}
export const MenuTemplate = (args) => <Menu {...args} />
