export const vendorNav = [
    { name: "Dashboard", path: "/VendorDashboard" },
    { name: "Vendor Registration", path: "/VendorDashboard/register" },
    {
        name: "Product Registration",
        children: [
            { name: "Add Product", path: "/VendorDashboard/product/add" },
            { name: "Product List", path: "/VendorDashboard/product/list" },
        ],
    },
    {
        name: "Quote Management",
        children: [
            { name: "Quote Generator", path: "/VendorDashboard/quote/generator" },
            { name: "Quote Success", path: "/VendorDashboard/quote/success" },
        ],
    },
    { name: "Payment Response", path: "/VendorDashboard/payment" },
    { name: "Logout", path: "/home" },
];