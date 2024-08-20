import Header from "./Components/Header";
import Counter from "./Components/Counter";
import "./Counter.css";


function Home() {

  const firstvariable = "Expert";
  const secondvariable = "Developer";

  return (
    <main>
      <div className="main">
        <Header />
        <Counter />
      </div>
    </main>
  );
}

export default Home;
