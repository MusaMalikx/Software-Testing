import http from 'k6/http';
import { check, group, sleep, fail } from 'k6';

export const options = {
  scenarios: {
    shared_scenario: {
      executor: "shared-iterations",
      vus: 50,
      iterations: 70,
      startTime: '0s'
    },
  }
}

export default () => {
  const res = http.get('http://localhost:3000/api/s/1');

  check(res, {
    'is status 200': (resp) => resp.status === 200,
  });

  sleep(1);

};
