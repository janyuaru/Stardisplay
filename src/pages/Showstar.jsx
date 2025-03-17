import { useState } from "react";
import "../style/Showstar.css"; 

const Showstar = () => {
    const [count, setCount] = useState(0);
    const [stars, setStars] = useState([]);

    const handleChange = (e) => {
        setCount(Number(e.target.value) || 0);
    };

    const handleSubmit = () => {
        let result = [];
        for (let i = 1; i <= count; i++) {
            result.push("*".repeat(i));
        }
        for (let i = count - 1; i > 0; i--) {
            result.push("*".repeat(i));
        }
        setStars(result);
    };

    return (
        <div className="container">
            <div className="input-group">
                <label>Input: </label>
                <input type="number" min="0" onChange={handleChange} />
                <button onClick={handleSubmit}>Enter</button>
            </div>
            <div className="star-container">
                {stars.map((line, index) => (
                    <div key={index} className="star-line">{line}</div>
                ))}
            </div>
        </div>
    );
};
export default Showstar;
