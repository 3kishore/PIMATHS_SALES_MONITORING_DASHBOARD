import { APP } from "../../services/utilities/APP.constant";

function Header() {
  return (
    <div className="p-4 text-white text-xl flex justify-between items-center bg-green-dark">
      <div>{APP.MATH_TUTEE_SALLES}</div>
    </div>
  )
}

export default Header;
