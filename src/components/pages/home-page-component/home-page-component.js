import { Outlet } from "react-router-dom";

function HomePageComponent() {
  return (
    <div className="p-3 w-full h-full overflow-scroll">
      <Outlet />
    </div>
  );
}

export default HomePageComponent;
