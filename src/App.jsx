
import Cardfixed from "./ui/components.jsx/Cardfixed";
import Headline from "./ui/components.jsx/Headline";
import Fifth from "./ui/Fifth";
import FindNovae from "./ui/FindNovae";
import Fourth from "./ui/Fourth";
import Header from "./ui/Header";
import Hero from "./ui/Hero";
import Second from "./ui/Second";
import Sixth from "./ui/Sixth";
import Third from "./ui/Third";

function App() {
  return (
    <>
      <Header />
      <Headline
        t1={"About Us"}
        t2={"Services"}
        t3={"Contact"}
        t4={"Register"}
      />
      <Hero />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
      <FindNovae />
    </>
  );
}

export default App;
