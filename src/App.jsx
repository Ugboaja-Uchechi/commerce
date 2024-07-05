import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Shop from "./pages/shop/Shop"

const userRoutes = [
  {
    path: "/",
    element: <Home />,
    title: "Home"
  },
  {
    path: "/shop",
    element: <Shop />,
    title: "Shop"
  },
];

// const getRoutesByRoles = (role) => {
//   if (role === "user") {
//     return userRoutes;
//   }
// }

function App() {
  const pageRoutes = userRoutes.map(({ path, title, element }) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });
  
  return (
    <>
      <Router>
        <Routes>{pageRoutes}</Routes>
      </Router>
    </>
  )
}

export default App
