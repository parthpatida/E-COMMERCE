import Home from "./components/route/home/home.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/route/home/navigation/navigation.component";
import Authentication from "./components/route/home/authentication/authentication.component";
import Shop from "./components/route/shop/shop.component";
import Checkout from "./components/routes/checkout/checkout.component";


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index='true' element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication/>}/>
        <Route path="checkout" element={<Checkout/>}/>
      </Route>
    </Routes>
  );
};

export default App;
