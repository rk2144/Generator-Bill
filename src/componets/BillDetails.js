import React, { useState } from 'react';

const BillDetails = ({ onAddItem }) => {
    const [selectedKey, setSelectedKey] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(0);
    const [item, setItem] = useState('');

    // Define your predefined keys and their corresponding items
    const predefinedItems = {
        1: 'MOOR BRASLET',
        2: 'BRASLET',
        3: 'CHAIN',
        4: 'PENDIL',
        5: 'ANGHUTI',
        6: 'CHHALLA',
        7: 'MALA',
        8: 'MOTI',
        9: 'KAATTA',
        10: 'BALI',
        11: 'CHODI',
        12: 'KADA',
        13: 'TABIZ',
        14: 'CHAKU',
        15: 'KHILAAL',
        16: 'CHIPIYA',
        17: 'DHAGAA',
        18: 'NAZAR MANKA',
        19: 'TILASMI MOTI',
        20: 'CHAIN PENDIL',
        21: 'PAYAL',
        22: 'HONEY SINGH',
        23: 'HAAR SAT',
        24: 'DOORI',
        25: 'CIRSTAL',
        26: 'RING BOX',
        27: 'NAZARIYA',
        28: 'BLANCE',
        29: 'BHADA',
        30: 'PACKING',
        31: 'ROUND OFF',
        32: 'TAX',
        33: 'NAIL CUTTER',
        34: 'PECHH',
        35: 'BELT',
        36: 'PICHALA BILL',
        37: '9 IN 1',
        38: 'BICHIYA',
        39: 'LATKAN BHAGWAN',
        40: 'SANEE PULTA',
        41: 'CHTRA',
        42: 'JHANDI',
        43: 'MOVING TEDI',
        44: 'MASK',
        45: 'FLYING HANUMAN',
        46: 'PAAN',
        47: 'AASAN',
        48: 'POSHAK',
        49: 'TOPI',
        50: 'SHIVPARIWAR',
        51: 'KACHUA PLATE',
        52: 'LADDU GOPAL',
        53: 'TILAK',
        54: 'SURIYA',
        55: 'NAAGLING',
        56: 'MARUTI',
        57: 'AASHAN',
        58: 'BANSI',
        59: 'BHAGWAN MALA',
        60: 'DIYA',
        61: 'RJAYI GADDI',
      
        // Add more predefined keys and items as needed
    };

    const handleAddItem = () => {
        const newItem = { item, quantity, price };
        onAddItem(newItem);
        setItem('');
        setQuantity(1);
        setPrice(0);
    };

    const handleSelectKey = (key) => {
        setSelectedKey(key);
        setItem(predefinedItems[key] || ''); // Update the item based on the selected key
    };

    return (
        <div>
            <label>Select Key:</label>
            <select value={selectedKey} onChange={(e) => handleSelectKey(e.target.value)}>
                <option value="">Select</option>
                {Object.keys(predefinedItems).map(key => (
                    <option key={key} value={key}>{key}</option>
                ))}
            </select>
            <label>Item:</label>
            <input
                type="text"
                value={item}
                onChange={(e) => setItem(e.target.value)}
                disabled // Disable item input field since it's dynamically updated
            />
            <label>Quantity:</label>
            <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
            <label>Price:</label>
            <input
                type="number"
                value={price}
                onChange={(e) => setPrice(parseFloat(e.target.value))}
            />
            <button onClick={handleAddItem}>Add Item</button>
        </div>
    );
};

export default BillDetails;
