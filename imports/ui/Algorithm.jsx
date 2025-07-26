import React from 'react';
import { useMemo, useState } from 'react';

export default function useAlgorithm(start, end, firstDivider, secondDivider) {
    const combinedName = firstDivider.name + secondDivider.name;
    const combinedValue = firstDivider.value * secondDivider.value;

    return useMemo(() => {
        const result = [];

        for (let i = start; i <= end; i++) {
            let val = "";

            if(i % firstDivider.value === 0)
            {
                val += firstDivider.name;
            }
            if(i % secondDivider.value === 0)
            {
                val += secondDivider.name;
            }
            if(!val)
            {
                val = String(i);
            }

            result.push(val);
        }
        
        return result;
    }, [start, end, firstDivider, secondDivider]);
}
