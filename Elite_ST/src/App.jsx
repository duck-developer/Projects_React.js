import { createBrowserRouter } from "react-router-dom";
import { Home } from "./components/pages/Home";
import {GalleryImage} from './components/pages/Gallery/GalleryImage'
import { Error } from "./components/pages/error/Error";

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/Gallery',
    element:<GalleryImage/>
  },
  {
    path:"*",
    element:<Error/>
  }
])

export {router}