import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import BackTotop from './Components/BackTotop';
import Loader from './Components/Loader';

ReactDOM.render(
	<React.StrictMode>
		<Loader/>
		<BrowserRouter>
			<Header/>
				<App />
			<Footer />
			<BackTotop/>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
reportWebVitals();