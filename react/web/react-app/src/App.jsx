import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <p
          style={{
            fontSize: "2rem",
          }}>
          You cliked{" "}
          <span style={{ color: "crimson" }}>{this.state.count}</span> times
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
          }}>
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}>
            Incr
          </button>

          <button
            onClick={() => {
              return (
                this.state.count > 0 &&
                this.setState({ count: this.state.count - 1 })
              );
            }}>
            Desc
          </button>
        </div>
      </div>
    );
  }
}

export default App;
