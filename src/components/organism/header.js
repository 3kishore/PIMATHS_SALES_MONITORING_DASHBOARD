import { APP } from "../../services/utilities/APP.constant";

function Header() {
  return (
    <div className="p-4 text-white text-xl flex justify-between items-center bg-green-dark">
      <div className="flex gap-2 items-center">
        <span className="menu-toggler-icon cursor-pointer material-symbols-outlined">
          menu
        </span>
        <div>{APP.MATH_TUTEE_SALLES}</div>
      </div>
    </div>
  )
}

export default Header;
