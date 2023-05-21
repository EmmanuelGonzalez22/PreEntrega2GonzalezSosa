import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Footer,
  ItemDetailContainer,
  ItemListContainer,
  NavBar,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/category' element={<ItemListContainer />} />
        <Route path='/category/:category' element={<ItemListContainer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
