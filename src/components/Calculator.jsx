import React, { useState } from 'react';

const Calculator = () => {
    const [input, setInput] = useState('');

    const handleButtonClick = (value) => {
        if (value === '=') {
            try {
                setInput(eval(input));
            } catch (error) {
                setInput('Error');
            }
        } else if (value === 'C') {
            setInput('');
        } else {
            setInput(input + value);
        }
    };

    const buttons = [
        'C',
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', '.', '=', '+'
    ];

    return (
        <div className="container max-w-md">
            <div className="bg-inherit p-4 rounded shadow-lg border">
                <input
                    type="text"
                    value={input}
                    className="mb-2 p-2 w-full text-2xl border border-gray-400 rounded"
                    readOnly
                />
                <div className="grid grid-cols-4 gap-2">
                    {buttons.map((button) => (
                        <button
                            key={button}
                            onClick={() => handleButtonClick(button)}
                            className="p-2 text-2xl bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            {button}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Calculator;
