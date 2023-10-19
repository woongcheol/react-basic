import Hello from "./chapter1/1-2/Hello";
import "./App.css";

function App() {
  const name = "react";
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: 24,
    padding: "1rem",
  };

  return (
    <>
      <Hello />

      {/* JSX 안에 자바스크립트 값 적용 */}
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </>
  );
}

export default App;
