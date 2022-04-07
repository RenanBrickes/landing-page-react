import { Conteudo } from '.';
import { SectionContainer } from '../SectionContainer/index'

export default {
    title: 'Conteudo',
    component: Conteudo,
    args: {
        title: "SectionContainer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus placerat mollis lacus eget tincidunt.Mauris semper vulputate nibh vulputate placerat.Quisque bibendum dapibus augue. Sed eget lorem nisl.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Curabitur tincidunt at est in placerat.Vivamus pretium, magna consequat mattis lacinia, orci est congue tellus"
    },
    argsType: {
        title: { type: 'string' },
        description: { type: 'string' },
    }
}
export const SessaoConteudo = (args) => <Conteudo {...args} />
