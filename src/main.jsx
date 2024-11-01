import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import BigData from './routes/BigData'
import CropBreed from './routes/CropBreed'
import PrecisionAgriculture from './routes/PrecisionAgriculture'
import IrrigationSystem from './routes/IrrigationSystem'
import VerticalFarming from './routes/VerticalFarming'
import DroneCropMonitoring from './routes/DroneCropMonitoring'
import AIML from './routes/AIML'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/BigData",
    element: <BigData />,
  },
  {
    path: "/CropBreed",
    element: <CropBreed />,
  },
  {
    path: "/PrecisionAgriculture",
    element: <PrecisionAgriculture />,
  },
  {
    path: "/IrrigationSystem",
    element: <IrrigationSystem />,
  },
  {
    path: "/VerticalFarming",
    element: <VerticalFarming />,
  },
  {
    path: "/DroneCropMonitoring",
    element: <DroneCropMonitoring />,
  },
  {
    path: "/AIML",
    element: <AIML />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
