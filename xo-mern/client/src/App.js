import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import QA from "./pages/QA";
import SEO from "./pages/SEO";
import Internship from "./pages/Internship";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main style={{ padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/qa" element={<QA />} />
          <Route path="/seo" element={<SEO />} />
          <Route path="/internship" element={<Internship />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
