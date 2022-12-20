import "./App.css";
import Mensaje from "./Mensaje";

const Description = () => {
  return <p>Esta es la app del curso fullstack bootcamp</p>;
};

const App = () => {
  return (
    <div className="App">
      <Mensaje color="yellow" message="Estamos trabajando" />
      <Mensaje color="blue" message="En un curso" />
      <Mensaje color="red" message="De React para frontend" />
      <Description />
    </div>
  );
};

export default App;
