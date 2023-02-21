import './styles.modules.css';
import './index.css';
import {Helmet} from "react-helmet";
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';


function App() {
  return (
    <>
    <Helmet>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        <title>The Little Lemon Restaurant</title>
        <meta name="description" content="Official website of the Little Lemon restaurant."/>
        <meta name="author" content="Little Lemon"/>

        <meta property="og:title" content="Little Lemon Official Website"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.littlelemon.com"/>
        <meta property="og:description" content="Official website of the Little Lemon restaurant."/>
        <meta property="og:image" content="./Components/Images/Logo.svg"/>
        <meta property="og:locale" content="en_us" />
        <meta property="og:site_name" content="Little Lemon" />

        <link rel="stylesheet" href="./styles.css" />
    </Helmet>
    <Header />
    <Main />
    <Footer />
    </>
  );
}

export default App;
