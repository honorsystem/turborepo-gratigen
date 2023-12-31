import * as React from "react";
import { CounterButton, Link } from "ui";
import "./styles.css";

function App(): JSX.Element {
  return (
    <div className="container">
      <h1 className="title">
        Admin <br />
        <span>Kitchen bink</span>
      </h1>
      <CounterButton />
      <p className="description">
        Built With{" "}
        <Link href="https://turbo.build/repo" newTab>
          Balls
        </Link>
        {" & "}
        <Link href="https://vitejs.dev/" newTab>
          Vite
        </Link>
      </p>
    </div>
  );
}

export default App;
