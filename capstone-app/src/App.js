import './styles.modules.css';
import './index.css';
import {Helmet} from "react-helmet";
import Home from './Home';
import Reservations from './Components/Reservations';
import { Route, Routes } from 'react-router-dom';


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

        <link rel="stylesheet" href="./styles.modules.css" />
    </Helmet>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/reservations" element={<Reservations />} />
    </Routes>
    </>
  );
}

export default App;
