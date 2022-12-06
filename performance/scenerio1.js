import http from 'k6/http';
import { check, group, sleep, fail } from 'k6';

export const options = {
  scenarios: {
    ramping_vus_scenario: {
      executor: "ramping-vus",
      startTime: '0s',
      stages: [
        { duration: '15s', target: 100 }, 
        { duration: '30s', target: 100 }, 
        { duration: '15s', target: 0 }, 
    ]
    },
  }
}

export default () => {
  const res = http.get('http://localhost:3000/api/suggestions');

  check(res, {
    'is status 200': (resp) => resp.status === 200,
  });

  sleep(1);

};
