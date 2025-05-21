// Creare un custom hook che sostituisca il cursore del mouse con un componente personalizzato.
// Cosa deve fare?
// Prende in input una stringa o un JSX component (es. un’emoji, un'icona, un'animazione).
// Posiziona il componente al posto del puntatore del mouse.
// Il componente segue i movimenti del mouse.

import { useEffect, useState } from "react";

export default function useCustomPointer(component) {

    const [position, setPosition] = useState({ x: 0, y: 0 })


    useEffect(() => {
        const handleMouseMove = event => {
            setPosition({ x: event.clientX, y: event.clientY });
        }
        document.addEventListener("mousemove", handleMouseMove)
        return () => document.removeEventListener("mousemove", handleMouseMove)
    }, [])

    return (
        <div
            style={{
                position: 'fixed',
                top: position.y,
                left: position.x,
                transform: 'translate(-50%, -50%)',
                cursor: 'none'
            }}

        >
            {component}
        </div>
    )
}