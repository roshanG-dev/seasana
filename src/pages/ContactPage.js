// pages/ContactPage.jsx
import React from 'react';
// Assuming contactInfo still exists, but we will use the explicit text provided
import { contactInfo } from '../data/seasanaData'; 

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header Section with Title and Tagline */}
        <div className="text-center mb-12 bg-white p-8 rounded-xl shadow-2xl border-b-4 border-amber-500">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-2">
                SEASANA BELT-TYPE COLOR SORTER
            </h1>
            <p className="text-xl font-light italic text-blue-600">
                AI Sort . Global Intelligent Manufature
            </p>
        </div>
        
        {/* Main Content Grid (Contact Info + Disclaimer) */}
        <div className="grid md:grid-cols-2 gap-8">

            {/* Contact Details Card */}
            <div className="bg-white p-8 rounded-xl shadow-2xl border-t-4 border-blue-600 h-full">
                <h2 className="text-3xl font-bold text-blue-800 mb-6 border-b pb-2">
                    Corporate Contact
                </h2>

                <div className="space-y-6 text-lg">
                    
                    {/* Company Name (Explicitly provided text) */}
                    <p className="text-xl font-semibold text-gray-900 border-b pb-2">
                        SEASANA MACHINERY PVT LTD.
                    </p>

                    {/* Address (Explicitly provided text) */}
                    <div className="flex items-start space-x-4">
                        <svg className="flex-shrink-0 w-6 h-6 text-amber-500 mt-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                        <p className="text-gray-700">
                            S.F.NO:54/2B, KEERANATHAM,<br/>
                            COIMBATORE- 641035,<br/>
                            TAMIL NADU, INDIA.
                        </p>
                    </div>

                    {/* Email (Explicitly provided text with link) */}
                    <div className="flex items-start space-x-4">
                        <svg className="flex-shrink-0 w-6 h-6 text-amber-500 mt-1" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                        <p className="text-gray-700">
                            Email: <a href="mailto:seasanainds@gmail.com" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">seasanainds@gmail.com</a>
                        </p>
                    </div>

                    {/* Website (Explicitly provided text with link) */}
                    <div className="flex items-start space-x-4">
                        <svg className="flex-shrink-0 w-6 h-6 text-amber-500 mt-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.74-6.68-4.32-6.68-8.93 0-2.3.8-4.4 2.15-6.15l.3-.45 4.23 7.33-.03.04.03-.04 4.23-7.33.3.45c1.35 1.75 2.15 3.85 2.15 6.15 0 4.61-2.73 8.19-6.68 8.93-.08.01-.16.02-.24.02h-.16c-.08 0-.16-.01-.24-.02z" /></svg>
                        <p className="text-gray-700">
                            Web: <a href="http://www.seasanamachinery.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">www.seasanamachinery.com</a>
                        </p>
                    </div>

                </div>
            </div>
            
            {/* Product Disclaimer/Mission Card */}
            <div className="bg-white p-8 rounded-xl shadow-2xl border-t-4 border-amber-500 flex flex-col justify-between h-full">
                <div>
                    <h2 className="text-3xl font-bold text-blue-800 mb-6 border-b pb-2">
                        Commitment to Innovation
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Due to continuous innovation of our product technologies and in case of any upgrading of appearance or performance of the products listed in the catalogue, the actual upgraded product performances shall prevail.
                    </p>
                </div>

                <div className="mt-8 pt-4 border-t text-center">
                     <p className="text-2xl font-extrabold text-blue-600">
                        Seasana Machinery
                    </p>
                    <p className="text-sm text-gray-500 italic mt-1">
                        Partnering for a smarter tomorrow.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;