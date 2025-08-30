import { Link } from "react-router-dom";

export default function Navbar() {
  const navStyle = {
    display: "flex",
    gap: "1rem",
    padding: "0.75rem 1rem",
    borderBottom: "1px solid #eee",
  };
  return (
    <nav style={navStyle}>
      <Link to="/">Dashboard</Link>
      <Link to="/qa">Q&A</Link>
      <Link to="/seo">SEO Tools</Link>
      <Link to="/internship">Internship</Link>
    </nav>
  );
}