export const PAYOUT_MODEL = [
  {
    salesType: 'Direct Sales Team',
    salaryTypeList: [
      {
        category: 'Zonal Head',
        salary: '40000',
        deduction: '10000',
        incentive: '10000.8',
        total: '60000.8',
        sharePercent: '',
        id: 'direct-zonal-head'
      },
      {
        category: 'Regional Head',
        salary: '32000',
        deduction: '8000',
        incentive: '15999.6',
        total: '55999.6',
        sharePercent: '',
        id: 'direct-regional-head'
      },
      {
        category: 'Sales Head',
        salary: '20000',
        deduction: '5000',
        incentive: '2333.28',
        total: '27333.28',
        sharePercent: '',
        id: 'direct-sales-head'
      },
      {
        category: 'Promoter',
        salary: '12000',
        deduction: '3000',
        incentive: '3000',
        total: '18000',
        sharePercent: '',
        id: 'direct-promoter'
      }
    ]
  },
  {
    salesType: 'Direct Partner Sales Team',
    salaryTypeList: [
      {
        category: 'Zonal Head',
        salary: '40000',
        deduction: '10000',
        incentive: '10000.8',
        total: '60000.8',
        sharePercent: '',
        id: 'direct-partner-zonal-head'
      },
      {
        category: 'Regional Head',
        salary: '32000',
        deduction: '8000',
        incentive: '15999.6',
        total: '55999.6',
        sharePercent: '',
        id: 'direct-partner-reional-head'
      },
      {
        category: 'Partner Development Head',
        salary: '20000',
        deduction: '5000',
        incentive: '2333.28',
        total: '27333.28',
        sharePercent: '',
        id: 'direct-partner-development-head'
      },
      {
        category: 'Direct Partner',
        salary: '',
        deduction: '',
        incentive: '',
        total: '',
        sharePercent: '15%',
        id: 'direct-partner'
      }
    ]
  },
  {
    salesType: 'Channel Partner Sales Team',
    salaryTypeList: [
      {
        category: 'Zonal Head',
        salary: '40000',
        deduction: '10000',
        incentive: '10000.8',
        total: '60000.8',
        sharePercent: '',
        id: 'channel-partner-zonal-head'
      },
      {
        category: 'Regional Head',
        salary: '32000',
        deduction: '8000',
        incentive: '15999.6',
        total: '55999.6',
        sharePercent: '',
        id: 'channel-partner-regional-head'
      },
      {
        category: 'Chennal Head',
        salary: '',
        deduction: '',
        incentive: '',
        total: '',
        sharePercent: '5%',
        id: 'channel-partner-head'
      },
      {
        category: 'Channel Partner',
        salary: '',
        deduction: '',
        incentive: '',
        total: '',
        sharePercent: '15%',
        id: 'channel-partner'
      }
    ]
  }
]

export const SALARY_BREAKDOWN = [
  {
    id: 'direct-promoter',
    presentDays: 30,
    points: 400,
    incentivePerPoint: 7.5,
    grossSalary: 15000,
    incentiveAmount: 3000,
    netSalaryWith: 15000,
    netSalaryWithout: 12000,
    pointsValue: 45,
    monthlyIncentive: [
      {
        points: '1 to 150',
        amount: '2.5'
      },
      {
        points: '151 to 300',
        amount: '5'
      },
      {
        points: '301 to 450',
        amount: '7.5'
      },
      {
        points: '451 to 550',
        amount: '10'
      },
      {
        points: '551 to 650',
        amount: '12.5'
      },
      {
        points: '651 to 700',
        amount: '15'
      },
      {
        points: '701 to 799',
        amount: '20'
      },
      {
        points: '800 & above',
        amount: '25'
      }
    ],
    monthlySpecialIncentive: [
      {
        points: '800 &Above',
        amount: '3.75'
      }
    ],
    quarterlyIncentive: [
      {
        points: '2500',
        amount: '10000'
      }
    ],
    anualBouns: [
      {
        points: '1 Point',
        amount: '15'
      }
    ]
  },
  {
    id: 'direct-sales-head',
    presentDays: 30,
    points: 8000,
    incentivePerPoint: 0.29166,
    grossSalary: 25000,
    incentiveAmount: 2333.28,
    netSalaryWith: 22333,
    netSalaryWithout: 20000,
    pointsValue: 3.4166475,
    monthlyIncentive: [
      {
        points: '1 to 3000',
        amount: '0.09722'
      },
      {
        points: '3001 to 6000',
        amount: '0.19444'
      },
      {
        points: '6001 to 9000',
        amount: '0.29166'
      },
      {
        points: '9001 to 11000',
        amount: '0.38888'
      },
      {
        points: '11001 to 13000',
        amount: '0.4861'
      },
      {
        points: '13001 to 14000',
        amount: '0.58332'
      },
      {
        points: '14001 to 15999',
        amount: '0.77776'
      },
      {
        points: '16000 & above',
        amount: '0.9722'
      }
    ],
    monthlySpecialIncentive: [
      {
        points: '6,000 &above',
        amount: '1.875'
      }
    ],
    quarterlyIncentive: [
      {
        points: '50000',
        amount: '15000'
      }
    ],
    anualBouns: [
      {
        points: '1 Point',
        amount: '0.1125'
      }
    ]
  },
  {
    id: 'direct-regional-head',
    presentDays: 30,
    points: 80000,
    incentivePerPoint: 0.199995,
    grossSalary: 40000,
    incentiveAmount: 15999.6,
    netSalaryWith: 47999,
    netSalaryWithout: 32000,
    pointsValue: 0.69999375,
    monthlyIncentive: [
      {
        points: '1 to 30,000',
        amount: '0.066665'
      },
      {
        points: '30,0001 to 60,000',
        amount: '0.13333'
      },
      {
        points: '60,001 to 90,000',
        amount: '0.199995'
      },
      {
        points: '90,001 to 1,10,000',
        amount: '0.26666'
      },
      {
        points: '1,10,001 to 1,30,000',
        amount: '0.333325'
      },
      {
        points: '1,30,001 to 1,40,000',
        amount: '0.39999'
      },
      {
        points: '1,40,001 to 1,59,999',
        amount: '0.53332'
      },
      {
        points: '1,60,000 & above',
        amount: '0.66665'
      }
    ],
    monthlySpecialIncentive: [
      {
        points: '1,60,000 & above',
        amount: '0.9375'
      }
    ],
    quarterlyIncentive: [
      {
        points: '500000',
        amount: '20000'
      }
    ],
    anualBouns: [
      {
        points: '1 ponit',
        amount: '0.015'
      }
    ]
  },
  {
    id: 'direct-zonal-head',
    presentDays: 30,
    points: 400000,
    incentivePerPoint: 0.025002,
    grossSalary: 50000,
    incentiveAmount: 10000.8,
    netSalaryWith: 50001,
    netSalaryWithout: 40000,
    pointsValue: 0.1500015,
    monthlyIncentive: [
      {
        points: '1 to 1 .5 lac',
        amount: '0.008334'
      },
      {
        points: '1.5lacto 3lac',
        amount: '0.016668'
      },
      {
        points: '3 lac to 4.5 lac',
        amount: '0.025002'
      },
      {
        points: '4.5 lac 5.5 lac',
        amount: '0.033336'
      },
      {
        points: '5.5 lac to 6.5 lac',
        amount: '0.04167'
      },
      {
        points: '6.5 lac 7 lac',
        amount: '0.50004'
      },
      {
        points: '7 lac to 7.99 lac',
        amount: '0.066672'
      },
      {
        points: '8 lac & above',
        amount: '0.08334'
      }
    ],
    monthlySpecialIncentive: [
      {
        points: '8,00,000 & Above',
        amount: '0.46875'
      }
    ],
    quarterlyIncentive: [
      {
        points: '2500000',
        amount: '25000'
      }
    ],
    anualBouns: [
      {
        points: '1 Point',
        amount: '0.00375'
      }
    ]
  },
  {
    id: 'direct-partner',
    presentDays: 0,
    points: 250,
    incentivePerPoint: 0,
    grossSalary: 0,
    incentiveAmount: 0,
    netSalaryWith: 0,
    netSalaryWithout: 0,
    pointsValue: 0,
    quarterlyIncentiveAm: 5,
    specialIncentive: 9.47084025,
    yearlyBouns: 2.5,
    monthlyIncentive: [],
    monthlySpecialIncentive: [
      {
        points: '80 &Above',
        amount: '3.79%'
      }
    ],
    quarterlyIncentive: [
      {
        points: '250',
        amount: '2%'
      }
    ],
    anualBouns: [
      {
        points: '1 Point',
        amount: '1%'
      }
    ]
  },
  {
    id: 'direct-partner-development-head',
    presentDays: 30,
    points: 8000,
    incentivePerPoint: 0.29166,
    grossSalary: 25000,
    incentiveAmount: 2333.28,
    netSalaryWith: 22333,
    netSalaryWithout: 20000,
    pointsValue: 3.4166475,
    monthlyIncentive: [
      {
        points: '1 to 3000',
        amount: '0.09722'
      },
      {
        points: '3001 to 6000',
        amount: '0.19444'
      },
      {
        points: '6001 to 9000',
        amount: '0.29166'
      },
      {
        points: '9001 to 11000',
        amount: '0.38888'
      },
      {
        points: '11001 to 13000',
        amount: '0.4861'
      },
      {
        points: '13001 to 14000',
        amount: '0.58332'
      },
      {
        points: '14001 to 15999',
        amount: '0.77776'
      },
      {
        points: '16000 & above',
        amount: '0.9722'
      }
    ],
    monthlySpecialIncentive: [
      {
        points: '6,000 &above',
        amount: '1.875'
      }
    ],
    quarterlyIncentive: [
      {
        points: '50000',
        amount: '15000'
      }
    ],
    anualBouns: [
      {
        points: '1 Point',
        amount: '0.1125'
      }
    ]
  },
  {
    id: 'direct-partner-reional-head',
    presentDays: 30,
    points: 80000,
    incentivePerPoint: 0.199995,
    grossSalary: 40000,
    incentiveAmount: 15999.6,
    netSalaryWith: 47999,
    netSalaryWithout: 32000,
    pointsValue: 0.69999375,
    monthlyIncentive: [
      {
        points: '1 to 30,000',
        amount: '0.066665'
      },
      {
        points: '30,0001 to 60,000',
        amount: '0.13333'
      },
      {
        points: '60,001 to 90,000',
        amount: '0.199995'
      },
      {
        points: '90,001 to 1,10,000',
        amount: '0.26666'
      },
      {
        points: '1,10,001 to 1,30,000',
        amount: '0.333325'
      },
      {
        points: '1,30,001 to 1,40,000',
        amount: '0.39999'
      },
      {
        points: '1,40,001 to 1,59,999',
        amount: '0.53332'
      },
      {
        points: '1,60,000 & above',
        amount: '0.66665'
      }
    ],
    monthlySpecialIncentive: [
      {
        points: '1,60,000 & above',
        amount: '0.9375'
      }
    ],
    quarterlyIncentive: [
      {
        points: '500000',
        amount: '20000'
      }
    ],
    anualBouns: [
      {
        points: '1 ponit',
        amount: '0.015'
      }
    ]
  },
  {
    id: 'direct-partner-zonal-head',
    presentDays: 30,
    points: 400000,
    incentivePerPoint: 0.025002,
    grossSalary: 50000,
    incentiveAmount: 10000.8,
    netSalaryWith: 50001,
    netSalaryWithout: 40000,
    pointsValue: 0.1500015,
    monthlyIncentive: [
      {
        points: '1 to 1 .5 lac',
        amount: '0.008334'
      },
      {
        points: '1.5lacto 3lac',
        amount: '0.016668'
      },
      {
        points: '3 lac to 4.5 lac',
        amount: '0.025002'
      },
      {
        points: '4.5 lac 5.5 lac',
        amount: '0.033336'
      },
      {
        points: '5.5 lac to 6.5 lac',
        amount: '0.04167'
      },
      {
        points: '6.5 lac 7 lac',
        amount: '0.50004'
      },
      {
        points: '7 lac to 7.99 lac',
        amount: '0.066672'
      },
      {
        points: '8 lac & above',
        amount: '0.08334'
      }
    ],
    monthlySpecialIncentive: [
      {
        points: '8,00,000 & Above',
        amount: '0.46875'
      }
    ],
    quarterlyIncentive: [
      {
        points: '2500000',
        amount: '25000'
      }
    ],
    anualBouns: [
      {
        points: '1 Point',
        amount: '0.00375'
      }
    ]
  },
  {
    id: 'channel-partner',
    presentDays: 0,
    points: 250,
    incentivePerPoint: 0,
    grossSalary: 0,
    incentiveAmount: 0,
    netSalaryWith: 0,
    netSalaryWithout: 0,
    pointsValue: 0,
    quarterlyIncentiveAm: 2.5,
    specialIncentive: 6.07500125,
    yearlyBouns: 1.25,
    monthlyIncentive: [],
    monthlySpecialIncentive: [
      {
        points: '80 &Above',
        amount: '2.43%'
      }
    ],
    quarterlyIncentive: [
      {
        points: '250',
        amount: '1%'
      }
    ],
    anualBouns: [
      {
        points: '1 Point',
        amount: '1%'
      }
    ]
  },
  {
    id: 'channel-partner-head',
    presentDays: 0,
    points: 250,
    incentivePerPoint: 0,
    grossSalary: 0,
    incentiveAmount: 0,
    netSalaryWith: 0,
    netSalaryWithout: 0,
    pointsValue: 0,
    quarterlyIncentiveAm: 1.25,
    specialIncentive: 4.725000125,
    yearlyBouns: 0.625,
    monthlyIncentive: [],
    monthlySpecialIncentive: [
      {
        points: '16,000 &above',
        amount: '1.89%'
      }
    ],
    quarterlyIncentive: [
      {
        points: '50000 & above',
        amount: '0.50%'
      }
    ],
    anualBouns: [
      {
        points: '1 Point',
        amount: '0.25%'
      }
    ]
  },
  {
    id: 'channel-partner-regional-head',
    presentDays: 30,
    points: 80000,
    incentivePerPoint: 0.199995,
    grossSalary: 40000,
    incentiveAmount: 15999.6,
    netSalaryWith: 47999,
    netSalaryWithout: 32000,
    pointsValue: 0.69999375,
    monthlyIncentive: [
      {
        points: '1 to 30,000',
        amount: '0.066665'
      },
      {
        points: '30,0001 to 60,000',
        amount: '0.13333'
      },
      {
        points: '60,001 to 90,000',
        amount: '0.199995'
      },
      {
        points: '90,001 to 1,10,000',
        amount: '0.26666'
      },
      {
        points: '1,10,001 to 1,30,000',
        amount: '0.333325'
      },
      {
        points: '1,30,001 to 1,40,000',
        amount: '0.39999'
      },
      {
        points: '1,40,001 to 1,59,999',
        amount: '0.53332'
      },
      {
        points: '1,60,000 & above',
        amount: '0.66665'
      }
    ],
    monthlySpecialIncentive: [
      {
        points: '1,60,000 & above',
        amount: '0.9375'
      }
    ],
    quarterlyIncentive: [
      {
        points: '500000',
        amount: '20000'
      }
    ],
    anualBouns: [
      {
        points: '1 ponit',
        amount: '0.015'
      }
    ]
  },
  {
    id: 'channel-partner-zonal-head',
    presentDays: 30,
    points: 400000,
    incentivePerPoint: 0.025002,
    grossSalary: 50000,
    incentiveAmount: 10000.8,
    netSalaryWith: 50001,
    netSalaryWithout: 40000,
    pointsValue: 0.1500015,
    monthlyIncentive: [
      {
        points: '1 to 1 .5 lac',
        amount: '0.008334'
      },
      {
        points: '1.5lacto 3lac',
        amount: '0.016668'
      },
      {
        points: '3 lac to 4.5 lac',
        amount: '0.025002'
      },
      {
        points: '4.5 lac 5.5 lac',
        amount: '0.033336'
      },
      {
        points: '5.5 lac to 6.5 lac',
        amount: '0.04167'
      },
      {
        points: '6.5 lac 7 lac',
        amount: '0.50004'
      },
      {
        points: '7 lac to 7.99 lac',
        amount: '0.066672'
      },
      {
        points: '8 lac & above',
        amount: '0.08334'
      }
    ],
    monthlySpecialIncentive: [
      {
        points: '8,00,000 & Above',
        amount: '0.46875'
      }
    ],
    quarterlyIncentive: [
      {
        points: '2500000',
        amount: '25000'
      }
    ],
    anualBouns: [
      {
        points: '1 Point',
        amount: '0.00375'
      }
    ]
  },
]

export const PAYOUT_LABEL = {
  SALARY: 'Salary',
  DEDUCTION: 'Deduction',
  INCENTIVE: 'Incentive',
  TOTAL: 'Total',
  INCENTIVE_PERCENT: 'Incentive Percentage on Course Price (Without Tax)',

  PRESENT_DAYS: 'Present Days',
  POINTS: 'Points',
  INCENTIVE_FOR_POINTS: 'Incentive for point',
  GROSS_SALARY: 'Gross Salary',
  INCENTIVE_AMOUNT: 'incentive amount',
  NET_SALARY_WITH_INCENTIVE: 'Net Salary (With Incentive)',
  NET_SALARY_WITHOUT_INCENTIVE: 'Net Salary (Without Incentive)',
  POINTS_VALUE: 'Points Value',
  MONTHLY_INCENTIVE_BREAKDOWN: 'Monthly Incentive Brake Down',
  SPECIAL_INCENTIVE: 'Special Incentive',
  YEARLY_BONUS: 'Yearly Bonus',
  MONTHLY_SPECIAL_INCENTIVE: 'Monthly Special Incentive',
  QUARTERLY_INCENTIVE: 'Quarterly Incentive',
  AMOUNT: 'Amount',
  ANNUAL_BONUS: 'Annual Bonus',
  CALCULATOR: 'Calculator',
  MINIMUM_POINTS_TO_GET_SALARY: 'Minimum Points to get salary & incentive',

}




export const MY_TEAM = [
  {
    id: 'off334567-nmhb345-579iddDD',
    points: 5000,
    nodes: 3,
    name: 'Kishore',
    myTeam: [
      {
        id: 'off334567-nmhb345-579iddDD',
        points: 5000,
        nodes: 3,
        name: 'Joe',
        myTeam: [
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'andresss',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'Alen',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'alex',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'Peter',
          }
        ],
      },
      {
        id: 'off334567-nmhb345-579iddDD',
        points: 5000,
        nodes: 3,
        name: 'Harshal',
        myTeam: [
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'greg',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'mcCullum',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'Starc',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'mitchell',
          }
        ],
      },
      {
        id: 'off334567-nmhb345-579iddDD',
        points: 5000,
        nodes: 3,
        name: 'Butler',
        myTeam: [
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'Archer',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'Smith',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'Convey',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'Watson',
          }
        ],
      },
      {
        id: 'off334567-nmhb345-579iddDD',
        points: 5000,
        nodes: 3,
        name: 'Hermoinee',
        myTeam: [
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'Ron',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'Tom',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'Holand',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'Jery',
          }
        ],
      }
    ]
  },
  {
    id: 'off334567-nmhb345-579iddDD',
    points: 5000,
    nodes: 3,
    name: 'John',
    myTeam: [
      {
        id: 'off334567-nmhb345-579iddDD',
        points: 5000,
        nodes: 3,
        name: 'Pat',
        myTeam: [
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'Cummins',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'Maxwell',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'jurel',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'gayl',
          }
        ],
      },
      {
        id: 'off334567-nmhb345-579iddDD',
        points: 5000,
        nodes: 3,
        name: 'pollard',
        myTeam: [
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'bravo',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'russel',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'shimran',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'headmeyer',
          }
        ],
      },
      {
        id: 'off334567-nmhb345-579iddDD',
        points: 5000,
        nodes: 3,
        name: 'nicolus',
        myTeam: [
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'pooran',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'json',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'holder',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'miller',
          }
        ],
      },
      {
        id: 'off334567-nmhb345-579iddDD',
        points: 5000,
        nodes: 3,
        name: 'de Cock',
        myTeam: [
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'hasim',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'amla',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'dummny',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'duplesis',
          }
        ],
      }
    ]
  },
  {
    id: 'off334567-nmhb345-579iddDD',
    points: 5000,
    nodes: 3,
    name: 'ab de',
    myTeam: [
      {
        id: 'off334567-nmhb345-579iddDD',
        points: 5000,
        nodes: 3,
        name: 'albie',
        myTeam: [
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'moren',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'morkel',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'dale',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'styn',
          }
        ],
      },
      {
        id: 'off334567-nmhb345-579iddDD',
        points: 5000,
        nodes: 3,
        name: 'imran',
        myTeam: [
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'thahir',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'henrich',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'klassen',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'david',
          }
        ],
      },
      {
        id: 'off334567-nmhb345-579iddDD',
        points: 5000,
        nodes: 3,
        name: 'johndy',
        myTeam: [
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'rhodes',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'shane',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'watson',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'arron',
          }
        ],
      },
      {
        id: 'off334567-nmhb345-579iddDD',
        points: 5000,
        nodes: 3,
        name: 'finch',
        myTeam: [
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'jhonson',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'adam',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'zampa',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'smith',
          }
        ],
      }
    ]
  },
  {
    id: 'off334567-nmhb345-579iddDD',
    points: 5000,
    nodes: 3,
    name: 'ceena',
    myTeam: [
      {
        id: 'off334567-nmhb345-579iddDD',
        points: 5000,
        nodes: 3,
        name: 'roman',
        myTeam: [
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'reings',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'rock',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'hhh',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'under taker',
          }
        ],
      },
      {
        id: 'off334567-nmhb345-579iddDD',
        points: 5000,
        nodes: 3,
        name: 'kane',
        myTeam: [
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'williomson',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'santner',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'rachin',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'ravinhra',
          }
        ],
      },
      {
        id: 'off334567-nmhb345-579iddDD',
        points: 5000,
        nodes: 3,
        name: 'trent',
        myTeam: [
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'boult',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'richard',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'gleeson',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'travis head',
          }
        ],
      },
      {
        id: 'off334567-nmhb345-579iddDD',
        points: 5000,
        nodes: 3,
        name: 'david warner',
        myTeam: [
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'jos',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'buttler',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'json',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'roy',
          }
        ],
      }
    ]
  },
  {
    id: 'off334567-nmhb345-579iddDD',
    points: 5000,
    nodes: 3,
    name: 'joe',
    myTeam: [
      {
        id: 'off334567-nmhb345-579iddDD',
        points: 5000,
        nodes: 3,
        name: 'root',
        myTeam: [
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'jofra',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'sam',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'curren',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'Hazle wood',
          }
        ],
      },
      {
        id: 'off334567-nmhb345-579iddDD',
        points: 5000,
        nodes: 3,
        name: 'Aron',
        myTeam: [
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'Finch',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'Parker',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'Mathew',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'alber',
          }
        ],
      },
      {
        id: 'off334567-nmhb345-579iddDD',
        points: 5000,
        nodes: 3,
        name: 'jerwin',
        myTeam: [
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'ermin',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'ragnor',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'steve',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'ragers',
          }
        ],
      },
      {
        id: 'off334567-nmhb345-579iddDD',
        points: 5000,
        nodes: 3,
        name: 'tony',
        myTeam: [
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'starck',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'mark',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'ruffalow',
          },
          {
            id: 'off334567-nmhb345-579iddDD',
            points: 5000,
            nodes: 3,
            name: 'musk',
          }
        ],
      }
    ]
  }
]


export const NEW_PAYOUT_MODEL = [
  {
    type: 'promoter',
    salary: '12000',
    dedaction: '3000',
    incentive: 'N/A',
    total: '15000',
    mothlyIncentive: [
      {points: '1 to 150', amount: '2.5'},
      {points: '151 to 300', amount: '5'},
      {points: '301 to 450', amount: '7.5'},
      {points: '451 to 550', amount: '10'},
      {points: '551 to 650', amount: '12.5'},
      {points: '651 to 700', amount: '15'},
      {points: '701 to 799', amount: '20'},
      {points: '800 & above', amount: '25'}
    ],
    mothlySpecialIncentive: [
      {points: 'Below 400', amount: 'No incentive'},
      {points: '400 to 500', amount: '0.46875'},
      {points: '501 to 650', amount: '0.9375'},
      {points: '651 to 799', amount: '1.875'},
      {points: '800 & Above', amount: '3.75'}
    ],
    quarterlyIncentive: [
      {points: 'Below 1200', amount: 'No incentive'},
      {points: '1,200 to 1,500', amount: '0.5'},
      {points: '1,501 to 2,000', amount: '1'},
      {points: '2,001 to 2,499', amount: '2'},
      {points: '2500 & Above', amount: '4'}
    ],
    annualBonus: {
      points: 1,
      amount: '1.5'
    }
  },
  {
    type: 'sales-head',
    salary: '20000',
    dedaction: '5000',
    incentive: 'N/A',
    total: '25000',
    mothlyIncentive: [
      {points: '1 to 3000', amount: '0.175'},
      {points: '3001 to 6000', amount: '0.35'},
      {points: '6001 to 9000', amount: '0.525'},
      {points: '9001 to 11000', amount: '0.7'},
      {points: '11001 to 13000', amount: '0.875'},
      {points: '13001 to 14000', amount: '1.05'},
      {points: '14001 to 15999', amount: '1.4'},
      {points: '16000 & above', amount: '1.75'}
    ],
    mothlySpecialIncentive: [
      {points: 'Below 10,000', amount: 'No incentive'},
      {points: '10,000 to 15,000', amount: '0.234375'},
      {points: '15,001 to 17,500', amount: '0.46875'},
      {points: '17,501 to 19,999', amount: '0.9375'},
      {points: '20,000 & Above', amount: '1.875'}
    ],
    quarterlyIncentive: [
      {points: 'Below 30,000', amount: 'No incentive'},
      {points: '30,000 to 45,000', amount: '0.03'},
      {points: '45,001 to 52,500', amount: '0.06'},
      {points: '52,501 to 62,499', amount: '0.12'},
      {points: '62,500 & Above', amount: '0.24'}
    ],
    annualBonus: {
      points: 1,
      amount: '0.1125'
    }
  },
  {
    type: 'pdm',
    salary: '20000',
    dedaction: '5000',
    incentive: 'N/A',
    total: '25000',
    mothlyIncentive: [
      {points: '1 to 3000', amount: '0.175'},
      {points: '3001 to 6000', amount: '0.35'},
      {points: '6001 to 9000', amount: '0.525'},
      {points: '9001 to 11000', amount: '0.7'},
      {points: '11001 to 13000', amount: '0.875'},
      {points: '13001 to 14000', amount: '1.05'},
      {points: '14001 to 15999', amount: '1.4'},
      {points: '16000 & above', amount: '1.75'}
    ],
    mothlySpecialIncentive: [
      {points: 'Below 10,000', amount: 'No incentive'},
      {points: '10,000 to 15,000', amount: '0.234375'},
      {points: '15,001 to 17,500', amount: '0.46875'},
      {points: '17,501 to 19,999', amount: '0.9375'},
      {points: '20,000 & Above', amount: '1.875'}
    ],
    quarterlyIncentive: [
      {points: 'Below 30,000', amount: 'No incentive'},
      {points: '30,000 to 45,000', amount: '0.03'},
      {points: '45,001 to 52,500', amount: '0.06'},
      {points: '52,501 to 62,499', amount: '0.12'},
      {points: '62,500 & Above', amount: '0.24'}
    ],
    annualBonus: {
      points: 1,
      amount: '0.1125'
    }
  },
  {
    type: 'regional-head',
    salary: '32000',
    dedaction: '8000',
    incentive: 'N/A',
    total: '40000',
    mothlyIncentive: [
      {points: '1 to 30,000', amount: '0.02'},
      {points: '30,001 to 60,000', amount: '0.04'},
      {points: '60,001 to 90,000', amount: '0.06'},
      {points: '90,001 to 1,10,000', amount: '0.08'},
      {points: '1,10,001 to 1,30,000', amount: '0.1'},
      {points: '1,30,001 to 1,40,000', amount: '0.12'},
      {points: '1,40,001 to 1,59,999', amount: '0.16'},
      {points: '1,60,000 & above', amount: '0.2'}
    ],
    mothlySpecialIncentive: [
      {points: 'Below 1,00,000', amount: 'No incentive'},
      {points: '1 lac to 1.25 lac', amount: '0.1171875'},
      {points: '1.25 lac to 1.5 lac', amount: '0.234375'},
      {points: '1.5 lac to 1.99 lac', amount: '0.46875'},
      {points: '2 lac & Above', amount: '0.9375'}
    ],
    quarterlyIncentive: [
      {points: 'Below 3 lac', amount: 'No incentive'},
      {points: '3,00,000 to 4,50,000', amount: '0.004'},
      {points: '4,50,001 to 5,20,000', amount: '0.008'},
      {points: '5,20,001 to 6,24,999', amount: '0.016'},
      {points: '6,25,000 & Above', amount: '0.032'}
    ],
    annualBonus: {
      points: 1,
      amount: '0.015'
    }
  },
  {
    type: 'zonal-head',
    salary: '40000',
    dedaction: '10000',
    incentive: 'N/A',
    total: '50000',
    mothlyIncentive: [
      {points: '1 to 1 .5 lac', amount: '0.005'},
      {points: '1.5lacto 3lac', amount: '0.01'},
      {points: '3 lac to 4.5 lac', amount: '0.015'},
      {points: '4.5 lac 5.5 lac', amount: '0.02'},
      {points: '5.5 lac to 6.5 lac', amount: '0.025'},
      {points: '6.5 lac 7 lac', amount: '0.03'},
      {points: '7 lac to 7.99 lac', amount: '0.04'},
      {points: '8 lac & above', amount: '0.05'}
    ],
    mothlySpecialIncentive: [
      {points: 'Below 5 Lac', amount: 'No incentive'},
      {points: '5 lac to 6 lac', amount: '0.05859375'},
      {points: '6 lac to 8 lac', amount: '0.1171875'},
      {points: '8 lac to 9.99 lac', amount: '0.234375'},
      {points: '10 lac & Above', amount: '0.46875'}
    ],
    quarterlyIncentive: [
      {points: 'Below 15 lac', amount: 'No incentive'},
      {points: '15 lac to 22.5 lac', amount: '0.001'},
      {points: '22.5 lac to 26 lac', amount: '0.002'},
      {points: '26 lac to 31.25 lac', amount: '0.004'},
      {points: '31.25 lac & Above', amount: '0.008'}
    ],
    annualBonus: {
      points: 1,
      amount: '0.00375'
    }
  },
  {
    type: 'direct-partner',
    invcentivePercent: '15%',
    mothlyIncentive: [],
    mothlySpecialIncentive: [
      {points: 'Below 100', amount: 'No incentive'},
      {points: '100 to 150', amount: '1.184375'},
      {points: '151 to 175', amount: '2.36875'},
      {points: '176 to 199', amount: '4.7375'},
      {points: '200 & Above', amount: '9.475'},
    ],
    quarterlyIncentive: [
      {points: 'Below 300', amount: 'No incentive'},
      {points: '300 to 400', amount: '0.625'},
      {points: '401 to 500', amount: '1.25'},
      {points: '501 to 624', amount: '2.5'},
      {points: '625 & Above', amount: '5'}
    ],
    annualBonus: {
      points: 1,
      amount: '2.5'
    }
  },
  {
    type: 'channel-partner',
    invcentivePercent: '12.5%',
    mothlyIncentive: [],
    mothlySpecialIncentive: [
      {points: 'Below 100', amount: 'No incentive'},
      {points: '100 to 150', amount: '0.759375'},
      {points: '151 to 175', amount: '1.51875'},
      {points: '176 to 199', amount: '3.0375'},
      {points: '200 & Above', amount: '6.075'},
    ],
    quarterlyIncentive: [
      {points: 'Below 300', amount: 'No incentive'},
      {points: '300 to 400', amount: '0.3125'},
      {points: '401 to 500', amount: '0.625'},
      {points: '501 to 624', amount: '1.25'},
      {points: '625 & Above', amount: '2.5'}
    ],
    annualBonus: {
      points: 1,
      amount: '1.25'
    }
  },
  {
    type: 'channel-head',
    invcentivePercent: '5%',
    mothlyIncentive: [],
    mothlySpecialIncentive: [
      {points: 'Below 5000', amount: 'No incentive'},
      {points: '5,000 to 6,000', amount: '0.590625'},
      {points: '6,000 to 7,500', amount: '1.18125'},
      {points: '7,501 to 9,999', amount: '2.3625'},
      {points: '10,000 & Above', amount: '4.725'},
    ],
    quarterlyIncentive: [
      {points: 'Below 7,500', amount: 'No incentive'},
      {points: '7,500 to 15,000', amount: '0.15625'},
      {points: '15,001 to 22,500', amount: '0.3125'},
      {points: '22,501 to 31,249', amount: '0.625'},
      {points: '3,1250 & Above', amount: '1.25'}
    ],
    annualBonus: {
      points: 1,
      amount: '0.625'
    }
  }
]