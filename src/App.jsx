import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  CartContainer,
  CheckOut,
  Footer,
  ItemDetailContainer,
  ItemListContainer,
  NavBar,
} from "./components";
import { CartProvider } from "./contexts";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />

        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/category' element={<ItemListContainer />} />
          <Route path='/category/:category' element={<ItemListContainer />} />
          <Route path='/cart' element={<CartContainer />} />
          <Route path='/check-out' element={<CheckOut />} />
        </Routes>

        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
