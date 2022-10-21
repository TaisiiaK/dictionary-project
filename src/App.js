import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src="https://www.shecodes.io/assets/branding/logo-shecodes-f9fa0540d113c086f61eb6e89466c0cbd24a42163b6a96d4b01da078803f53ee.png"
            alt="logo"
            className="App-logo img-fluid"
          />
        </header>
        <main>
          <Dictionary defaultKeyword="dictionary" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by Taisiia Kompaniiets and is{" "}
            <a href="https://github.com/TaisiiaK/dictionary-project.git">
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a href="https://fabulous-arithmetic-863bb9.netlify.app/">
              hosted on Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
