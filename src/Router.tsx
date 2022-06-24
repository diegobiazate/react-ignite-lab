import { Route, Routes } from "react-router-dom";
import { Evento } from "./pages/Event";
import { Subscribe } from "./pages/Subscribe";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/event" element={<Evento />} />
      <Route path="/event/lesson/:slug" element={<Evento />} />
    </Routes>
  );
}