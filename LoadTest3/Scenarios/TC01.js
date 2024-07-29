import http from 'k6/http'
import { check, group} from 'k6';


export function Amazon(){

    group('TC01 ', function () {

let AM = http.get('https://test.k6.io/browser.php');

check(AM, {
    'is status 200': (r) => r.status === 200,
})

})}