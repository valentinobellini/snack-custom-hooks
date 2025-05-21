import { useState, useCallback } from "react";

export default function useSwitch(initialValue = false) {

    const [value, setValue] = useState(initialValue);

    console.log(value);

    const toggle = useCallback(() => {
        setValue(prev => !prev)
    }, [])

    return [value, toggle]
}