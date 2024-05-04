import { PAYOUT_LABEL, PAYOUT_MODEL } from "../../../services/utilities/payout-model.constant";
import { useNavigate } from 'react-router-dom';

function PayoutModelComponent() {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const goToDetails = (id) => {
    // Navigate to the '/other-page' route
    navigate(`/home/payout-model/${id}`); // Use navigate instead of history.push
  };

  return (
    <div className="flex flex-col gap-[24px]">
      {PAYOUT_MODEL.map((value) => (
        <div>
          <div className="text-2xl font-medium mb-3">{value.salesType}</div>
          <div className="flex flex-wrap gap-4">
            {value.salaryTypeList.map((salary) => (
              <div
                className="p-4 rounded-lg min-w-[250px] hover:scale-105 cursor-pointer"
                onClick={() => goToDetails(salary.id)}
                style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)' }}
              >
                <div className="text-xl font-medium mb-3">{salary.category}</div>
                <div className="flex flex-col gap-2">
                  {salary.sharePercent ? (
                    <div className="flex flex-wrap gap-1">
                      <div className="text font-medium">{PAYOUT_LABEL.INCENTIVE_PERCENT}: </div>
                      <div>{salary.sharePercent}</div>
                    </div>
                  ) : (
                    <div>
                      <div className="flex flex-wrap gap-1">
                        <div className="text font-medium">{PAYOUT_LABEL.TOTAL}: </div>
                        <div>{salary.total}</div>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        <div className="text font-medium">{PAYOUT_LABEL.DEDUCTION}: </div>
                        <div>{salary.deduction}</div>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        <div className="text font-medium">{PAYOUT_LABEL.INCENTIVE}: </div>
                        <div>{salary.incentive}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PayoutModelComponent;
