import Header from "./_root/Layouts/Header";
import Hero from "./_root/Layouts/Hero";
import Trending from "./_root/Layouts/Trending";
import Demo from "./_root/pages/Demo";
import "./index.css";

const App = () => {
  return (
    <div id="App">
      <Header />
      <Hero />
      <Trending />

      {/* <Demo/> */}
    </div>
  );
};

export default App;
