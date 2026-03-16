import { Outlet } from "react-router-dom";
import {Header} from "./Header";

export function RootLayout() {
  // const navigation = useNavigation();
  return (
    <div>
      <Header />
      <main>
        {/* {navigation.state === "loading" && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </div>
  );
}
