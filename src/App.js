import "./App.css";
import Groups from "./components/Groups";
import Navbar from "./components/Navbar";
import Pages from "./components/Pages";
import Websites from "./components/Websites";

function App() {
  return (
    <div className="">
      <Navbar/>
      <Websites/>
      <Pages/>
      <Groups/>
    </div>
  );
}

export default App;
