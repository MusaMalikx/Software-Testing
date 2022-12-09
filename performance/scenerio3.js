import http from 'k6/http';
import { check, group, sleep, fail } from 'k6';

export const options = {
  scenarios: {
    constant_scenario: {
      executor: "constant-vus",
      vus: 20,
      duration: "15s",
      startTime: '1s'
    },
  }
}

export default () => {
  const res = http.get('http://localhost:3000/api/p/1');

  check(res, {
    'is status 200': (resp) => resp.status === 200,
  });

  sleep(1);

};
