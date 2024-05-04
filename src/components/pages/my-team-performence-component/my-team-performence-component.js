import React, { useState } from "react";
import { MY_TEAM } from "../../../services/utilities/payout-model.constant";

function MyTeamPerformenceComponent() {
  const [team, setTeam] = useState(MY_TEAM);

  function toggleUser(index) {
    setTeam(prevTeam => {
      const updatedTeam = prevTeam.map((item, idx) => {
        if (idx === index) {
          item.myTeam.forEach(item_2 => item_2.toggle = false);
          return { ...item, toggle: !item.toggle }; // Toggle the toggle property
        }
        return item;
      });
      return updatedTeam;
    });
  }

  function toggleInnerUser(ind_1, ind_2) {
    setTeam(prevTeam => {
      const updatedTeam = prevTeam.map((item, idx) => {
        if (idx === ind_1) {
          const updatedMyTeam = item.myTeam.map((item_2, in2) => {
            if (in2 === ind_2) {
              return { ...item_2, toggle: !item_2.toggle };
            }
            return item_2;
          });
          return { ...item, myTeam: updatedMyTeam };
        }
        return item;
      });
      return updatedTeam;
    });
  }

  return (
    <div>
      {team.map((level_1, idx_1) => (
        <div>
          <div onClick={() => toggleUser(idx_1)}>{level_1.name}</div>
          <div>{level_1.points}</div>
          {level_1.toggle &&
            level_1.myTeam.map((level_2, idx_2) => (
              <div>
                <div onClick={() => toggleInnerUser(idx_1, idx_2)}>{level_2.name}</div>
                <div>{level_2.points}</div>
                {level_2.toggle &&
                level_2.myTeam.map((level_3, idx_3) => (
                  <div>
                    <div>{level_3.name}</div>
                    <div>{level_3.points}</div>
                  </div>
                ))}
                <br></br>
                <br></br>
              </div>
            ))}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
      ))}
    </div>
  );
}

export default MyTeamPerformenceComponent;
