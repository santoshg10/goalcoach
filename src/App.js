import React, { Component } from "react";

class App extends Component {
  signOut() {
    console.log("signout");
  }
  render() {
    return (
      <div>
        <div>APP</div>
        <div style={{ textAlign: "right" }}>
          <button class="btn btn-danger" onClick={() => this.signOut()}>
            SignOut
          </button>
        </div>
      </div>
    );
  }
}
export default App;
