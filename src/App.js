import "./App.css";
import Navbar from "../src/componentes/Navbar";

function App() {
  return (
    <div className="body">
      <div className="header">
        <Navbar />
      </div>

      <div className="main">
        <p>este es mi main </p>
      </div>
      <div className="footer">
        <p>este es mi footer</p>
      </div>
    </div>
  );
}

export default App;
