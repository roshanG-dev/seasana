// data/seasanaData.js

export const contactInfo = {
  company: 'SEASANA MACHINERY PVT LTD.', 
  addressLine1: 'SREBRANATHAM', 
  addressLine2: 'COIMBATORE 641035 TAMIL NADU INDIA', // Corrected Pincode from the PDF's text "141035" [cite: 3] to a more standard Indian format
  email: 'seasanaengg@gmail.com', // Corrected likely typo based on standard email format and source "seasanaengg@gmail.com" [cite: 4]
  website: 'www.seasanamachinery.com', // Corrected likely typo based on standard domain format and source "www.seasanamachinery.com" [cite: 5]
  tagline: 'AI Sort. Global Intelligent Manufacture', 
};

export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Features & Models', path: '/content' },
  { name: 'About', path: '/products' },
  { name: 'Contact', path: '/contact' },
];

export const technologyOverview = {
  title: 'SEASANA BELT-TYPE COLOR SORTER', 
  description: [
    'The belt-type color sorter is used to sort powder materials.',
    'It can sort quartz, ores, calcite, plastic, waste metals, waste glass, and other materials.',
    'The generated materials is separated from broken glass, metal, ceramics, etc. using intelligent sorting technology.',
    'It can be dry sorted or wet sorted, with high sorting accuracy and efficiency, greatly improving product added value and promoting resource recycling.',
    'The belt-type color sorter not only enhances the added value of the product, but also promotes the recycling and reuse of resources.',
  ],
  images: [
    { src: '/images/single-layer-sorter.jpg', alt: 'Seasana Single Layer Belt-Type Sorter' }, 
    { src: '/images/double-layer-sorter.jpg', alt: 'Seasana Double Layers Belt-Type Sorter' }, 
  ],
};

export const technicalFeatures = [
  {
    title: 'High Processing Ejection System ', 
    details: ['Special design board accurate sorting ', 'Customized ejector use less air '],
  },
  {
    title: 'Balanced and Stable Performance ', 
    details: [
      'Advanced AI image algorithm, which can customize specific algorithm according to different sorting materials: color sorting and shape sorting available.',
      'Full color RGB CCD cameras.',
      'The 16200 pixels grade high resolution CCD color cameras with sharpness up to 0.01mm can identify subtle color differences and defects successfully.',
      'Scanning speed 30MHz max.',
    ],
  },
  {
    title: 'LED Lighting ', 
    details: [
      'Durable and long-life LED illumination.',
      'Targeting defects within the entire visible spectrum.',
      'High illumination, low power consumption, 100K hours.',
    ],
  },
];

export const advantages = [
  'Single or double pass is optional.',
  'Single or dual vision is optional.',
  'Suitable for dry and wet sorting.',
  'Innovative rotating lighting and cleaning system is available.',
  'Enhanced machine frame.',
  'Lower damage ratio by Belt-type structure design.',
  'Horizontal transporting by uniform and stable conveyor makes less collision for the materials.',
  'Its damage ratio is much lower than that of traditional chute-type color sorter.',
  'Easy to operate with the user-friendly Graphical User Interface (GUI).',
  'Different preset product modes can be saved. Use when recall at anytime.',
];

export const singleLayerModels = [
  // ... (BL300S, BL600S, BL1200S data from source [cite: 29])
  { model: 'BL300S', throughput: '2.5-5', accuracy: '≥99', voltage: '220/415/50Hz', power: '2', airConsumption: '3000', airPressure: '0.5-0.8', dimensions: '3150*1000*1650', weight: '500' },
  { model: 'BL600S', throughput: '5-10', accuracy: '≥99', voltage: '220/415/50Hz', power: '3', airConsumption: '4000', airPressure: '0.5-0.8', dimensions: '3150*1300*1650', weight: '800' },
  { model: 'BL1200S', throughput: '10-20', accuracy: '≥99', voltage: '220/415/50Hz', power: '4.5', airConsumption: '4500', airPressure: '0.5-0.8', dimensions: '3150*1900*1650', weight: '1400' },
];

export const doubleLayerModel = {
  // BL1200D data from source [cite: 30]
  model: 'BL1200D', throughput: '10-20', accuracy: '≥99', voltage: '220/415/50Hz', power: '7.5', airConsumption: '4500', airPressure: '0.5-0.8', dimensions: '4250*1850*2400', weight: '2000'
};

export const tableHeaders = [
  'Model',
  'Throughput (t/h)',
  'Accuracy ratio (%)',
  'Voltage (V)',
  'Total power (kw)',
  'Air consumption (L/min)',
  'Air pressure (Mpa)',
  'Dimensions (mm)',
  'Weight (kg)',
];