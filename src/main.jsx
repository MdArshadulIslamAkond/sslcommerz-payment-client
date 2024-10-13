import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Success from './Success.jsx';
import Fail from './Fail.jsx';
import Cancle from './Cancle.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "success/:tranId",
    element: <Success />,
  },
  {
    path: "fail/:tranId",
    element: <Fail />,
  },
  {
    path: "cancle/:tranId",
    element: <Cancle />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
