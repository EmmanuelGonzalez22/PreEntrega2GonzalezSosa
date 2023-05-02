import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./sass/main.css";
import ItemCount from "./components/ItemCount/ItemCount";

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
