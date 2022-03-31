import { Nav } from '.';
import links from './mock';

export default {
    title: 'Nav bar',
    component: Nav,
    args: {
        links: links,
    },
    argsType: {
        links: { type: '' },
    }
}
export const NavBar = (args) => {
    return (
        <Nav {...args} />
    );

}
