// Add needed imports
import ReactDOM from "react-dom";
import App from "./App";
import { Amplify } from "aws-amplify";
import config from "./aws-exports";
import { AmplifyProvider } from "@aws-amplify/ui-react";

import "@aws-amplify/ui-react/styles.css";

// Configure Amplify
Amplify.configure(config);

// use the Amplify Provider component to intialize CSS
ReactDOM.render(
  <AmplifyProvider>
    <App />
  </AmplifyProvider>,
  document.getElementById("root")
);
