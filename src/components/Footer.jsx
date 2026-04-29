// components/Footer.jsx
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-line"></div>
      <div className="footer-content">
        <p>© 2026 Developed by <span>Salima Sahi</span></p>
        <div className="footer-links">
          <a href="#"><i className="ri-github-fill"></i></a>
          <a href="#"><i className="ri-linkedin-box-fill"></i></a>
          <a href="#"><i className="ri-mail-line"></i></a>
        </div>
        <p className="footer-tagline">FILM VAULT • Your Movie Sanctuary</p>
      </div>
    </footer>
  );
}