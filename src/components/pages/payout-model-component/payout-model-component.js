import { NEW_PAYOUT_MODEL } from "../../../services/utilities/payout-model.constant";
import { EnvironmentHelperService } from "../../../services/helper-service/environment-helper.service";
import { useEffect, useState } from "react";

function PayoutModelComponent() {

  const _environmentHelperService = new EnvironmentHelperService();

  const [payoutModel, setPayoutModel] = useState(null);

  const personSalaryInPercent = ['direct-partner', 'direct-partner', 'channel-head'];

  useEffect(() => {
    setPayoutModel(NEW_PAYOUT_MODEL.find(obj => obj.type === _environmentHelperService.getRole()));
    // eslint-disable-next-line
  }, [])

  return (
    <div className="flex flex-col gap-[24px] form-height">
      {
        payoutModel && <div className="m-4">
          <h1 className="text-2xl font-bold">Payout Model For You.</h1>
          {
            !personSalaryInPercent.includes(payoutModel.type) ? 
              null :
              <div>
                <div className="text-base mt-3">
                  <span className="text-xl font-medium">Incentive Percentage on Course Price (Without Tax): </span> {payoutModel.invcentivePercent}
                </div>
              </div>
          }

          <div className="flex flex-wrap gap-6">
            <div>
              {
                !personSalaryInPercent.includes(payoutModel.type) ? 
                  <div>
                    <h1 className="text-xl font-bold mt-4">Monthly Incentive Break Down</h1>
                    <div className="w-full grid-ui">
                      <div className="overflow-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b-[2px] border-neutral-8">
                              <th className="first:sticky first:left-[0px] first:bg-white"> 
                                <div className="min-h-[40px] min-w-[200px] flex flex-row justify-between py-[12px] pl-[12px]">
                                  <div className="border-r-[1px] border-neutral-8 w-full flex flex-row justify-between h-[16px] pr-[12px]">
                                    <div className="flex flex-row gap-[12px]">
                                      <span className="text-xs text-neutral-2 font-medium">Points</span>
                                    </div>
                                  </div>
                                </div>
                              </th>
                              <th className="first:sticky first:left-[0px] first:bg-white"> 
                                <div className="min-h-[40px] min-w-[200px] flex flex-row justify-between py-[12px] pl-[12px]">
                                  <div className="border-r-[1px] border-neutral-8 w-full flex flex-row justify-between h-[16px] pr-[12px]">
                                    <div className="flex flex-row gap-[12px]">
                                      <span className="text-xs text-neutral-2 font-medium">Amount</span>
                                    </div>
                                  </div>
                                </div>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                              payoutModel.mothlyIncentive.map((payout, index) => (
                                <tr className="bg-neutral-9 subHeader" key={'sales-mans-report-' + index}>
                                  <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                                    <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] text-neutral-1 items-center">
                                      <span className="text-base-4 leading-[1.71] text-left">{payout.points}</span>
                                    </div>
                                  </td>
                                  <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                                    <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] text-neutral-1 items-center">
                                      <span className="text-base-4 leading-[1.71] text-left">{payout.amount}</span>
                                    </div>
                                  </td>
                                </tr>
                              ))
                            }
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div> :
                  <div></div>
              }
              <div>
                <h1 className="text-xl font-bold mt-4">Monthly Special Incentive</h1>
                <div className="w-full grid-ui">
                  <div className="overflow-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-[2px] border-neutral-8">
                          <th className="first:sticky first:left-[0px] first:bg-white"> 
                            <div className="min-h-[40px] min-w-[200px] flex flex-row justify-between py-[12px] pl-[12px]">
                              <div className="border-r-[1px] border-neutral-8 w-full flex flex-row justify-between h-[16px] pr-[12px]">
                                <div className="flex flex-row gap-[12px]">
                                  <span className="text-xs text-neutral-2 font-medium">Points</span>
                                </div>
                              </div>
                            </div>
                          </th>
                          <th className="first:sticky first:left-[0px] first:bg-white"> 
                            <div className="min-h-[40px] min-w-[200px] flex flex-row justify-between py-[12px] pl-[12px]">
                              <div className="border-r-[1px] border-neutral-8 w-full flex flex-row justify-between h-[16px] pr-[12px]">
                                <div className="flex flex-row gap-[12px]">
                                  <span className="text-xs text-neutral-2 font-medium">Amount</span>
                                </div>
                              </div>
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          payoutModel.mothlySpecialIncentive.map((payout, index) => (
                            <tr className="bg-neutral-9 subHeader" key={'sales-mans-report-' + index}>
                              <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                                <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] text-neutral-1 items-center">
                                  <span className="text-base-4 leading-[1.71] text-left">{payout.points}</span>
                                </div>
                              </td>
                              <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                                <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] text-neutral-1 items-center">
                                  <span className="text-base-4 leading-[1.71] text-left">{payout.amount}</span>
                                </div>
                              </td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <h1 className="text-xl font-bold mt-4">Quarterly Incentive</h1>
                <div className="w-full grid-ui">
                  <div className="overflow-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-[2px] border-neutral-8">
                          <th className="first:sticky first:left-[0px] first:bg-white"> 
                            <div className="min-h-[40px] min-w-[200px] flex flex-row justify-between py-[12px] pl-[12px]">
                              <div className="border-r-[1px] border-neutral-8 w-full flex flex-row justify-between h-[16px] pr-[12px]">
                                <div className="flex flex-row gap-[12px]">
                                  <span className="text-xs text-neutral-2 font-medium">Points</span>
                                </div>
                              </div>
                            </div>
                          </th>
                          <th className="first:sticky first:left-[0px] first:bg-white"> 
                            <div className="min-h-[40px] min-w-[200px] flex flex-row justify-between py-[12px] pl-[12px]">
                              <div className="border-r-[1px] border-neutral-8 w-full flex flex-row justify-between h-[16px] pr-[12px]">
                                <div className="flex flex-row gap-[12px]">
                                  <span className="text-xs text-neutral-2 font-medium">Amount</span>
                                </div>
                              </div>
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          payoutModel.quarterlyIncentive.map((payout, index) => (
                            <tr className="bg-neutral-9 subHeader" key={'sales-mans-report-' + index}>
                              <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                                <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] text-neutral-1 items-center">
                                  <span className="text-base-4 leading-[1.71] text-left">{payout.points}</span>
                                </div>
                              </td>
                              <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                                <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] text-neutral-1 items-center">
                                  <span className="text-base-4 leading-[1.71] text-left">{payout.amount}</span>
                                </div>
                              </td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold mt-4">Annual Bonus</h1>
                <div className="w-full grid-ui">
                  <div className="overflow-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-[2px] border-neutral-8">
                          <th className="first:sticky first:left-[0px] first:bg-white"> 
                            <div className="min-h-[40px] min-w-[200px] flex flex-row justify-between py-[12px] pl-[12px]">
                              <div className="border-r-[1px] border-neutral-8 w-full flex flex-row justify-between h-[16px] pr-[12px]">
                                <div className="flex flex-row gap-[12px]">
                                  <span className="text-xs text-neutral-2 font-medium">Points</span>
                                </div>
                              </div>
                            </div>
                          </th>
                          <th className="first:sticky first:left-[0px] first:bg-white"> 
                            <div className="min-h-[40px] min-w-[200px] flex flex-row justify-between py-[12px] pl-[12px]">
                              <div className="border-r-[1px] border-neutral-8 w-full flex flex-row justify-between h-[16px] pr-[12px]">
                                <div className="flex flex-row gap-[12px]">
                                  <span className="text-xs text-neutral-2 font-medium">Amount</span>
                                </div>
                              </div>
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-neutral-9 subHeader">
                          <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                            <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] text-neutral-1 items-center">
                              <span className="text-base-4 leading-[1.71] text-left">{payoutModel.annualBonus.points}</span>
                            </div>
                          </td>
                          <td className="first:bg-neutral-9 first:sticky first:left-[0px]">
                            <div className="h-[40px] min-w-[200px] flex flex-row px-[12px] text-neutral-1 items-center">
                              <span className="text-base-4 leading-[1.71] text-left">{payoutModel.annualBonus.amount}</span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default PayoutModelComponent;
