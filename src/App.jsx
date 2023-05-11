import "./sass/main.css";
import { ItemCount, ItemListContainer, NavBar } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a Pet´s BRC"} />
      <ItemCount
        stock={12}
        initial={1}
        onAdd={(cantidad) =>
          console.log("Agregaste " + cantidad + " al carrito")
        }
      />

      {/* <Routes>
        <Route path='/' element={<ItemListContainer />} />
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
