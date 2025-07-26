import React from 'react';
import { useMemo, useState, useRef } from 'react';

export default function useAlgorithm(start, end, firstDivider, secondDivider) {
    const combinedName = firstDivider.name + secondDivider.name;
    const combinedValue = firstDivider.value * secondDivider.value;

    const combinedCount = useRef(0);
    const firstDividerCount = useRef(0);
    const secondDividerCount = useRef(0);
    const plainNumbersCount = useRef(0);

    return useMemo(() => {
        const result = [];
        combinedCount.current = 0;
        firstDividerCount.current = 0;
        secondDividerCount.current = 0;
        plainNumbersCount.current = 0;

        for (let i = start; i <= end; i++) {
            let val = "";

            // Second condition is for edge case when user selects same number for both divisors
            if (i % combinedValue === 0 || (i % firstDivider.value === 0 && firstDivider.value === secondDivider.value)) { 
                result.push(combinedName);
                combinedCount.current += 1;
            } else if (i % firstDivider.value === 0) {
                result.push(firstDivider.name);
                firstDividerCount.current += 1;
            } else if (i % secondDivider.value === 0) {
                result.push(secondDivider.name);
                secondDividerCount.current += 1;
            } else {
                result.push(String(i));
                plainNumbersCount.current += 1;
            }

            result.push(val);
        }
        
        return {result, firstDividerCount: firstDividerCount.current, secondDividerCount: secondDividerCount.current, combinedCount: combinedCount.current, plainNumbersCount: plainNumbersCount.current};
    }, [start, end, firstDivider, secondDivider]);
}
