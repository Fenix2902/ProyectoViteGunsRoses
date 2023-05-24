import { Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import { History } from "../History/History";
import { Members } from "../Members/Members";
import { Menu } from "../shared/Menu/Menu";
import { Footer } from "../shared/Footer/Footer";
import { Shop } from "../Shop/Shop";
import { Fans } from "../Fans/Fans";
import { Carga} from "../Hook/Carga";
import { Music } from "../Music/Music";

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
        <Route path="hooks" element={<Carga/>}/>
        <Route path="music" element={<Music/>}/>
      </Routes>
      <Footer />
    </>
  );
}
