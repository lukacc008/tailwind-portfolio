import Header from "./components/header";
import Home from "./components/home";
import Skills from "./components/skills";
import Contact from "./components/contact";

function App() {
  return (
    <div>
      <Header />
    <div id="home"><Home /></div>
    <div id="section"><Skills /></div>
    <div id="contact"><Contact /></div>
    </div>
  );
}

export default App;