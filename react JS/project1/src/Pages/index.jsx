import LoginForm from "../component/shared/LoginForm";
import Footer from "../component/shared/Footer";
import Header from "../component/shared/Header";
import Hero from "../component/shared/Hero";
import ProductList from "../component/shared/ProductList";

export default function Home() {
    return(
        <>
            <Header />
            <Hero />
            <ProductList/>
            <LoginForm/>
            <Footer />
        </>
    )
}