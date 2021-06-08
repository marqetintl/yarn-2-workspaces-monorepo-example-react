import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Btn } from "@monorepo/shared";
import Layout, { DecrementBtn, IncrementBtn } from "@monorepo/counter-layout";

import reportWebVitals from "./reportWebVitals";

const App = () => {
    const [count, setCount] = useState(0);
    return (
        <Layout>
            <Layout.Header>
                <h1>Count: {count}</h1>
            </Layout.Header>

            <Layout.Actions>
                <DecrementBtn onClick={() => setCount(count - 1)} />
                <Btn label="Reset" onClick={() => setCount(0)} />
                <IncrementBtn onClick={() => setCount(count + 1)} />
            </Layout.Actions>
        </Layout>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
