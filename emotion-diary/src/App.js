import "./App.css";
import MyButton from "./components/MyButton";
import MyHeader from "./components/MyHeader";

function App() {
  return (
    <div className="App">
      <MyHeader leftChild={<MyButton text={"왼쪽"}></MyButton>} head_text={"일기장"} rightChild={<MyButton text={"오른쪽"}></MyButton>}></MyHeader>
    </div>
  );
}

export default App;
