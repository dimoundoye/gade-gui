import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Groupe from "./pages/Groupe";
import Activites from "./pages/Activites";
import Activite from "./pages/Activite";
import Produits from "./pages/Produits";
import Engagements from "./pages/Engagements";
import Actualites from "./pages/Actualites";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/MentionsLegales";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="groupe" element={<Groupe />} />
        <Route path="activites" element={<Activites />} />
        <Route path="activites/:slug" element={<Activite />} />
        <Route path="produits" element={<Produits />} />
        <Route path="engagements" element={<Engagements />} />
        <Route path="actualites" element={<Actualites />} />
        <Route path="contact" element={<Contact />} />
        <Route path="mentions-legales" element={<MentionsLegales />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
