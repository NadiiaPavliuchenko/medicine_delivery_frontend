import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
const Header = lazy(() => import("../Header/Header"));
const Shop = lazy(() => import("../../pages/Shop/Shop"));
const ShoppingCart = lazy(() =>
  import("../../pages/ShoppingCart/ShoppingCart")
);

const App = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Shop />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
