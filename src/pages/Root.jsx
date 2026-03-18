import { Outlet } from "react-router-dom";
import {Header} from "./Header";
import { CartContextProvider } from "../store/CartContext";

export function RootLayout() {
  // const navigation = useNavigation();
  return (
    <div>
      <CartContextProvider>
        <Header />
        <main>
          <Outlet />
        </main>
      </CartContextProvider>
    </div>
  );
}

