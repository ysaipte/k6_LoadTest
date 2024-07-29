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
  
          { duration: '10s', target: 10 },
          { duration: '2m', target: 10 },
  
          { duration: '15s', target: 15 },
          { duration: '3m', target: 15 },
  
        ],

        gracefulRampDown: '10s',
        exec: 'SampleTest',
    },
},
}