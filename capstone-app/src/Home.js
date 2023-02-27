import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function Home() {
    return (
        <>
        <main className='content'>
            <Header />
            <Main />
            <Footer />
        </main>
        </>
    );
}

export default Home;