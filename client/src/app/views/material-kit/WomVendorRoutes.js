import PaymentResponse from "app/wom/vendor_dashboard/dashboard/PaymentResponse";
import VendorRegister from "app/wom/vendor_dashboard/dashboard/VendorRegister";
import AddProduct from "app/wom/vendor_dashboard/dashboard/productRegister/AddProduct";
import ProductList from "app/wom/vendor_dashboard/dashboard/productRegister/ProductList";
import QuoteGenerator from "app/wom/vendor_dashboard/dashboard/quoteManagement/QuoteGenerator";
import QuoteSuccess from "app/wom/vendor_dashboard/dashboard/quoteManagement/QuoteSuccess";

const WomVendorRoutes = [
    { path: "register", element: < VendorRegister / > },
    { path: "product/add", element: < AddProduct / > },
    { path: "product/list", element: < ProductList / > },
    { path: "quote/generator", element: < QuoteGenerator / > },
    { path: "quote/success", element: < QuoteSuccess / > },
    { path: "payment", element: < PaymentResponse / > },
];

export default WomVendorRoutes;