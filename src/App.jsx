import Hero from "./components/Hero";
import Demo from "./components/Demo";

import "./App.css";

function App() {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>

      <div className="app">
        <Hero />
        <Demo />
        <h1>Divyat</h1>
      </div>
    </main>
  );
}

export default App;
