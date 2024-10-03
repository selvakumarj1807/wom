import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import 'datatables.net';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';

const VendorQuote = () => {
    const [data, setData] = useState([]);

    const fetchData = async() => {
        try {
            // Make a GET request to fetch the updated list of years
            const response = await axios.get('https://wom-server.onrender.com/api/v1/vendor/vendorQuote');

            // Extract the array from the response (assuming it's called addYear)
            const fetchedData = response.data.vendorQuote;

            // Update the state that the table uses
            setData(fetchedData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };


    useEffect(() => {
        fetchData();
    }, []);

    // Add custom sorting for the "DD/MM/YYYY - HH:mm AM/PM" date format
    $.fn.dataTable.ext.order['dom-date-custom'] = function(settings, colIndex) {
        return this.api().column(colIndex, { order: 'index' }).nodes().map(function(td) {
            // Extract the date text
            const dateText = $(td).text().trim();

            // Convert dateText from "DD/MM/YYYY - HH:mm AM/PM" to a JavaScript Date object
            const [datePart, timePart] = dateText.split(' - ');
            const [day, month, year] = datePart.split('/');
            const dateString = `${year}-${month}-${day} ${timePart}`;

            return new Date(dateString).getTime(); // Return timestamp for sorting
        });
    };

    useEffect(() => {
        if (data.length > 0) {
            const table = $('#bootstrapdatatable').DataTable({
                "aLengthMenu": [
                    [3, 5, 10, 25, -1],
                    [3, 5, 10, 25, "All"]
                ],
                "iDisplayLength": 3,
                "responsive": false,
                "autoWidth": false, // Disable auto width, so you can set widths manually

                // Set the initial order of the table by the 'enquiryDate' column in descending order
                "order": [
                    [6, 'desc']
                ], // Assuming 'enquiryDate' is in the 6th column (index 6)

                // Apply custom sorting and column width to the 'enquiryDate' column
                "columnDefs": [{
                        "targets": 6, // Index of 'enquiryDate' column
                        "orderDataType": 'dom-date-custom', // Use custom sorting plugin
                        "width": "180px" // Adjust the width of 'enquiryDate' column
                    },
                    {
                        "targets": 0, // Index of 'Enquiry Number' column
                        "width": "100px" // Set a width for 'Enquiry Number' column
                    },
                    {
                        "targets": 1, // Index of 'Year' column
                        "width": "80px" // Set a width for 'Year' column
                    },
                    {
                        "targets": 4, // Index of 'Year' column
                        "width": "300px" // Set a width for 'Year' column
                    },
                    {
                        "targets": 5, // Index of 'Emails' column
                        "width": "300px" // Set a larger width for 'Emails' column since it contains lists
                    },
                    {
                        "targets": 7, // Index of 'Emails' column
                        "width": "150px" // Set a larger width for 'Emails' column since it contains lists
                    }
                    // Add more columnDefs for other columns if needed
                ]
            });

            // Cleanup function to destroy DataTable on unmount or before reinitialization
            return () => {
                table.destroy();
            };
        }
    }, [data]);



    return ( <
        div id = "main"
        className = "main"
        style = {
            { padding: '20px' } } >

        <
        h2 style = {
            { textAlign: 'center', color: 'rgb(14, 42, 71)' } } > Vendor - Quote(Received) < /h2> { /* Internal CSS */ } <
        style > { `
                .product-list {
                    padding: 0;
                    margin: 0;
                    list-style: none;
                }

                .product-item {
                    padding: 15px;
                    border: 1px solid #ddd;
                    margin-bottom: 10px;
                }

                .product-info {
                    width: 100%;
                    padding: 5px 0;
                }

                .product-label {
                    font-weight: bold;
                }

                @media (max-width: 768px) {
                    .product-info {
                        width: 100%;
                        padding: 5px 0;
                    }

                    .product-item {
                        padding: 15px;
                        border: 1px solid #ddd;
                        margin-bottom: 10px;
                    }
                }
                ` } <
        /style> <
        div className = "container"
        style = {
            { overflowX: 'auto' } } >
        <
        div className = "table-responsive" >
        <
        table id = "bootstrapdatatable"
        className = "table table-striped table-bordered"
        style = {
            { width: '180%', height: 'auto' } } >
        <
        thead >
        <
        tr >
        <
        th > Enquiry Number < /th> <
        th > Quote Number < /th> <
        th > Vendor Email < /th> <
        th > Customer Name < /th> <
        th > Products < /th> <
        th > Quote Download < /th> <
        th > Quote Date < /th> <
        th scope = "col" > Edit Quote < /th> <
        /tr> <
        /thead> <
        tbody > {
            data.length > 0 ? (
                data.map((elem, index) => ( <
                    tr key = { elem._id } >
                    <
                    td style = {
                        { textAlign: 'center', alignContent: 'center' } } > { elem.enquiryNumber } < /td> <
                    td style = {
                        { textAlign: 'center', alignContent: 'center' } } > { elem.quoteNumber } < /td> <
                    td style = {
                        { textAlign: 'center', alignContent: 'center' } } > { elem.email } < /td> <
                    td style = {
                        { textAlign: 'center', alignContent: 'center' } } > { elem.customerName } < /td> <
                    td style = {
                        { alignContent: 'center' } } >
                    <
                    ul className = "product-list" > {
                        elem.items.map((item) => ( <
                            li key = { item._id }
                            className = "product-item" >
                            <
                            div className = "product-info" >
                            <
                            span className = "product-label" > Product: < /span> {item.productname} <
                            /div> <
                            div className = "product-info" >
                            <
                            span className = "product-label" > Description: < /span> {item.description} <
                            /div> <
                            div className = "product-info" >
                            <
                            span className = "product-label" > Quantity: < /span> {item.quantity} <
                            /div> <
                            div className = "product-info" >
                            <
                            span className = "product-label" > Price: < /span> {item.price} <
                            /div> <
                            /li>
                        ))
                    } <
                    /ul> <
                    /td> <
                    td style = {
                        { wordWrap: 'break-word', color: 'orange', alignContent: 'center' } } > {
                        elem.attachedFile ? ( <
                            a href = { `https://wom-server.onrender.com/api/v1/vendor/vendorQuote/download/${elem.attachedFile}` }
                            download > { elem.attachedFile } <
                            /a>
                        ) : (
                            "No file attached"
                        )
                    } <
                    /td>

                    <
                    td style = {
                        { textAlign: 'center', alignContent: 'center' } } > { elem.quoteDate } < /td> <
                    td style = {
                        { textAlign: 'center', color: 'blue', alignContent: 'center' } } > < a href = '/Admin/vendor/editQuote' > Edit < /a></td >
                    <
                    /tr>
                ))
            ) : ( <
                tr >
                <
                td colSpan = "7" > No data available < /td> <
                /tr>
            )
        } <
        /tbody> <
        /table> <
        /div> <
        /div> <
        /div>
    );
};

export default VendorQuote;