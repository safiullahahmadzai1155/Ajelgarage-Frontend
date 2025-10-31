import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
      <div className="max-w-2xl w-full">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Welcome to My App
          </h1>
          <p className="text-lg text-gray-600">
            A modern React application with Tailwind CSS
          </p>
        </header>

        {/* Main Content */}
        <main className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                Feature One
              </h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
                Learn More
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-green-50 p-6 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-green-800 mb-3">
                Feature Two
              </h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <button className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center">
          <p className="text-gray-500 text-sm">
            © 2024 My App. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;