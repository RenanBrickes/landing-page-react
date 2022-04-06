import { Footer } from '.';

export default {
    title: 'Template/Footer',
    component: Footer,
    args: {
        children: `<p>Feito com carinho por <a href="https://renanbrickes.com">Renan Brickes</a></p>`,
    },
    argsType: {
        children: { type: 'string' },
    }
}
export const Rodape = (args) => <Footer {...args} />
