export const navigations = [
  { name: "Dashboard", path: "/dashboard/default", icon: "dashboard" },
  { name: "Request a Quote", path: "/dashboard/enquiry", icon: "dashboard" },
  
  {
    name: "Place the Order",
    icon: "security",
    children: [
      // { name: "Invoice Generation", iconText: "SI", path: "dashboard/invoice/generation" },
      {
        name: "Get the Quote",
        iconText: "SU",
        path: "dashboard/invoice/payment",
      },
    ],
  },
  { name: "History", path: "/dashboard/history", icon: "dashboard" },

  {
    name: "Tracking",
    icon: "security",
    children: [
      { name: "Order Status", iconText: "SI", path: "/dashboard/order/status" },
      // {
      //   name: "Delivery Status",
      //   iconText: "SU",
      //   path: "/dashboard/order/deliveryStatus",
      // },
    ],
  },
  { name: "Logout", path: "/home", icon: "dashboard" },
  // { label: "Components", type: "label" }
  // {
  //   name: "Components",
  //   icon: "favorite",
  //   badge: { value: "30+", color: "secondary" },
  //   children: [
  //     { name: "Auto Complete", path: "/material/autocomplete", iconText: "A" },
  //     { name: "Buttons", path: "/material/buttons", iconText: "B" },
  //     { name: "Checkbox", path: "/material/checkbox", iconText: "C" },
  //     { name: "Dialog", path: "/material/dialog", iconText: "D" },
  //     { name: "Expansion Panel", path: "/material/expansion-panel", iconText: "E" },
  //     { name: "Form", path: "/material/form", iconText: "F" },
  //     { name: "Icons", path: "/material/icons", iconText: "I" },
  //     { name: "Menu", path: "/material/menu", iconText: "M" },
  //     { name: "Progress", path: "/material/progress", iconText: "P" },
  //     { name: "Radio", path: "/material/radio", iconText: "R" },
  //     { name: "Switch", path: "/material/switch", iconText: "S" },
  //     { name: "Slider", path: "/material/slider", iconText: "S" },
  //     { name: "Snackbar", path: "/material/snackbar", iconText: "S" },
  //     { name: "Table", path: "/material/table", iconText: "T" }
  //   ]
  // },
  // {
  //   name: "Charts",
  //   icon: "trending_up",
  //   children: [{ name: "Echarts", path: "/charts/echarts", iconText: "E" }]
  // },
  // {
  //   name: "Documentation",
  //   icon: "launch",
  //   type: "extLink",
  //   path: "http://demos.ui-lib.com/matx-react-doc/"
  // }
];
