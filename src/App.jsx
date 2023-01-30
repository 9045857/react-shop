import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { Shop } from "./layout/Shop";

import{CartContext}from './hooks/CartContext'

function App() {//нужно разобраться, как работать с несколькими Контекстами, но вообще, правильно работать с одним, но общим
    return (
        <CartContext>
            <Header />
            <Shop />
            <Footer />
        </CartContext>
    );
}

export default App;
