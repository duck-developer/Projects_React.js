import { createBrowserRouter } from 'react-router-dom'

//PAGES
import Home from './pages/Home/index.jsx'
import Login from './pages/Login/index.jsx'
import Admin from './pages/Admin/index.jsx'
import Error404 from './pages/404/index.jsx'
import Private from './routes/private.jsx'
import AllPedidos from './pages/AllPedidos/index.jsx'
import InfoPedido from './pages/infoPedidos/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/home',
    element: <Private><Home /></Private>
  },
  {
    path: '/adminD6$pp9@XfhFSqMhjjrGeH8MKkvVKu&V$WXhaT!4&',
    element: <Private><Admin /></Private>
  },
  {
    path: '/All-pedidos',
    element: <Private><AllPedidos /></Private>
  },
  {
    path: '/Information/:id',
    element: <Private><InfoPedido/></Private>
  },

  {
    path: '*',
    element: <Error404 />
  }
])

export { router }
