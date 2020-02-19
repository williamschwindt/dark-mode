import React, { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [storedValue, setStoredValue] = useLocalStorage('dark');

    useEffect(() => {
        if(storedValue) {
            document.querySelector("body").classList.add('dark-mode');
        }
        else {
            document.querySelector("body").classList.remove('dark-mode');
        }
    }, [storedValue]);

    return [storedValue, setStoredValue];
};