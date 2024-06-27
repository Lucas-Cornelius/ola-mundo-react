import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";

function AppRoutes() {

  const pg = window.location.pathname;

  return (
    <BrowserRouter>
      <Menu/>
    
      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/sobremim" element={<SobreMim/>}/>
        </Route>

        
        <Route path="*" element={<h1>A rota "{pg}" não foi encontrada</h1>}/>

      </Routes>

      <Rodape/>
    </BrowserRouter>
  );
}

export default AppRoutes;
