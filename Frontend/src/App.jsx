import { useState } from 'react';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subscribe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      <header className={`py-6 px-4 shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Tailwind Test App</h1>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        {/* Tabs */}
        <div className="flex border-b mb-8">
          {['home', 'features', 'contact'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-medium ${activeTab === tab 
                ? (darkMode ? 'text-blue-400 border-b-2 border-blue-400' : 'text-blue-600 border-b-2 border-blue-600') 
                : (darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-800')}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'home' && (
          <section>
            <h2 className="text-3xl font-bold mb-6">Welcome to Tailwind</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[1, 2, 3].map(item => (
                <div 
                  key={item} 
                  className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
                >
                  <h3 className="text-xl font-semibold mb-2">Feature {item}</h3>
                  <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <button className={`px-4 py-2 rounded ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white`}>
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'features' && (
          <section>
            <h2 className="text-3xl font-bold mb-6">Our Features</h2>
            <ul className="space-y-4">
              {['Responsive Design', 'Dark Mode', 'Customizable', 'Fast Performance'].map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className={`w-6 h-6 rounded-full mr-3 flex items-center justify-center ${darkMode ? 'bg-blue-600' : 'bg-blue-500'}`}>
                    <span className="text-white text-sm">✓</span>
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </section>
        )}

        {activeTab === 'contact' && (
          <section>
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <form className="max-w-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'}`}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'}`}
                />
              </div>
              <div className="mb-6 flex items-center">
                <input
                  type="checkbox"
                  id="subscribe"
                  name="subscribe"
                  checked={formData.subscribe}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="subscribe">Subscribe to newsletter</label>
              </div>
              <button
                type="button"
                className={`px-6 py-3 rounded-lg font-medium ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
              >
                Submit
              </button>
            </form>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className={`py-6 px-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} Tailwind Test App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}