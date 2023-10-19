import Hello from "./chapter1/Hello";
import "./App.css";
import Wrapper from "./chapter1/Wrapper";

function App() {
  const name = "react";
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: 24,
    padding: "1rem",
  };

  return (
    <Wrapper>
      <Hello color="blue" />
      {/* JSX 안에 자바스크립트 값 적용 */}
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </Wrapper>
  );
}

export default App;
