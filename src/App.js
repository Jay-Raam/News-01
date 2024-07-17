import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TeslaNews from "./components/News";
import SportNews from "./components/sports";
import BitcoinNews from "./components/bitcoin";
import CrimeNews from "./components/crime";
import MovieNews from "./components/movies";
import FormingNews from "./components/farming";
import PoliticalNews from "./components/political";
import NotFound from "./components/Notfound";
import Navbar from "./components/ui/Navbar";
import BackToTopButton from "./components/ui/BackToTap";

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<TeslaNews />} />
          <Route path="/sports" element={<SportNews />} />
          <Route path="/bitcoin" element={<BitcoinNews />} />
          <Route path="/crime" element={<CrimeNews />} />
          <Route path="/movies" element={<MovieNews />} />
          <Route path="/farming" element={<FormingNews />} />
          <Route path="/political" element={<PoliticalNews />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <BackToTopButton />
      </>
    </BrowserRouter>
  );
}

export default App;
