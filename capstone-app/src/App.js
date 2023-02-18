import './App.css';
import {Helmet} from "react-helmet";
import Header from './Components/Header';
import Nav from './Components/Nav';
import Main from './Components/Main';
import Footer from './Components/Footer';


function App() {
  return (
    <>
    <Helmet>
      <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        <title>Little Lemon Restaurant</title>
        <meta name="description" content="Official website of the Little Lemon restaurant."/>
        <meta name="author" content="Little Lemon"/>

        <meta property="og:title" content="Little Lemon Official Website"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.littlelemon.com"/>
        <meta property="og:description" content="Official website of the Little Lemon restaurant."/>
        <meta property="og:image" content="./Components/Images/Logo.svg"/>
    </Helmet>
    <Header />
    <Nav />
    <Main />
    <Footer />
    </>
  );
}

export default App;
