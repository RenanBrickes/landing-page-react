import { Logo } from '.';

export default {
    title: 'Logo',
    component: Logo,
    args: {
        text: `Logo`,
        scrImage: 'assets/images/logo.svg',
        link: 'http://globo.com'
    }
}
export const ImagemLogo = (args) => <Logo {...args} />
export const TextLogo = (args) => <Logo {...args} />
TextLogo.args = {
    text : 'Logo',
    scrImage : '',
    link: 'http://globo.com'
}