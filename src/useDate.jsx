// 🏆 Snack 2: useDate() – Ottenere la Data Attuale
// Creare un custom hook che restituisca la data e l'ora correnti, aggiornandosi automaticamente ogni secondo.
// Cosa deve fare?
// Restituisce un oggetto con data e ora formattata.
// Si aggiorna automaticamente ogni secondo.
// Usa useEffect() per gestire l’aggiornamento.
// Esempio di utilizzo:


// import { useState, useEffect } from "react";

// export default function useDate() {

//     const [currentDate, setCurrentDate] = useState(new Date());



//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentDate(new Date());

//         }, 1000);
//         return () => {
//             clearInterval(interval)
//         }
//     }, [])

//     return currentDate
// }