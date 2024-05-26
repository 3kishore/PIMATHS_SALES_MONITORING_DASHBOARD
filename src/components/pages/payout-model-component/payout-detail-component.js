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
        <div className="w-full grid-ui">
          <div className="overflow-auto">
            <table className="w-full">
              {
                salaryDetail.monthlyIncentive.length ? 
                <tbody>
                  <tr className="bg-neutral-9 subHeader">
                    <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                      <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] py-[9px]">
                        <span className="text-base-4 leading-[1.71] text-neutral-1 text-left">{PAYOUT_LABEL.NET_SALARY_WITH_INCENTIVE}</span>
                      </div>
                    </td>
                    <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                      <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] py-[9px]">
                        <span className="text-base-4 leading-[1.71] text-neutral-1 text-left">{salaryDetail.netSalaryWith}</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-neutral-9 subHeader">
                    <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                      <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] py-[9px]">
                        <span className="text-base-4 leading-[1.71] text-neutral-1 text-left">{PAYOUT_LABEL.NET_SALARY_WITHOUT_INCENTIVE}</span>
                      </div>
                    </td>
                    <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                      <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] py-[9px]">
                        <span className="text-base-4 leading-[1.71] text-neutral-1 text-left">{salaryDetail.netSalaryWithout}</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-neutral-9 subHeader">
                    <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                      <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] py-[9px]">
                        <span className="text-base-4 leading-[1.71] text-neutral-1 text-left">{PAYOUT_LABEL.GROSS_SALARY}</span>
                      </div>
                    </td>
                    <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                      <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] py-[9px]">
                        <span className="text-base-4 leading-[1.71] text-neutral-1 text-left">{salaryDetail.grossSalary}</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-neutral-9 subHeader">
                    <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                      <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] py-[9px]">
                        <span className="text-base-4 leading-[1.71] text-neutral-1 text-left">{PAYOUT_LABEL.INCENTIVE_AMOUNT}</span>
                      </div>
                    </td>
                    <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                      <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] py-[9px]">
                        <span className="text-base-4 leading-[1.71] text-neutral-1 text-left">{salaryDetail.incentiveAmount}</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-neutral-9 subHeader">
                    <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                      <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] py-[9px]">
                        <span className="text-base-4 leading-[1.71] text-neutral-1 text-left">{PAYOUT_LABEL.MINIMUM_POINTS_TO_GET_SALARY}</span>
                      </div>
                    </td>
                    <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                      <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] py-[9px]">
                        <span className="text-base-4 leading-[1.71] text-neutral-1 text-left">{salaryDetail.points}</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-neutral-9 subHeader">
                    <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                      <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] py-[9px]">
                        <span className="text-base-4 leading-[1.71] text-neutral-1 text-left">{PAYOUT_LABEL.PRESENT_DAYS}</span>
                      </div>
                    </td>
                    <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                      <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] py-[9px]">
                        <span className="text-base-4 leading-[1.71] text-neutral-1 text-left">{salaryDetail.presentDays}</span>
                      </div>
                    </td>
                  </tr>
                </tbody> :
                <tbody>
                  <tr className="bg-neutral-9 subHeader">
                    <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                      <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] py-[9px]">
                        <span className="text-base-4 leading-[1.71] text-neutral-1 text-left">{PAYOUT_LABEL.MINIMUM_POINTS_TO_GET_SALARY}</span>
                      </div>
                    </td>
                    <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                      <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] py-[9px]">
                        <span className="text-base-4 leading-[1.71] text-neutral-1 text-left">{salaryDetail.points}</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-neutral-9 subHeader">
                    <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                      <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] py-[9px]">
                        <span className="text-base-4 leading-[1.71] text-neutral-1 text-left">{PAYOUT_LABEL.QUARTERLY_INCENTIVE}</span>
                      </div>
                     {PAYOUT_LABEL.AMOUNT}</td>
                    <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                      <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] py-[9px]">
                        <span className="text-base-4 leading-[1.71] text-neutral-1 text-left">{salaryDetail.quarterlyIncentiveAm}</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-neutral-9 subHeader">
                    <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                      <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] py-[9px]">
                        <span className="text-base-4 leading-[1.71] text-neutral-1 text-left">{PAYOUT_LABEL.SPECIAL_INCENTIVE}</span>
                      </div>
                    </td>
                    <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                      <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] py-[9px]">
                        <span className="text-base-4 leading-[1.71] text-neutral-1 text-left">{salaryDetail.specialIncentive}</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-neutral-9 subHeader">
                    <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                      <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] py-[9px]">
                        <span className="text-base-4 leading-[1.71] text-neutral-1 text-left">{PAYOUT_LABEL.YEARLY_BONUS}</span>
                      </div>
                    </td>
                    <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                      <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] py-[9px]">
                        <span className="text-base-4 leading-[1.71] text-neutral-1 text-left">{salaryDetail.yearlyBouns}</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              }
            </table>
          </div>
        </div>
        {
            salaryDetail.monthlyIncentive.length ? 
            <div>
              <div className="mt-3 font-medium text-[18px] text-[#000]">{PAYOUT_LABEL.MONTHLY_INCENTIVE_BREAKDOWN}: </div>
              <div className="w-full grid-ui">
                <div className="overflow-auto">
                  <table className="w-full">
                    {
                      salaryDetail.monthlyIncentive.map(val => (
                        <tbody>
                          <tr className="bg-neutral-9 subHeader">
                            <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                              <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] py-[9px]">
                            <span className="text-base-4 leading-[1.71] text-neutral-1 text-left">{val.points}</span>
                          </div>
                        </td>
                            <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                              <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] py-[9px]">
                            <span className="text-base-4 leading-[1.71] text-neutral-1 text-left">{val.amount}</span>
                          </div>
                        </td>
                          </tr>
                        </tbody>
                      ))
                    }
                  </table>
                </div>
              </div>
            </div> : <div></div>
        }
        
        <div className="mt-3 font-medium text-[18px] text-[#000]">{PAYOUT_LABEL.MONTHLY_SPECIAL_INCENTIVE}: </div>
        <div className="w-full grid-ui">
          <div className="overflow-auto">
            <table className="w-full">
              {
                salaryDetail.monthlySpecialIncentive.map(val => (
                  <tbody>
                    <tr className="bg-neutral-9 subHeader">
                      <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                        <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] py-[9px]">
                            <span className="text-base-4 leading-[1.71] text-neutral-1 text-left">{val.points}</span>
                          </div>
                        </td>
                      <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                        <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] py-[9px]">
                            <span className="text-base-4 leading-[1.71] text-neutral-1 text-left">{val.amount}</span>
                          </div>
                        </td>
                    </tr>
                  </tbody>
                ))
              }
            </table>
          </div>
        </div>
        <div className="mt-3 font-medium text-[18px] text-[#000]">{PAYOUT_LABEL.QUARTERLY_INCENTIVE}: </div>
        <div className="w-full grid-ui">
          <div className="overflow-auto">
            <table className="w-full">
              {
                salaryDetail.quarterlyIncentive.map(val => (
                  <tbody>
                    <tr className="bg-neutral-9 subHeader">
                      <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                        <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] py-[9px]">
                            <span className="text-base-4 leading-[1.71] text-neutral-1 text-left">{val.points}</span>
                          </div>
                        </td>
                      <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                        <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] py-[9px]">
                            <span className="text-base-4 leading-[1.71] text-neutral-1 text-left">{val.amount}</span>
                          </div>
                        </td>
                    </tr>
                  </tbody>
                ))
              }
            </table>
          </div>
        </div>
        <div className="mt-3 font-medium text-[18px] text-[#000]">{PAYOUT_LABEL.ANNUAL_BONUS}: </div>
        <div className="w-full grid-ui">
          <div className="overflow-auto">
            <table className="w-full">
              {
                salaryDetail.anualBouns.map(val => (
                  <tbody>
                    <tr className="bg-neutral-9 subHeader">
                      <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                        <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] py-[9px]">
                            <span className="text-base-4 leading-[1.71] text-neutral-1 text-left">{val.points}</span>
                          </div>
                        </td>
                      <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                        <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] py-[9px]">
                            <span className="text-base-4 leading-[1.71] text-neutral-1 text-left">{val.amount}</span>
                          </div>
                        </td>
                    </tr>
                  </tbody>
                ))
              }
            </table>
          </div>
        </div>
      </div>
    )
}

export default PayoutDetailsComponent
