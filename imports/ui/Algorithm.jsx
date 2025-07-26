import React from 'react';
import { useMemo, useState } from 'react';

export default function useAlgorithm(start, end, firstDivider, secondDivider) {
    const combinedName = firstDivider.name + secondDivider.name;
    const combinedValue = firstDivider.value * secondDivider.value;

    return useMemo(() => {
        const result = [];

        for (let i = start; i <= end; i++) {
            if (i % combinedValue === 0) { 
                result.push(combinedName);
            } else if (i % firstDivider.value === 0) {
                result.push(firstDivider.name);
            } else if (i % secondDivider.value === 0) {
                result.push(secondDivider.name);
            } else {
                result.push(String(i));
            }
        }
        
        return result;
    }, [start, end, firstDivider, secondDivider]);
}
