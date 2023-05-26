import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initializeApp } from "firebase/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/global.scss";

const firebaseConfig = {
  apiKey: "AIzaSyCoqBLua4LTb3_pAY9wGMV-6ZfTr5SCbxA",
  authDomain: "mi-primer-app-a84ce.firebaseapp.com",
  projectId: "mi-primer-app-a84ce",
  storageBucket: "mi-primer-app-a84ce.appspot.com",
  messagingSenderId: "883950378276",
  appId: "1:883950378276:web:00395d517b5a3be9a3a7b1",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
