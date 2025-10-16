import React, { useState } from 'react';
import { 
  Menu, X, ShoppingCart, DollarSign, TrendingUp, Package, 
  Bell, Wallet, ArrowUpRight, CheckCircle, Clock, ChevronRight,
  ShoppingBag, Leaf, CreditCard, BarChart3, Shield, Users, Home
} from 'lucide-react';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('landing');
  const [authMode, setAuthMode] = useState('login');

  const stats = [
    { title: 'Wallet Balance', value: 'K5,430', subtitle: 'Available funds', change: '+12.5%', icon: Wallet, trend: 'up' },
    { title: 'Total Sales', value: 'K12,340', subtitle: 'This month', change: '+8.2%', icon: TrendingUp, trend: 'up' },
    { title: 'Total Purchases', value: 'K6,890', subtitle: 'This month', change: '', icon: ShoppingCart },
    { title: 'Active Orders', value: '3', subtitle: 'Pending delivery', change: '', icon: Package },
  ];

  const recentTransactions = [
    { name: 'Hybrid Maize Seeds', type: 'Purchase', date: '2025-10-05', amount: 'K450', status: 'Completed' },
    { name: 'Maize - 50kg', type: 'Sale', date: '2025-10-04', amount: 'K600', status: 'Pending' },
    { name: 'NPK Fertilizer', type: 'Purchase', date: '2025-10-03', amount: 'K1,200', status: 'Completed' },
  ];

  const products = [
    { name: 'Hybrid Maize Seeds SC627', supplier: 'AgriTech Zambia', category: 'Seeds', price: 450, stock: 'In Stock', verified: true },
    { name: 'NPK Fertilizer 20-10-10', supplier: 'FarmSupply Ltd', category: 'Fertilizers', price: 1200, stock: 'In Stock', verified: true },
    { name: 'D Compound Fertilizer', supplier: 'Zambia Agro Supplies', category: 'Fertilizers', price: 980, stock: 'In Stock', verified: true },
    { name: 'Herbicide - Roundup', supplier: 'FarmChem Solutions', category: 'Chemicals', price: 350, stock: 'In Stock', verified: true },
    { name: 'Groundnut Seeds', supplier: 'Seed Co Zambia', category: 'Seeds', price: 280, stock: 'Out of Stock', verified: true },
    { name: 'Irrigation System Kit', supplier: 'AgriEquip Zambia', category: 'Equipment', price: 2500, stock: 'In Stock', verified: true },
  ];

  const transactions = [
    { date: '2025-10-05', type: 'Purchase', description: 'Hybrid Maize Seeds SC627', reference: 'FRA2025-001', amount: '-K450', status: 'Completed' },
    { date: '2025-10-04', type: 'Sale', description: 'Maize - 50kg', reference: 'SALE2025-045', amount: '+K600', status: 'Pending' },
    { date: '2025-10-03', type: 'Purchase', description: 'NPK Fertilizer 20-10-10', reference: 'FRA2025-002', amount: '-K1,200', status: 'Completed' },
    { date: '2025-10-02', type: 'Sale', description: 'Groundnuts - 100kg', reference: 'SALE2025-044', amount: '+K1,450', status: 'Completed' },
    { date: '2025-10-01', type: 'Purchase', description: 'D Compound Fertilizer', reference: 'FRA2025-003', amount: '-K980', status: 'Completed' },
    { date: '2025-09-30', type: 'Sale', description: 'Soybean - 75kg', reference: 'SALE2025-043', amount: '+K890', status: 'Completed' },
  ];

  const provinces = ['Central', 'Copperbelt', 'Eastern', 'Luapula', 'Lusaka', 'Muchinga', 'Northern', 'North-Western', 'Southern', 'Western'];

  const LandingPage = () => (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Agro-Hub Zambia</span>
            </div>
            <button
              onClick={() => setCurrentPage('auth')}
              className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="w-6 h-6" />
            <span className="text-sm font-semibold tracking-wide uppercase">Government-Backed Platform</span>
          </div>
          <h1 className="text-5xl font-bold text-center mb-6">
            Empowering Zambian Farmers Through Digital Innovation
          </h1>
          <p className="text-xl text-center text-green-50 mb-8 max-w-3xl mx-auto">
            Buy genuine farming inputs, sell your produce to verified buyers, and receive secure payments. 
            Join Zambia's transparent agricultural ecosystem today.
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setCurrentPage('auth')}
              className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition shadow-lg"
            >
              Get Started
            </button>
            <button
              onClick={() => { setIsLoggedIn(true); setCurrentPage('marketplace'); }}
              className="bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-800 transition border-2 border-white"
            >
              Browse Marketplace
            </button>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-green-100">Verified Suppliers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="text-green-100">Active Farmers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">K2.5M</div>
              <div className="text-green-100">Transactions</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Agro-Hub Zambia?</h2>
            <p className="text-xl text-gray-600">A comprehensive digital platform designed to modernize Zambia's agriculture value chain</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Suppliers</h3>
              <p className="text-gray-600">Purchase genuine farming inputs from government-approved suppliers only</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Market Access</h3>
              <p className="text-gray-600">Sell your produce directly to FRA and verified private buyers at fair prices</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparent Trading</h3>
              <p className="text-gray-600">Eliminate middlemen and corruption with blockchain-verified transactions</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Payments</h3>
              <p className="text-gray-600">Receive timely payments directly to your account upon delivery confirmation</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Empowering Farmers, Transforming Agriculture</h2>
              <p className="text-lg text-gray-600 mb-8">
                Agro-Hub Zambia connects farmers with verified suppliers and buyers in a transparent, 
                secure ecosystem backed by the Ministry of Agriculture.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  <span className="text-gray-700">Government-backed security and trust</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  <span className="text-gray-700">Quality-assured farming inputs</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  <span className="text-gray-700">Direct market access to FRA</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  <span className="text-gray-700">Transparent pricing and payments</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  <span className="text-gray-700">Real-time market information</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  <span className="text-gray-700">Digital record keeping</span>
                </div>
              </div>
            </div>
            <div className="bg-green-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Platform Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-bold text-green-600 mb-2">5,000+</div>
                  <div className="text-gray-600">Registered Farmers</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-600 mb-2">150+</div>
                  <div className="text-gray-600">Verified Suppliers</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-600 mb-2">K2.5M</div>
                  <div className="text-gray-600">Total Transactions</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
                  <div className="text-gray-600">Payment Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-4">About</h4>
              <ul className="space-y-2 text-sm">
                <li>About Agro-Hub</li>
                <li>Ministry Partnership</li>
                <li>FRA Integration</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Farmers</h4>
              <ul className="space-y-2 text-sm">
                <li>Register</li>
                <li>Buy Inputs</li>
                <li>Sell Produce</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Compliance</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">© 2025 Agro-Hub Zambia. A Government of Zambia Initiative. All rights reserved.</p>
            <p className="text-sm text-gray-500">Powered by Oriontech Engineering</p>
          </div>
        </div>
      </footer>
    </div>
  );

  const AuthPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
            <Leaf className="w-8 h-8 text-white" />
          </div>
          <span className="text-2xl font-bold text-green-800">Agro-Hub Zambia</span>
        </div>
        <p className="text-center text-gray-600 mb-6">Your digital agricultural ecosystem</p>

        <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setAuthMode('login')}
            className={`flex-1 py-2 rounded-md font-semibold transition ${
              authMode === 'login' ? 'bg-white shadow-sm text-green-600' : 'text-gray-600'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setAuthMode('signup')}
            className={`flex-1 py-2 rounded-md font-semibold transition ${
              authMode === 'signup' ? 'bg-white shadow-sm text-green-600' : 'text-gray-600'
            }`}
          >
            Sign Up
          </button>
        </div>

        {authMode === 'login' ? (
          <form onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); setCurrentPage('dashboard'); }}>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Welcome Back</h3>
            <p className="text-gray-600 mb-6">Login to access your dashboard</p>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Login
            </button>
          </form>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); setCurrentPage('dashboard'); }}>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Create Account</h3>
            <p className="text-gray-600 mb-6">Register as a farmer on Agro-Hub Zambia</p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Mwansa"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">National Registration Card (NRC)</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="123456/78/9"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Province</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                <option value="">Select your province</option>
                {provinces.map(prov => (
                  <option key={prov} value={prov}>{prov}</option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Create a strong password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Sign Up
            </button>
          </form>
        )}

        <p className="text-center text-sm text-gray-500 mt-6">Powered by Oriontech Engineering</p>
      </div>
    </div>
  );

  const Header = () => (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-green-800">Agro-Hub Zambia</span>
          </div>

          <nav className="hidden md:flex items-center space-x-1">
            <button
              onClick={() => setCurrentPage('dashboard')}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                currentPage === 'dashboard' ? 'bg-green-50 text-green-600' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setCurrentPage('marketplace')}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                currentPage === 'marketplace' ? 'bg-green-50 text-green-600' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              Marketplace
            </button>
            <button
              onClick={() => setCurrentPage('sell')}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                currentPage === 'sell' ? 'bg-green-50 text-green-600' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              Sell Produce
            </button>
            <button
              onClick={() => setCurrentPage('transactions')}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                currentPage === 'transactions' ? 'bg-green-50 text-green-600' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              Transactions
            </button>
            <button
              onClick={() => { setIsLoggedIn(false); setCurrentPage('landing'); }}
              className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium transition"
            >
              Logout
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="relative p-2 hover:bg-gray-100 rounded-lg">
              <Bell className="w-5 h-5 text-gray-700" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold">
              JM
            </div>
          </div>
        </div>
      </div>
    </header>
  );

  const DashboardPage = () => (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back, John Mwanza</h1>
        <p className="text-gray-600">Here's what's happening with your farm today</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                stat.trend === 'up' ? 'bg-green-50' : 'bg-blue-50'
              }`}>
                <stat.icon className={`w-6 h-6 ${stat.trend === 'up' ? 'text-green-600' : 'text-blue-600'}`} />
              </div>
              {stat.change && (
                <div className={`flex items-center space-x-1 text-sm ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-gray-600'
                }`}>
                  {stat.trend === 'up' && <ArrowUpRight className="w-4 h-4" />}
                  <span className="font-semibold">{stat.change}</span>
                </div>
              )}
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
            <div className="text-sm font-medium text-gray-900">{stat.title}</div>
            <div className="text-xs text-gray-500 mt-1">{stat.subtitle}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Recent Transactions</h2>
              <p className="text-sm text-gray-600">Your latest activities</p>
            </div>
            <button className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center">
              View All <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          <div className="space-y-4">
            {recentTransactions.map((txn, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    txn.type === 'Purchase' ? 'bg-red-50' : 'bg-green-50'
                  }`}>
                    {txn.type === 'Purchase' ? (
                      <ShoppingCart className="w-6 h-6 text-red-600" />
                    ) : (
                      <DollarSign className="w-6 h-6 text-green-600" />
                    )}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{txn.name}</div>
                    <div className="text-sm text-gray-600">{txn.type} • {txn.date}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-lg font-bold ${
                    txn.type === 'Purchase' ? 'text-red-600' : 'text-green-600'
                  }`}>
                    {txn.amount}
                  </div>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                    txn.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {txn.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <p className="text-sm text-gray-600 mb-6">What would you like to do?</p>

          <div className="space-y-3">
            <button
              onClick={() => setCurrentPage('marketplace')}
              className="w-full flex items-center justify-between p-4 bg-green-50 hover:bg-green-100 rounded-lg transition group"
            >
              <div className="flex items-center space-x-3">
                <ShoppingBag className="w-5 h-5 text-green-600" />
                <span className="font-medium text-gray-900">Buy Farming Inputs</span>
              </div>
              <ChevronRight className="w-5 h-5 text-green-600 group-hover:translate-x-1 transition" />
            </button>

            <button
              onClick={() => setCurrentPage('sell')}
              className="w-full flex items-center justify-between p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition group"
            >
              <div className="flex items-center space-x-3">
                <Leaf className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-gray-900">Sell Your Produce</span>
              </div>
              <ChevronRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition" />
            </button>

            <button className="w-full flex items-center justify-between p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition group">
              <div className="flex items-center space-x-3">
                <Wallet className="w-5 h-5 text-purple-600" />
                <span className="font-medium text-gray-900">Top Up Wallet</span>
              </div>
              <ChevronRight className="w-5 h-5 text-purple-600 group-hover:translate-x-1 transition" />
            </button>

            <button className="w-full flex items-center justify-between p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition group">
              <div className="flex items-center space-x-3">
                <BarChart3 className="w-5 h-5 text-orange-600" />
                <span className="font-medium text-gray-900">View Market Prices</span>
              </div>
              <ChevronRight className="w-5 h-5 text-orange-600 group-hover:translate-x-1 transition" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const MarketplacePage = () => (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Marketplace</h1>
        <p className="text-gray-600">Browse and purchase genuine farming inputs from verified suppliers across Zambia</p>
      </div>

      <div className="flex gap-4 mb-6">
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
          <option>All Categories</option>
          <option>Seeds</option>
          <option>Fertilizers</option>
          <option>Chemicals</option>
          <option>Equipment</option>
        </select>
        <button className="px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition">
          Featured
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition">
            <div className="bg-gray-100 h-48 flex items-center justify-center relative">
              <Package className="w-16 h-16 text-gray-400" />
              <div className="absolute top-3 left-3">
                {product.verified && (
                  <div className="flex items-center space-x-1 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                    <CheckCircle className="w-3 h-3" />
                    <span>Verified</span>
                  </div>
                )}
              </div>
              <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded text-xs font-medium text-gray-700">
                {product.category}
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-gray-900 mb-1">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-4">by {product.supplier}</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-gray-900">K{product.price}</div>
                  <span className={`text-sm font-medium ${
                    product.stock === 'In Stock' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {product.stock}
                  </span>
                </div>
                <button
                  disabled={product.stock === 'Out of Stock'}
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    product.stock === 'In Stock'
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {product.stock === 'In Stock' ? 'Add to Cart' : 'Notify Me'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="px-8 py-3 border-2 border-green-600 text-green-600 rounded-lg font-semibold hover:bg-green-50 transition">
          Load More Products
        </button>
      </div>
    </div>
  );

  const SellProducePage = () => (
    <div className="max-w-3xl mx-auto">
      <button
        onClick={() => setCurrentPage('dashboard')}
        className="flex items-center text-green-600 hover:text-green-700 font-medium mb-6"
      >
        <ChevronRight className="w-5 h-5 rotate-180" />
        Back to Dashboard
      </button>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">List Your Produce</h1>
        <p className="text-gray-600 mb-8">Share your harvest with the community and connect with buyers</p>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="e.g., Fresh Maize"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category <span className="text-red-500">*</span>
            </label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
              <option value="">Select category</option>
              <option>Vegetables</option>
              <option>Fruits</option>
              <option>Grains</option>
              <option>Legumes</option>
              <option>Herbs</option>
              <option>Livestock</option>
              <option>Dairy</option>
              <option>Other</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantity <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Unit <span className="text-red-500">*</span>
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                <option value="">Select unit</option>
                <option>Kilograms (kg)</option>
                <option>Grams (g)</option>
                <option>Pounds (lbs)</option>
                <option>Bags</option>
                <option>Crates</option>
                <option>Pieces</option>
                <option>Bunches</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price per Unit (ZMW) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              step="0.01"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="15.00"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description (Optional)
            </label>
            <textarea
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              rows="4"
              placeholder="Add details about your produce..."
            ></textarea>
            <p className="text-sm text-gray-500 mt-1">0/500 characters</p>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition text-lg"
          >
            List Produce
          </button>
        </form>
      </div>
    </div>
  );

  const TransactionsPage = () => (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Transaction History</h1>
        <p className="text-gray-600">View all your purchases and sales transactions</p>
      </div>

      <div className="flex justify-between items-center mb-6">
        <button className="px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition">
          All Transactions
        </button>
        <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition flex items-center">
          <Package className="w-4 h-4 mr-2" />
          Export
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Type</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Description</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Reference</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Amount</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {transactions.map((txn, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900">{txn.date}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      txn.type === 'Purchase' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {txn.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-900">{txn.description}</td>
                  <td className="px-6 py-4">
                    <code className="px-2 py-1 bg-gray-100 rounded text-xs">{txn.reference}</code>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`font-semibold ${
                      txn.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {txn.amount}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      txn.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {txn.status === 'Completed' ? (
                        <CheckCircle className="w-3 h-3 mr-1" />
                      ) : (
                        <Clock className="w-3 h-3 mr-1" />
                      )}
                      {txn.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const Footer = () => (
    <footer className="bg-white border-t border-gray-200 mt-12 py-6">
      <div className="px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
        Powered by Oriontech Engineering
      </div>
    </footer>
  );

  if (!isLoggedIn) {
    if (currentPage === 'auth') {
      return <AuthPage />;
    }
    return <LandingPage />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentPage === 'dashboard' && <DashboardPage />}
        {currentPage === 'marketplace' && <MarketplacePage />}
        {currentPage === 'sell' && <SellProducePage />}
        {currentPage === 'transactions' && <TransactionsPage />}
      </main>
      <Footer />
    </div>
  );
};

export default App;