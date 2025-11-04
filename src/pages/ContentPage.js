// pages/ContentPage.jsx
import React from 'react';
import {
    technicalFeatures,
    advantages,
    singleLayerModels,
    doubleLayerModel,
    tableHeaders
} from '../data/seasanaData';

const ModelTable = ({ title, data, description = null }) => (
    <div className="mb-12">
        <h4 className="text-3xl font-semibold text-blue-600 mb-4 border-l-4 border-amber-500 pl-4">{title}</h4>

        {description && (
            <div className="bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-100">
                <p className='text-gray-700'>
                    Double-layer design: upper-layer best sorting, lower-layer for re-selection, optimized the carry-out, and greatly improved color selection accuracy. The double-layer perfectly fits the selection algorithm, and make the easy exchange of accept products and rejected products, which makes better performance.
                </p>
            </div>
        )}

        {!description && (
            <div className="bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-100">
                <p className='text-gray-700'>
                    The belt-type color sorter is used to sort power materials. It can sort quartz,ores ,calcite,platic,waste metals,
                    waste glass, and other materials. The generated materials
                    is separated from broken glass,metal, ceramics, etc.
                    using intelligent sorting technology. It can be dry sorted
                    or wet sorted, with high sorting accuracy and efficiency,
                    greatly improving product added value and promoting
                    resource recycling. The belt-type color sorter not only
                    enhances the added value of the product, but also
                    promotes the recycling and reuse of resources.
                </p>
            </div>
        )}

        <div className="overflow-x-auto shadow-xl rounded-lg border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-blue-100">
                    <tr>
                        {tableHeaders.map((header) => (
                            <th key={header} className="px-4 py-3 text-left text-xs font-bold text-blue-700 uppercase tracking-wider">
                                {header.replace('(t/h)', '').replace('(kw)', '').replace('(L/min)', '').replace('(Mpa)', '').replace('(mm)', '').replace('(kg)', '')}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {(Array.isArray(data) ? data : [data]).map((item) => (
                        <tr key={item.model} className="hover:bg-blue-50 transition duration-150">
                            <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.model}</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">{item.throughput}</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">{item.accuracy}</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">{item.voltage}</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">{item.power}</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">{item.airConsumption}</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">{item.airPressure}</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">{item.dimensions}</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">{item.weight}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);


const ContentPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4">

                {/* Product Models Section */}
                <h2 className="text-5xl font-extrabold text-blue-800 mb-12 text-center border-b-4 border-amber-500 inline-block mx-auto pb-3">
                    Product Specifications
                </h2>

                <ModelTable title="Single Layer High Speed Sorter" data={singleLayerModels} description={false} />
                <ModelTable title="Double Layers High Speed Sorter" data={doubleLayerModel} description={true} />


                {/* Technical Features & Advantages Section */}
                <h2 className="text-5xl font-extrabold text-blue-800 mt-20 mb-12 text-center border-b-4 border-amber-500 inline-block mx-auto pb-3">
                    Technical Features & Advantages
                </h2>

                <p className="text-lg text-gray-700 max-w-4xl mx-auto text-center mb-10">
                    Seasana belt-type sorting technology provides our customer with high accuracy, top efficiency and high yield. Considering the dusty working environment and complicity of the raw material, the machine applies the rotating cleaning system and optimized algorithm.
                </p>

                <div className="grid md:grid-cols-2 gap-10">

                    {/* Technical Features Column */}
                    <div>
                        <h4 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 pb-2">Technical Features</h4>
                        <div className="space-y-6">
                            {technicalFeatures.map((feature, index) => (
                                <div key={index} className="bg-white p-5 rounded-lg shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                                    <h5 className="text-xl font-bold text-blue-700">{feature.title}</h5>
                                    <ul className="mt-2 text-gray-600 list-disc list-inside ml-4 space-y-1">
                                        {feature.details.map((detail, dIndex) => (
                                            <li key={dIndex} className="text-sm">{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Advantages Column */}
                    <div>
                        <h4 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 pb-2">Operational Advantages (Simple & Stable)</h4>
                        <div className="space-y-3">
                            {advantages.map((advantage, index) => (
                                <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-md hover:bg-blue-50 transition duration-150">
                                    <svg className="flex-shrink-0 h-6 w-6 text-amber-500 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    <p className="text-gray-700 text-base leading-relaxed">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentPage;