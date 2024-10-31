import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'remixicon/fonts/remixicon.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import VendorMain from './VendorMain';
import VendorEnquiry from './dashboard/VendorEnquiry';
import VendorRegister from './dashboard/VendorRegister';
import AddProduct from './dashboard/productRegister/AddProduct'; // example import
import ProductList from './dashboard/productRegister/ProductList'; // example import
import ProductEdit from './dashboard/productRegister/ProductEdit'; // example import

import QuoteGenerator from './dashboard/quoteManagement/QuoteGenerator';
import QuoteSuccess from './dashboard/quoteManagement/QuoteSuccess'; // example import
import Payment from './dashboard/PaymentResponse'; // example import
import ViewProducts from './dashboard/ViewProducts'; // example import


import Footer from '../user_dashboard/user_components/user_dash/footer/Footer';
import Header from './navbar/Header';
import VendorSidebar from './navbar/sidebar/VendorSidebar';

import useAuthRedirect from '../../../hooks/useAuthRedirect';


function VendorDashboard() {
    
    useAuthRedirect(); // Check for the token and redirect if not present

    return (
        <div>
            <Header />
            <VendorSidebar />
            <Routes>
                <Route path="/" element={<VendorMain />} />
                <Route path="Enquiry" element={<VendorEnquiry />} />
                <Route path="register" element={<VendorRegister />} />
                <Route path="product/add" element={<AddProduct />} /> {/* Example route */}
                <Route path="product/list" element={<ProductList />} /> {/* Example route */}
                <Route path="product/edit" element={<ProductEdit />} /> {/* Example route */}
                <Route path="quote/generator" element={<QuoteGenerator />} /> {/* Example route */}
                <Route path="quote/success" element={<QuoteSuccess />} /> {/* Example route */}
                <Route path="payment" element={<Payment />} /> {/* Example route */}
                <Route path="viewProducts/:id" element={<ViewProducts />} />
                {/* Add other routes here */}
            </Routes>
            <Footer />
        </div>
    );
}

export default VendorDashboard;
