import AddMemberForm from "../../../services/models/add-member-page/add-member-form";
import { Provider } from "react-redux";
import addMember from "../../../services/models/add-member-page/add-member";

function AddMemberComponent() {
  return (
    <Provider store={addMember}>
      <div>
        <AddMemberForm />
      </div>
    </Provider>
  )
}

export default AddMemberComponent;
