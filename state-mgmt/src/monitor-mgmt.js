import {useMemo, useCallback, useEffect, useState} from "react";

import React from 'react';

// this will be about 3 hooks that allow us to monitor state 
// useMemo, useCallback, and useEffect,

    function MonitorMgmt(){

        const [numbers] = useState([10,20,30])


        //suppose numbers array was huge, we wouldnt want to recompute that 
        // everytime we rerender our app or component. we really only want to 
        //recalculate total when numbers changes. and this is where useMemo would come in.
        
       // const total = numbers.reduce((c,n) => c + n, 0);

       //useMemo takes in a function which does a calculation, 
       //and then takes ina  list of dependencies in an array.
       //anything we read from should go into the dependency array and 
       // would only run this function calculation if numbers chagnes.

       //use useMemor if when you are calculating any value and the process
       //to create that value would take a value, any complex calculation 
       //also when you are creating an array or object since react compares
       // arrays and objects by reference so its important to stabalize those. 

       // single level memoization, it is good performance, ccounter to popular belief 
       // theres no huge cache from combinatorial stuff. 

        const total = useMemo(() => numbers.reduce((c,n) => c + n, 0), 
        [numbers]);


        return(
            <div>
                Total: {total}
            </div>
        )

    }

    export default MonitorMgmt;