import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import 'datatables.net';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const VendorEnquiry = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check the initial window size
        setIsMobile(window.innerWidth <= 768);

        // Function to update state based on window size
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Initialize DataTable
        $('#bootstrapdatatable').DataTable({
            "pagingType": "simple_numbers",
            "aLengthMenu": [
                [3, 5, 10, 25, -1],
                [3, 5, 10, 25, "All"]
            ],
            "iDisplayLength": 3,
            "responsive": true,
            "autoWidth": false,
        });

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <main id='main' className='main'>
            <div className="pagetitle">
                <h1>Enquiry</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to=" " className="a">
                                <i className="bi bi-card-checklist"></i>
                            </Link>
                        </li>
                        <li className="breadcrumb-item active">Enquiry</li>
                    </ol>
                </nav>
            </div>
            <div className="container" style={{ overflowX: 'auto' }}>
                <div className="table-responsive" style={{ width: isMobile ? '100%' : '200%', height: 'auto' }}>
                    <table id="bootstrapdatatable" className="table table-striped table-bordered" style={{ width: '100%', height: 'auto' }}>
                        <thead>
                            <tr>
                                <th scope="col">Enquiry Number</th>
                                <th scope="col">Year</th>
                                <th scope="col">Make</th>
                                <th scope="col">Model</th>
                                <th scope="col">Additional Notes</th>
                                <th scope="col">Enquiry Date</th>
                                <th scope="col">Quote Generate</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#256</td>
                                <td>2020</td>
                                <td>AMC</td>
                                <td>Classic</td>
                                <td>Argent Requirements</td>
                                <td>01/09/2024</td>
                                <td style={{ color: 'blue' }}><a href='/vendor/quote/generator'>Quote Generate</a></td>
                            </tr>
                            <tr>
                                <td>#257</td>
                                <td>2020</td>
                                <td>AMC</td>
                                <td>Classic</td>
                                <td>Argent Requirements</td>
                                <td>25/08/2024</td>
                                <td style={{ color: 'blue' }}><a href='/vendor/quote/generator'>Quote Generate</a></td>
                            </tr>
                            <tr>
                                <td>#258</td>
                                <td>2020</td>
                                <td>AMC</td>
                                <td>Classic</td>
                                <td>Argent Requirements</td>
                                <td>03/09/2024</td>
                                <td style={{ color: 'blue' }}><a href='/vendor/quote/generator'>Quote Generate</a></td>
                            </tr>
                            <tr>
                                <td>#259</td>
                                <td>2020</td>
                                <td>AMC</td>
                                <td>Classic</td>
                                <td>Argent Requirements</td>
                                <td>25/09/2024</td>
                                <td style={{ color: 'blue' }}><a href='/vendor/quote/generator'>Quote Generate</a></td>
                            </tr>
                            <tr>
                                <td>#260</td>
                                <td>2020</td>
                                <td>AMC</td>
                                <td>Classic</td>
                                <td>Argent Requirements</td>
                                <td>01/09/2024</td>
                                <td style={{ color: 'blue' }}><a href='/vendor/quote/generator'>Quote Generate</a></td>
                            </tr>
                            <tr>
                                <td>#261</td>
                                <td>2020</td>
                                <td>AMC</td>
                                <td>Classic</td>
                                <td>Argent Requirements</td>
                                <td>25/08/2024</td>
                                <td style={{ color: 'blue' }}><a href='/vendor/quote/generator'>Quote Generate</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
};

export default VendorEnquiry;
