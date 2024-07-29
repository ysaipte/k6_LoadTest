import http from 'k6/http'
import { check, group} from 'k6';


export function K6(){

    group('TC03 ', function () {

let k6 = http.get('https://test.k6.io/');

check(k6, {
    'is status 200': (r) => r.status === 200,
})

})}