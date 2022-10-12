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
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>Coded by Taisiia Kompaniiets</small>
        </footer>
      </div>
    </div>
  );
}
