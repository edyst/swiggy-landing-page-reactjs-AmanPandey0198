import React, { useState, useEffect } from 'react';


function Timer() {
    let text = ["GAME NIGHT", "COOKING GONE WRONG", "LATE AT NIGHT", "MOVIE MARATHON"];
    const [change, setChange] = useState(text[0]);
    useEffect(() => {
        help();
    }, [])
    function help() {
        var i = 0;
        setInterval(
            () => {
                if (i === 4) {
                    i = 0;
                }
                if (i < 4) {
                    setChange(text[i]);
                    i++;
                }
            },3000)       
    }
    return (
        <>
        <div>
                <h1 className="h1">{change}?</h1>
                <h2 className="h2">Order food from Favourite resturant near you.</h2>
            </div>
            </>
    )
};

export default Timer;