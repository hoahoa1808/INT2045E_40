import React from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import FieldsPage from "./pages/FieldsPage";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/HomePage" element={<HomePage />} />
					<Route path="News" element={<NewsPage />} />
					<Route path="/Fields" element={<FieldsPage />} />
				</Routes>
			</BrowserRouter>
		);
	}
}

export default App;