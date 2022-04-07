
import mockApp from './mocksMenu';

import { Menu } from '../../components/Menu';
import { GridTwoColumns } from '../../components/GridTwoColumns';
import { GridSection } from '../../components/GridSection';
import { Conteudo } from '../../components/Content';
import { GridImage } from '../../components/GridImage';
import { Footer } from '../../components/Fotter';
import { BackTop } from '../../components/BackTop';
function App() {
  return (
    <>
      <Menu links={mockApp.links} logoData={mockApp.logoData} />
      <GridTwoColumns {...mockApp.gridColumns} background={true} />
      <Conteudo title={mockApp.gridContente.title} description={mockApp.gridContente.description} />
      <GridSection {...mockApp.grids} />
      <GridImage {...mockApp.gridImage} />
      <Conteudo title={mockApp.gridContente.title} description={mockApp.gridContente.description} />
      <Footer children={`<p>Feito com carinho por <a href="https://renanbrickes.com">Renan Brickes</a></p>`} ></Footer>
      <BackTop />
    </>

  );
}

export default App;
