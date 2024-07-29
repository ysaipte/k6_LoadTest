import http from 'k6/http'
import { check, group} from 'k6';


export function Flipkart(){

    group('TC02 ', function () {

let FKT =http.get('https://test.k6.io/pi.php?decimals=3');

check(FKT, {
    'is status 200': (r) => r.status === 200,
})

})}