import { EnvironmentHelperService } from "../../../services/helper-service/environment-helper.service";

function MyProfileComponent() {
  const _environmentHelperService = new EnvironmentHelperService();
  const sessobj = _environmentHelperService.getSessionObject();
  return (
    <div className="m-6 mb-11 pb-10 flex flex-col gap-9 form-height">
      <div className="flex flex-wrap gap-6 shadow-xl p-8 rounded-2xl">
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold">My Profile</h2>
          <div className="flex flex-col gap-2">
            <div className="text-xl"><span className="font-bold">Name:</span>{sessobj.firstName} {sessobj.lastName}</div>
            <div className="text-xl"><span className="font-bold">My Employee Code:</span>{sessobj.empCode}</div>
            <div className="text-xl"><span className="font-bold">My Role:</span>{sessobj.role}</div>
            {sessobj.department && <div className="text-xl"><span className="font-bold">Department:</span>{sessobj.department}</div>}
            <div className="text-xl"><span className="font-bold">Zone:</span>{sessobj.zone}</div>
            {sessobj.region && <div className="text-xl"><span className="font-bold">Region:</span>{sessobj.region}</div>}
            {sessobj.area && <div className="text-xl"><span className="font-bold">Area:</span>{sessobj.area}</div>}
          </div>
        </div>
        <div>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold">My Contact Details</h2>
          <div>
            <div className="text-xl"><span className="font-bold">Email Id:</span>{sessobj.emailId}</div>
            <div className="text-xl"><span className="font-bold">Mobile No:</span>{sessobj.emailId}</div>
          </div>
        </div>
      </div>
      </div>
      <div className="flex flex-wrap gap-6 shadow-xls p-8 rounded-2xl">
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold">My Reporting Details</h2>
            <div className="flex flex-col gap-2">
            <div className="text-xl"><span className="font-bold">Name:</span>{sessobj.seniorDetails.name}</div>
            <div className="text-xl"><span className="font-bold">My Employee Code:</span>{sessobj.seniorDetails.empCode}</div>
            <div className="text-xl"><span className="font-bold">My Role:</span>{sessobj.seniorDetails.role}</div>
            <div className="text-xl"><span className="font-bold">Department:</span>{sessobj.seniorDetails.department}</div>
            <div className="text-xl"><span className="font-bold">Zone:</span>{sessobj.seniorDetails.zone}</div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-bold">My Contact Details</h2>
            <div>
              <div className="text-xl"><span className="font-bold">Email Id:</span>{sessobj.seniorDetails.emailId}</div>
              <div className="text-xl"><span className="font-bold">Mobile No:</span>{sessobj.seniorDetails.emailId}</div>
            </div>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default MyProfileComponent;
