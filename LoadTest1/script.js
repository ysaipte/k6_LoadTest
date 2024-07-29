import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 10,
  duration: '30s',
  cloud: {
    // Project: SampleTest
    projectID: 3706943,
    // Test runs with the same name groups test runs together.
    name: 'Test (28/07/2024-23:05:53)'
  }
};

export default function() {
  http.get('https://test.k6.io');
  sleep(1);
}