// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './components/Navbar';
// import Footer from './components/Footer'; // Define a simple footer component

// Page Components
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ContentPage from './pages/ContentPage';
import ProductsPage from './pages/ProductsPage';

// Simple Footer Component
const FooterComponent = () => (
    <footer className="bg-blue-800 text-white p-6 mt-auto">
        <div className="max-w-7xl mx-auto text-center">
            <p className="text-sm">
                © {new Date().getFullYear()} SEASANA MACHINERY PVT LTD. All rights reserved.
            </p>
            <p className="mt-2 text-xs italic opacity-75">
                Note: Any upgrading of appearance or product performances shall prevail.
            </p>
        </div>
    </footer>
);

const App = () => {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/content" element={<ContentPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/products" element={<ProductsPage />} />

                        {/* Optionally, add a 404 page */}
                        <Route path="*" element={<div className="text-center py-20 text-xl">404 - Page Not Found</div>} />
                    </Routes>
                </main>
                <FooterComponent />
            </div>
        </Router>
    );
};

export default App;