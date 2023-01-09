import "./App.css";
import MyButton from "./components/MyButton";

function App() {
  return (
    <div className="App">
      <h2>App.js</h2>
      <MyButton
        text={"뒤로가기"}
        onClick={() => alert("뒤로가기 버튼 클릭!")}
      ></MyButton>
    </div>
  );
}

export default App;
