import { createBrowserRouter } from "react-router-dom";
import Features from "../../../components/Features";
import App from "../../../components/App";
import * as React from "react";
import * as ReactDOM from "react-dom";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/n",
          element: <Features />,
        },
        {
          path: "/nd",
          element: <Features />,
        },
      ],
    },
  ],
  {
    future: {
      // Normalize `useNavigation()`/`useFetcher()` `formMethod` to uppercase
      v7_normalizeFormMethod: true,
    },
  }
);
export default router;
