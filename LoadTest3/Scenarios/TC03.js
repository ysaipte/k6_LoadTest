import http from 'k6/http'
import { check, group} from 'k6';


export function Wikipedia(){

    group('TC04 ', function () {

let WK = http.get('https://www.wikipedia.org/');

check(WK, {
    'is status 200': (r) => r.status === 200,
})

})}