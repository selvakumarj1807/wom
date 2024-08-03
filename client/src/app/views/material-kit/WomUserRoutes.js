import EnquiryForm from "app/wom/User/EnquiryForm/EnquiryForm";
import OrderHistory from "app/wom/User/orderHistory/OrderHistory";
import DeliveryStatus from "app/wom/User/Tracking/DeliveryStatus";
import OrderStatus from "app/wom/User/Tracking/OrderStatus";
import Payment from "app/wom/User/payment/Payment";
import InvoiceGeneration from "app/wom/User/placeOrder/invoiceGenration/InvoiceGeneration";
import Invoice from "app/wom/User/placeOrder/Invoice";
import InvoicePayment from "app/wom/User/placeOrder/invoicePayment/InvoicePayment";
import SearchEngine from "app/wom/User/EnquiryForm/SearchEngine";
import NoMoreInfor from "app/wom/User/EnquiryForm/NoMoreInfor";
import QuoteGenrator from "app/wom/User/EnquiryForm/QuoteGenrator";
import InvoiceGenerator from "app/wom/User/placeOrder/InvoiceGenerator";

const WomUserRoutes = [
  { path: "/dashboard/enquiry", element: <EnquiryForm /> },
  { path: "dashboard/invoice/generation", element: <InvoiceGeneration /> },
  { path: "dashboard/invoice/payment", element: <InvoicePayment /> },
  { path: "/dashboard/history", element: <OrderHistory /> },
  { path: "dashboard/order/status", element: <OrderStatus /> },
  { path: "dashboard/order/deliveryStatus", element: <DeliveryStatus /> },
  { path: "dashboard/order/payment", element: <Payment /> },
  { path: "/dashboard/invoice", element: <Invoice /> },
  { path: "dashboard/search/engine", element: <SearchEngine /> },
  { path: "dashboard/nomore/information", element: <NoMoreInfor /> },
  { path: "dashboard/quote/genrator", element: <QuoteGenrator /> },
  { path: "'/dashboard/nomore/information", element: <InvoiceGenerator /> },
 
];

export default WomUserRoutes;
