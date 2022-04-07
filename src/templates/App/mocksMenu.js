import mockLinks from '../../components/Nav/mock';
import mockGrid from '../../components/GridSection/mock';
import mockImagem from '../../components/GridImage/mock';
export default {
    links: mockLinks,
    logoData: {
        text: "",
        scrImage: 'assets/images/logo.svg',
        link: 'http://globo.com'
    },
    gridColumns: {
        title: "Grid two columns",
        text: `s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        srcImage: '/assets/images/javascript.svg'
    },
    gridContente: {
        title: "SectionContainer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus placerat mollis lacus eget tincidunt.Mauris semper vulputate nibh vulputate placerat.Quisque bibendum dapibus augue. Sed eget lorem nisl.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Curabitur tincidunt at est in placerat.Vivamus pretium, magna consequat mattis lacinia, orci est congue tellus"
    },
    grids : mockGrid,
    gridImage : mockImagem
}