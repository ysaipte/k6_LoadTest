export const options = {
    discardResponseBodies: false,
    noConnectionReuse: true,
    summaryTrendStats: ['avg', 'min', 'med', 'max', 'p(99)', 'count'],
    scenarios: {
      contacts: {
        executor: 'ramping-vus',
        startVUs: 0,
        stages: [
        //   // { duration: '10s', target: 50 },
        //   // { duration: '6m', target: 50 },
  
          { duration: '05s', target: 05 },
          { duration: '2m', target: 05 },
  
          { duration: '05s', target: 10 },
          { duration: '3m', target: 10 },
  
        ],

        gracefulRampDown: '10s',
        exec: 'SampleTest',
    },
},
}
