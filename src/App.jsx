import "./sass/main.css";
import { ItemDetailContainer, ItemListContainer, NavBar } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route
          path='/'
          element={<ItemListContainer greeting={"Bienvenidos a Pet´s BRC"} />}
        />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/category' element={<ItemListContainer />} />
        <Route path='/category/:category' element={<ItemListContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
