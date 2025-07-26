import React from 'react';
import { useMemo, useState } from 'react';

export default function useAlgorithm(start, end) {
    return useMemo(() => {
        const result = [];
        for (let i = start; i <= end; i++) {
            if (i % 15 === 0) { 
                result.push('RobotICT');
            } else if (i % 3 === 0) {
                result.push('Robot');
            } else if (i % 5 === 0) {
                result.push('ICT');
            } else {
                result.push(String(i));
            }
        }
        
        return result;
    }, [start, end]);
}
