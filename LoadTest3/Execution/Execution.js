import {Amazon} from '../Scenarios/TC01.js'
import {Wikipedia} from '../Scenarios/TC03.js'
import {Flipkart} from '../Scenarios/TC02.js'
import {K6} from '../Scenarios/TC04.js'


import { options } from '../Commons/common.js';

export { options }

export default function SampleTest()
{  
    
    Amazon();
    Wikipedia();
    K6();
    Flipkart();
 
}


