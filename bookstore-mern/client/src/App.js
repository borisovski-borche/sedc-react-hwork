import "./App.css";
import Layout from "./components/layout/Layout";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/ui/Header";
import BookStorePage from "./pages/BookStorePage";
import AddBookPage from "./pages/AddBookPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import LoginPage from "./pages/LoginPage";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <Layout>
      <Router>
        <Header />
        <Route exact path="/">
          <BookStorePage />
        </Route>
        <Route path="/add">
          <AddBookPage />
        </Route>
        <Route path="/shopping-cart">
          <ShoppingCartPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/checkout">
          <CheckoutPage />
        </Route>
      </Router>
    </Layout>
  );
}
export default App;
