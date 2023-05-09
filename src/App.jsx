import "./sass/main.css";
import { ItemCount, ItemListContainer, NavBar } from "./components";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a Pet´s BRC"} />
      <ItemCount
        stock={12}
        initial={1}
        onAdd={(cantidad) =>
          console.log("Agregaste " + cantidad + " al carrito")
        }
      />
    </>
  );
}

export default App;
