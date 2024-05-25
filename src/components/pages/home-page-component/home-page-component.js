import { Navigate, Outlet, useLocation } from "react-router-dom";

function HomePageComponent() {
  let location = useLocation();
  
  const loggedIn = localStorage.getItem('sessionObj') ? true : false;

  if (!loggedIn) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <Outlet />;
}

export default HomePageComponent;