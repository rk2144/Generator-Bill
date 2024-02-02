import React, { useState } from 'react';
import BillDetails from './componets/BillDetails';
import ItemList from './componets/ItemList';
import TotalAmount from './componets/TotalAmount';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

import './App.css';
import Totalbill from './componets/TotalBill';

function App() {
    const [items, setItems] = useState([]);

    const handleAddItem = (item) => {
        setItems([...items, item]);
    };

    const handleDeleteItem = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };

    const calculateTotalAmount = () => {
        return items.reduce(
            (total, item) =>
                total +
                item.quantity *
                item.price, 0);
    };

    const handleDownloadPDF = () => {
        const pdf = new jsPDF('p', 'mm', 'a4'); // Create A4 size PDF
        pdf.text('SHUBHAM JEWELLERS INDORE', 105, 15, { align: 'center' }); // Centered title

        // Prepare data for the table
        const tableData = items.map(item => [item.item, item.quantity, item.price, (item.quantity * item.price).toFixed(2)]);

        // Add items table to PDF
        pdf.autoTable({
            startY: 50, // Adjust the startY position for different spacing
            head: [['Item', 'Quantity', 'Price', 'Total']], // Table headers
            body: tableData // Table body data
        });

        // Add total amount to PDF
        const totalAmount = calculateTotalAmount();
        pdf.text(`Total Amount: ${totalAmount.toFixed(2)}`, 20, pdf.lastAutoTable.finalY + 10); // Position adjusted for A4 size

        // Save the PDF
        pdf.save('bill.pdf');
    };

    return (
        <div className="App">
            <h1> SHUBHAM JEWELLERS </h1>
            <h3>INDORE </h3>
            <BillDetails onAddItem={handleAddItem} />
            <ItemList items={items} onDeleteItem={handleDeleteItem} />
            <Totalbill total={calculateTotalAmount()}/>


            <TotalAmount items={items} />
            <button onClick={handleDownloadPDF}>Download PDF</button>
        </div>
    );
}

export default App;
