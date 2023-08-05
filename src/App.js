import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/home/Home";
import "./styles/app.scss"
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Contact from "./components/contact/Contact";
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
import PlaceOrder from "./components/cart/PlaceOrder";
import PaymentSuccess from "./components/cart/PaymentSuccess";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import MyOrders from "./components/myOrders/MyOrders";
import OrderDetails from "./components/myOrders/OrderDetails";
import Dashboard from "./components/admin/Dashboard";
import Users from "./components/admin/Users";
import Orders from "./components/admin/Orders";
import About from "./components/about/About";
import NotFound from "./components/layouts/NotFound";

function App() {
  return (
    <Router>
       <Header isAuthenticated={true} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/shipping" element={<Shipping />}></Route>
        <Route path="/confirmOrder" element={<PlaceOrder />}></Route>
        <Route path="/paymentSuccess" element={<PaymentSuccess />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/me" element={<Profile />}></Route>
        <Route path="/myorders" element={<MyOrders />}></Route>
        <Route path="/order/:id" element={<OrderDetails />}></Route>
        <Route path="/admin/dashboard" element={<Dashboard />}></Route>
        <Route path="/admin/users" element={<Users />}></Route>
        <Route path="/admin/orders" element={<Orders />}></Route>
    

        <Route path={"*"} element={<NotFound />}></Route>

      </Routes>
      <Footer />
     </Router>
  );
}

export default App;
