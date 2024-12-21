import React from 'react';

const CompanyTemplate = () => {
  return (
    <div className="w-full bg-white p-8 font-sans">
      {/* Title Section */}
      <div className="mb-8 border-b pb-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-indigo-600">XTransfer</h1>
          <div className="text-sm bg-yellow-50 text-yellow-600 px-3 py-1 rounded">
            Data Confidence: Medium (Industry Reports & Funding Data)
          </div>
        </div>
        <p className="text-gray-500 mt-2">Last Updated: December 2023</p>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-sm text-gray-600 mb-1">Annual Revenue (2023E)</h3>
          <p className="text-xl font-bold">$150-200M</p>
          <p className="text-sm text-green-600">~45% YoY</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-sm text-gray-600 mb-1">Transaction Volume</h3>
          <p className="text-xl font-bold">$40-50B</p>
          <p className="text-sm text-green-600">Annual TPV</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-sm text-gray-600 mb-1">Client Base</h3>
          <p className="text-xl font-bold">400,000+</p>
          <p className="text-sm text-gray-600">SME Customers</p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-2 gap-6">
        {/* Market Coverage */}
        <div className="bg-white rounded-lg">
          <h2 className="text-lg font-bold mb-4">Market Coverage</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Geography</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>Core: China, Hong Kong</li>
                <li>Strong: UK, US, Japan</li>
                <li>Growing: SEA, Europe</li>
                <li>Coverage: 130+ countries</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">
                Target Segments
              </h3>
              <ul className="list-disc pl-5 text-sm">
                <li>Export-oriented SMEs</li>
                <li>Cross-border E-commerce</li>
                <li>Trading Companies</li>
                <li>Digital Service Providers</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Product Stack */}
        <div className="bg-white rounded-lg">
          <h2 className="text-lg font-bold mb-4">Product Stack</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-gray-50 p-3 rounded">
                <h3 className="font-semibold text-sm">Collection</h3>
                <p className="text-xs text-gray-600">Global Account Network</p>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <h3 className="font-semibold text-sm">Payments</h3>
                <p className="text-xs text-gray-600">Cross-border Settlement</p>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <h3 className="font-semibold text-sm">Risk Management</h3>
                <p className="text-xs text-gray-600">AI-powered Systems</p>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <h3 className="font-semibold text-sm">Treasury</h3>
                <p className="text-xs text-gray-600">FX & Liquidity</p>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory & Compliance */}
        <div className="bg-white rounded-lg">
          <h2 className="text-lg font-bold mb-4">Regulatory Stack</h2>
          <div className="space-y-3">
            <div className="bg-gray-50 p-3 rounded">
              <h3 className="font-semibold">Key Licenses</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>UK FCA EMI License</li>
                <li>US MSB Licenses</li>
                <li>Hong Kong MSO</li>
                <li>Singapore MPI</li>
                <li>Japan Fund Transfer License</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Competitive Advantages */}
        <div className="bg-white rounded-lg">
          <h2 className="text-lg font-bold mb-4">Core Advantages</h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 p-3 rounded">
              <h3 className="font-semibold text-sm">Risk Control</h3>
              <ul className="list-disc pl-4 text-xs">
                <li>Proprietary AI System</li>
                <li>Real-time Monitoring</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <h3 className="font-semibold text-sm">Local Expertise</h3>
              <ul className="list-disc pl-4 text-xs">
                <li>China SME Focus</li>
                <li>Deep Industry Knowledge</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Developments & Strategy */}
      <div className="mt-6">
        <h2 className="text-lg font-bold mb-4">Strategic Focus</h2>
        <div className="bg-gray-50 p-4 rounded">
          <ul className="list-disc pl-5 text-sm space-y-2">
            <li>Global network expansion</li>
            <li>Product innovation in risk management</li>
            <li>SME financial services ecosystem</li>
            <li>Digital transformation initiatives</li>
          </ul>
        </div>
      </div>

      {/* Funding & Investment */}
      <div className="mt-6">
        <h2 className="text-lg font-bold mb-4">Investment Profile</h2>
        <div className="bg-gray-50 p-4 rounded">
          <ul className="list-disc pl-5 text-sm space-y-2">
            <li>Latest Round: Series D+ (2022)</li>
            <li>Total Funding: $200M+</li>
            <li>Valuation: $1.2-1.5B</li>
            <li>Key Investors: D1 Capital Partners, Gaorong Capital</li>
          </ul>
        </div>
      </div>

      {/* Data Sources */}
      <div className="mt-6 text-xs text-gray-500">
        Sources: Company Announcements, Funding Reports, Industry Analysis Note:
        Financial metrics are estimates based on market research and funding
        information
      </div>
    </div>
  );
};

export default CompanyTemplate;
