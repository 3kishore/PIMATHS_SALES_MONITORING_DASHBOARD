import { useNavigate, useParams } from "react-router-dom";
import { PAYOUT_LABEL, SALARY_BREAKDOWN } from "../../../services/utilities/payout-model.constant";
import { useEffect } from 'react';

function PayoutDetailsComponent() {
    const { detail } = useParams();
    const salaryDetail = SALARY_BREAKDOWN.find(x => x.id === detail);   
    const navigate = useNavigate(); // Use useNavigate at the top level

    useEffect(() => {
      if (!salaryDetail) {
        navigate('/home/payout-model'); // Navigate if salaryDetail is not found
      }
    }, [navigate, salaryDetail]);

    if (!salaryDetail) {
      return null; // or return a loading/error message here
    }

    return (
      <div>
        <table>
          {
            salaryDetail.monthlyIncentive.length ? 
            <tbody>
              <tr>
                <td>{PAYOUT_LABEL.NET_SALARY_WITH_INCENTIVE}:</td>
                <td>{salaryDetail.netSalaryWith}</td>
              </tr>
              <tr>
                <td>{PAYOUT_LABEL.NET_SALARY_WITHOUT_INCENTIVE}:</td>
                <td>{salaryDetail.netSalaryWithout}</td>
              </tr>
              <tr>
                <td>{PAYOUT_LABEL.GROSS_SALARY}:</td>
                <td>{salaryDetail.grossSalary}</td>
              </tr>
              <tr>
                <td>{PAYOUT_LABEL.INCENTIVE_AMOUNT}:</td>
                <td>{salaryDetail.incentiveAmount}</td>
              </tr>
              <tr>
                <td>{PAYOUT_LABEL.MINIMUM_POINTS_TO_GET_SALARY}:</td>
                <td>{salaryDetail.points}</td>
              </tr>
              <tr>
                <td>{PAYOUT_LABEL.PRESENT_DAYS}:</td>
                <td>{salaryDetail.presentDays}</td>
              </tr>
            </tbody> :
            <tbody>
              <tr>
                <td>{PAYOUT_LABEL.MINIMUM_POINTS_TO_GET_SALARY}:</td>
                <td>{salaryDetail.points}</td>
              </tr>
              <tr>
                <td>{PAYOUT_LABEL.QUARTERLY_INCENTIVE} {PAYOUT_LABEL.AMOUNT}:</td>
                <td>{salaryDetail.quarterlyIncentiveAm}</td>
              </tr>
              <tr>
                <td>{PAYOUT_LABEL.SPECIAL_INCENTIVE}:</td>
                <td>{salaryDetail.specialIncentive}</td>
              </tr>
              <tr>
                <td>{PAYOUT_LABEL.YEARLY_BONUS}:</td>
                <td>{salaryDetail.yearlyBouns}</td>
              </tr>
            </tbody>
          }
        </table>
        {
            salaryDetail.monthlyIncentive.length ? 
            <div>
              <div>{PAYOUT_LABEL.MONTHLY_INCENTIVE_BREAKDOWN}: </div>
              <table>
                {
                  salaryDetail.monthlyIncentive.map(val => (
                    <tbody>
                      <tr>
                        <td>{val.points}</td>
                        <td>{val.amount}</td>
                      </tr>
                    </tbody>
                  ))
                }
              </table>
            </div> : <div></div>
        }
        
        <div>{PAYOUT_LABEL.MONTHLY_SPECIAL_INCENTIVE}: </div>
        <table>
          {
            salaryDetail.monthlySpecialIncentive.map(val => (
              <tbody>
                <tr>
                  <td>{val.points}</td>
                  <td>{val.amount}</td>
                </tr>
              </tbody>
            ))
          }
        </table>
        <div>{PAYOUT_LABEL.QUARTERLY_INCENTIVE}: </div>
        <table>
          {
            salaryDetail.quarterlyIncentive.map(val => (
              <tbody>
                <tr>
                  <td>{val.points}</td>
                  <td>{val.amount}</td>
                </tr>
              </tbody>
            ))
          }
        </table>
        <div>{PAYOUT_LABEL.ANNUAL_BONUS}: </div>
        <table>
          {
            salaryDetail.anualBouns.map(val => (
              <tbody>
                <tr>
                  <td>{val.points}</td>
                  <td>{val.amount}</td>
                </tr>
              </tbody>
            ))
          }
        </table>
      </div>
    )
}

export default PayoutDetailsComponent
