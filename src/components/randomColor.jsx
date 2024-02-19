import { useEffect, useState } from "react"

export const RandomColor = () => {

    const [typeColor, setTypeColor] = useState('hex');
    const [color, setColor] = useState('#000005');

    const handleHexColor = () => {
        const newColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        setColor(newColor);
    }

    const handleRgbColor = () => {
        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);
        const newColor = `rgb(${r},${g},${b})`;
        setColor(newColor);
    }

    useEffect(() => {
        if (typeColor === 'hex') {
            handleHexColor();
        } else {
            handleRgbColor();
        }
    }, [typeColor])

  return (
    <div className="container" style={{backgroundColor: color}}>
        <div className="selectors">
            <button onClick={() => setTypeColor('hex')}>Use Hex Format</button>
            <button onClick={() => setTypeColor('rgb')}>Use RGB Format</button>
            <button onClick={typeColor === 'hex' ? handleHexColor : handleRgbColor}>Generate Random Color</button>
        </div>
        <div className="legend">
            <p>{typeColor} - {color}</p>
        </div>
    </div>
  )
}
