// pages/ProductsPage.jsx
import React from 'react';
import RiceApplicationImage from '../asserts/rice_app.jpg'; 
import TParamImage from '../asserts/t_peram.jpg'; 
import SampleImage from '../asserts/sample.jpg'; // <-- New Image Import

const technicalCharacteristics = [
    {
        title: 'Camera & Sensor Description',
        icon: (
            <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.218A2 2 0 0110.373 3h3.254a2 2 0 011.664.89l.812 1.218A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
        ),
        details: [
            'High resolution camera with industrial lens (16,200-pixel).',
            'Trichromatic true color RGB.',
            '2 pieces of cameras per chute.',
            '30MHz Scanning speed.',
            'CCD image acquisition system.',
            'Camera operation lines/sec: 12,000 times/sec.',
        ],
    },
    {
        title: 'Algorithm and Identification Size',
        icon: (
            <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6a2 2 0 00-2-2H5a2 2 0 00-2 2v13a2 2 0 002 2h4.136a1 1 0 01.872.502l.745 1.583a1 1 0 00.897.502h2.51a1 1 0 00.897-.502l.745-1.583a1 1 0 01.872-.502H19a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v13M9 6v10.5" /></svg>
        ),
        details: [
            'AI based image processing.',
            'UHD image capturing to identify 0.02 mm diameters.',
            'Autonomous internet control and computing technology.',
            'Realization of online operations, online monitoring, online services, and free upgrades.',
        ],
    },
    {
        title: 'LED Lighting & Dust Extraction',
        icon: (
            <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M4.293 20.707L18 7M10 20h4a2 2 0 002-2V6a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
        ),
        details: [
            'High illumination, low power consumption, 100K hours life.',
            'Targeting defects within the entire visible spectrum.',
            'Specially designed aspiration system for effective dust extraction.',
            'Sealed control and optical cabinets ensures robust machine and dust containment.',
        ],
    },
    {
        title: 'Simple and Easy to Use (GUI)',
        icon: (
            <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
        ),
        details: [
            'Easy to operate with the user-friendly Graphical User Interface (GUI).',
            'Different preset product modes can be saved. Use when recall at anytime.',
        ],
    },
];

const miSeriesData = {
    headers: [
        "Model", "Power (kw)", "Weight (kg)", "Dimension (L*W*H) (mm)",
        "Throughput (t/h)", "Voltage (V)", "Air consumption (m³/min)", "Air pressure (Mpa)"
    ],
    rows: [
        { model: "MI-1", power: 0.9, weight: 280, dimension: "935*1515*1700", throughput: "1-3", voltage: "220V/50Hz", airConsumption: "<0.5", airPressure: "0.5-0.8" },
        { model: "MI-2", power: 1.5, weight: 400, dimension: "1350*1644*1700", throughput: "1.3-4", voltage: "220V/50Hz", airConsumption: "<1.0", airPressure: "0.5-0.8" },
        { model: "MI-3", power: 2.1, weight: 600, dimension: "1650*1644*1950", throughput: "1.5-5", voltage: "220V/50Hz", airConsumption: "<1.5", airPressure: "0.5-0.8" },
        { model: "MI-4", power: 2.5, weight: 825, dimension: "2070*1644*1950", throughput: "2.5-6.5", voltage: "220V/50Hz", airConsumption: "<2.0", airPressure: "0.5-0.8" },
        { model: "MI-5", power: 3, weight: 1050, dimension: "2490*1644*1950", throughput: "3-8", voltage: "220V/50Hz", airConsumption: "<2.5", airPressure: "0.5-0.8" },
        { model: "MI-6", power: 4, weight: 1550, dimension: "2840*1644*1950", throughput: "5-12", voltage: "220V/50Hz", airConsumption: "<3.0", airPressure: "0.5-0.8" },
        { model: "MI-7", power: 5, weight: 1650, dimension: "3150*1644*1950", throughput: "5.5-13.5", voltage: "220V/50Hz", airConsumption: "<3.5", airPressure: "0.5-0.8" },
        { model: "MI-8", power: 6.5, weight: 1750, dimension: "3452*1644*1950", throughput: "6-14", voltage: "220V/50Hz", airConsumption: "<4.0", airPressure: "0.5-0.8" },
        { model: "MI-10", power: 8.2, weight: 2000, dimension: "4092*1644*1950", throughput: "8-16", voltage: "220V/50Hz", airConsumption: "<5.0", airPressure: "0.5-0.8" }
    ],
    remark: "The capacity per module listed above is based on tests of input material with 5% contamination." 
};

const ProductsPage = () => {
  return (
    <div className="min-h-[80vh] bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Title Section */}
        {/* <h2 className="text-5xl font-extrabold text-blue-800 mb-12 text-center">
          Product Applications
        </h2> */}
        <p className="text-xl text-gray-700 text-center mb-16 max-w-3xl mx-auto">
          While the Seasana sorter handles minerals and recyclables, it is also highly effective in traditional agricultural applications.
        </p>
        
        {/* Rice Application and Feature Cards */}
        <div className="bg-white p-8 rounded-xl shadow-2xl border-t-8 border-amber-500 mb-20">
          <div className="md:flex md:space-x-10 items-center">
            
            {/* Image Display */}
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h3 className="text-3xl font-bold text-gray-900 mb-4 border-b-2 pb-2">
                Rice Applications
              </h3>
              <img
                src={RiceApplicationImage}
                alt="Rice Applications - Color Sorting"
                className="w-full h-auto rounded-lg shadow-xl transition duration-500 transform hover:scale-[1.01]"
              />
              <p className="mt-4 text-sm text-gray-500 italic">
                A common use case for high-precision belt sorters.
              </p>
            </div>
            
            {/* Feature Cards (PREMIUM LIST DESIGN) */}
            <div className="md:w-1/2">
              <h4 className="text-2xl font-semibold text-blue-700 mb-4">Why Belt Sorter for Rice?</h4>
              
              <div className="space-y-4">
                
                {/* Feature 1: Gentle Handling */}
                <div className="flex items-start p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-x-0.5 border-l-4 border-blue-500">
                    <svg className="flex-shrink-0 w-6 h-6 text-amber-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <p className="ml-4 text-gray-700 text-base">
                        <strong className="text-gray-900">Gentle Handling:</strong> Belt structure minimizes collision and damage to delicate grains.
                    </p>
                </div>

                {/* Feature 2: High Accuracy */}
                <div className="flex items-start p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-x-0.5 border-l-4 border-blue-500">
                    <svg className="flex-shrink-0 w-6 h-6 text-amber-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <p className="ml-4 text-gray-700 text-base">
                        <strong className="text-gray-900">High Accuracy:</strong> Detects subtle defects like yellow rice, chalky grains, and foreign materials (stones, glass).
                    </p>
                </div>

                {/* Feature 3: Consistent Flow */}
                <div className="flex items-start p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-x-0.5 border-l-4 border-blue-500">
                    <svg className="flex-shrink-0 w-6 h-6 text-amber-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <p className="ml-4 text-gray-700 text-base">
                        <strong className="text-gray-900">Consistent Flow:</strong> Provides uniform material transportation for better scanning efficiency.
                    </p>
                </div>

                {/* Feature 4: Versatility */}
                <div className="flex items-start p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-x-0.5 border-l-4 border-blue-500">
                    <svg className="flex-shrink-0 w-6 h-6 text-amber-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <p className="ml-4 text-gray-700 text-base">
                        <strong className="text-gray-900">Versatility:</strong> Can be configured to sort various rice types based on color, shape, and size defects.
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- SECTION: TECHNICAL CHARACTERISTICS --- */}
        <section className="py-10">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-10 text-center border-b-4 border-blue-500 inline-block mx-auto pb-2">
                TECHNICAL CHARACTERISTICS
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {technicalCharacteristics.map((characteristic, index) => (
                    <div 
                        key={index} 
                        className="p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:translate-y-[-2px] border-b-4 border-amber-500"
                    >
                        <div className="flex items-center mb-4 space-x-4">
                            {characteristic.icon}
                            <h3 className="text-xl font-bold text-blue-800">{characteristic.title}</h3>
                        </div>
                        <ul className="space-y-2 text-gray-700 list-inside ml-4">
                            {characteristic.details.map((detail, dIndex) => (
                                <li key={dIndex} className="flex items-start text-base">
                                    <span className="flex-shrink-0 text-green-500 mr-2 font-bold">●</span>
                                    {detail}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>

        {/* --- SECTION: PRODUCT PARAMETERS (MI Series) --- */}
        <section className="py-10 mt-16">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-10 text-center border-b-4 border-amber-500 inline-block mx-auto pb-2">
                Product Parameters (MI Series)
            </h2>

            <div className="bg-white p-8 rounded-xl shadow-2xl">
                
<div className="mb-8 border-b pb-6">
                    <h3 className="text-3xl font-semibold text-blue-700 mb-4">MI Series Layout</h3>
                    <img 
                        src={TParamImage}
                        alt="Technical Parameters Layout for MI Series"
                        // FIX: Use w-full (or max-w-full) AND max-w-xl.
                        // w-full ensures it shrinks to 100% of the parent column width on mobile.
                        className="w-full max-w-xl h-auto rounded-lg shadow-xl block mx-auto transition duration-500 transform hover:scale-[1.02]"
                    />
                    <p className="mt-4 text-sm text-gray-500 italic text-center">
                        Diagram showing the dimensions and layout of the MI Series sorter.
                    </p>
                </div>

                {/* Table */}
                <h3 className="text-3xl font-semibold text-blue-700 mb-4">MI Series Specifications</h3>
                <div className="overflow-x-auto shadow-xl rounded-lg border border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-blue-100">
                            <tr>
                                {miSeriesData.headers.map((header) => (
                                    <th 
                                        key={header} 
                                        className="px-4 py-3 text-left text-xs font-bold text-blue-700 uppercase tracking-wider whitespace-nowrap"
                                    >
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {miSeriesData.rows.map((item, index) => (
                                <tr key={index} className="hover:bg-blue-50 transition duration-150">
                                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{item.model}</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">{item.power}</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">{item.weight}</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">{item.dimension}</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">{item.throughput}</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">{item.voltage}</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">{item.airConsumption}</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">{item.airPressure}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                
                <p className="mt-6 text-sm text-gray-600 italic">
                    <span className="font-semibold">Remark:</span> {miSeriesData.remark}
                </p>

            </div>
        </section>

        {/* --- NEW SECTION: EXAMPLES OF SORTING --- */}
        <section className="py-10 mt-16">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-6 text-center border-b-4 border-blue-500 inline-block mx-auto pb-2">
                EXAMPLES OF SORTING
            </h2>
            
            <p className="text-lg text-gray-700 text-center mb-10 max-w-4xl mx-auto">
                A visual guide illustrating the variety of materials and defects successfully separated by Seasana belt-type sorters.
            </p>

            <div className="bg-white p-6 rounded-xl shadow-2xl">
                <img 
                    src={SampleImage}
                    alt="Examples of various materials and color sorting outcomes"
                    // Ensures image is responsive and centered for a clean display
                    className="w-full h-auto rounded-lg shadow-xl block mx-auto"
                />
            </div>
        </section>

      </div>
    </div>
  );
};

export default ProductsPage;