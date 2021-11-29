import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/ui/atoms/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/routes/router";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
