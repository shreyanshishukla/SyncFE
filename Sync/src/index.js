import reactDom from "react-dom/client";
import App from "./components/App";
import "./main.css";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Features from "./components/Features";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Header";
import LoginModal from "./components/LoginModal";
import SignUpModal from "./components/SignUpModal";
import Events from "./components/Events";
const root = reactDom.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* <RouterProvider router={router}></RouterProvider> */}
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/features" element={<Features />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/about" element={<Features />}></Route>
      </Routes>
      <LoginModal />
      <SignUpModal />
    </BrowserRouter>
  </Provider>
);
if (module.hot) module.hot.accept();
