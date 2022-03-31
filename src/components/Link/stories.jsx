import { Link } from '.';

export default {
    title: 'Link',
    component: Link,
    args: {
        children: `Link 1`,
        link: 'https://globo.com'
    },
    argsType: {
        children: { type: 'string' },
    }
}
export const MenuLink = (args) => {
    return (
        <div style={{ display: 'flex' }}>
            <Link {...args} />
        </div>
    );

}
