import React, { Component } from "react";

export default class Vote extends Component {
  state = {
    supNum: 10,
    oppNum: 5,
  };

  render() {
    const { supNum, oppNum } = this.state;
    return (
      <div className="vote-box">
        <div className="header">
          <h2>标题</h2>
          <span>15人</span>
        </div>
        <br />
        <div className="main">
          <p>支持人数 {supNum} </p>
          <p>反对人数 {oppNum}</p>
        </div>
        <br />
        <div className="footer">
          <button onClick={() => this.setState({ supNum: supNum + 1 })}>
            支持
          </button>
          <button
            onClick={() => {
              // this.state.oppNum--;
              // this.forceUpdate();
              this.setState({
                oppNum: oppNum + 1,
              });
            }}
          >
            反对
          </button>
        </div>
      </div>
    );
  }
}
