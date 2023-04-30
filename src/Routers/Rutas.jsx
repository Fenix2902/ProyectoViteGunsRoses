import { Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import { History } from "../History/History";
import { Members } from "../Members/Members";
import { Menu } from "../shared/Menu/Menu";
import { Footer } from "../shared/Footer/Footer";
import { Shop } from "../Shop/Shop";
import { Fans } from "../Fans/Fans";

export function Rutas() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="history" element={<History />} />
        <Route path="members" element={<Members />} />
        <Route path="shop" element={<Shop />} />
        <Route path="fans" element={<Fans/>}/>
      </Routes>
      <Footer />
    </>
  );
}
