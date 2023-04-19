import { Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import { History } from "../History/History";
import { Members } from "../Members/Members";
import { Menu } from "../shared/Menu/Menu";

export function Rutas() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="history" element={<History />} />
        <Route path="members" element={<Members />} />
      </Routes>
    </>
  );
}
