import "./styles.css";
import Random from "./components/Random";
export default function App(props) {
  console.log(props);
  return (
    <div className="App">
      <Random />
    </div>
  );
}
