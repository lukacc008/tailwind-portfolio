import Header from "./components/header";
import Home from "./components/home";
import Skills from "./components/skills";

function App() {
  return (
    <div>
      <Header />
    <div id="home"><Home /></div>
    <div id="section"><Skills /></div>
    </div>
  );
}

export default App;