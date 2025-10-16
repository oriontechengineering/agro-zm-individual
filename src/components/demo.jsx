import React, { useState } from 'react';
import { Home, Users, CreditCard, FileText, Send, LogOut, Eye, Wallet, Menu, Bell, Settings, Search } from 'lucide-react';

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [accountFilter, setAccountFilter] = useState('all');
  const [user] = useState({ name: 'John Doe', avatar: '/api/placeholder/32/32' });

  // Sample data
  const accounts = [
    { id: 1, type: 'bank', name: 'Savings Account', balance: 125000, number: '***4567' },
    { id: 2, type: 'bank', name: 'Current Account', balance: 85000, number: '***8901' },
    { id: 3, type: 'mobile', name: 'MTN Mobile Money', balance: 45000, number: '0244***789' },
    { id: 4, type: 'mobile', name: 'AirtelTigo Money', balance: 12500, number: '0272***456' },
  ];

  const totalBalance = accounts.reduce((sum, acc) => sum + acc.balance, 0);
  const bankAccounts = accounts.filter(acc => acc.type === 'bank');
  const mobileAccounts = accounts.filter(acc => acc.type === 'mobile');
  const monthlySpending = 48750;

  const filteredAccounts = accountFilter === 'all' ? accounts 
    : accountFilter === 'bank' ? bankAccounts 
    : mobileAccounts;

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'accounts', label: 'Accounts', icon: Users },
    { id: 'transactions', label: 'Transactions', icon: CreditCard },
    { id: 'statements', label: 'Statements', icon: FileText },
    { id: 'send-money', label: 'Send Money', icon: Send },
  ];

  const formatAmount = (amount) => {
    return `GHS ${amount.toLocaleString()}`;
  };

  const getPageTitle = () => {
    const item = menuItems.find(item => item.id === currentPage);
    return item ? item.label : 'Dashboard';
  };

  const handleLogout = () => {
    alert('Logging out...');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-30 h-16">
        <div className="flex items-center justify-between h-full px-6">
          <div className="flex items-center gap-4">
            <button className="lg:hidden">
              <Menu size={20} className="text-gray-600" />
            </button>
            <div>
              <h1 className="text-sm font-normal text-gray-600 mb-0">Pages / {getPageTitle()}</h1>
              <h2 className="text-lg font-bold text-gray-900">{getPageTitle()}</h2>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2">
              <Search size={16} className="text-gray-500 mr-2" />
              <input 
                type="text" 
                placeholder="Type here..." 
                className="bg-transparent text-sm outline-none text-gray-700"
              />
            </div>
            <button className="relative p-2">
              <Bell size={18} className="text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <div className="w-8 h-8 bg-[#6A5ACD] rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-medium">JD</span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside className="fixed top-0 left-0 w-64 h-screen bg-white shadow-lg z-20 hidden lg:block">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-[#6A5ACD] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <h3 className="font-bold text-gray-900 text-lg">Banking App</h3>
          </div>
          
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                    currentPage === item.id
                      ? 'bg-gradient-to-r from-[#6A5ACD] to-[#8A7AED] text-white shadow-lg'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon size={18} />
                  {item.label}
                </button>
              );
            })}
            
            <hr className="my-6 border-gray-200" />
            
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200"
            >
              <LogOut size={18} />
              Logout
            </button>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="fixed top-16 left-0 lg:left-64 right-0 bottom-0 overflow-y-auto bg-gray-100">
        <div className="p-6">
          {currentPage === 'dashboard' && (
            <div>
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
                <div className="bg-gradient-to-r from-[#6A5ACD] to-[#8A7AED] p-6 rounded-2xl text-white shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white text-opacity-80 text-sm font-medium mb-1">Total Balance</p>
                      <h3 className="text-2xl font-bold">{formatAmount(totalBalance)}</h3>
                    </div>
                    <div className="bg-white bg-opacity-20 p-3 rounded-xl">
                      <Eye size={24} />
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm font-medium mb-1">Bank Accounts</p>
                      <h3 className="text-2xl font-bold text-gray-900">{bankAccounts.length}</h3>
                      <p className="text-green-500 text-sm font-medium">+12% from last month</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-xl">
                      <CreditCard size={24} className="text-blue-600" />
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm font-medium mb-1">Mobile Money</p>
                      <h3 className="text-2xl font-bold text-gray-900">{mobileAccounts.length}</h3>
                      <p className="text-green-500 text-sm font-medium">+8% from last month</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-xl">
                      <Wallet size={24} className="text-green-600" />
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm font-medium mb-1">Monthly Spending</p>
                      <h3 className="text-2xl font-bold text-gray-900">{formatAmount(monthlySpending)}</h3>
                      <p className="text-red-500 text-sm font-medium">-3% from last month</p>
                    </div>
                    <div className="bg-red-50 p-3 rounded-xl">
                      <Send size={24} className="text-red-600" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Account Overview */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Accounts Overview</h3>
                    <p className="text-gray-600 text-sm">Manage all your accounts in one place</p>
                  </div>
                  <div className="flex gap-2 mt-4 lg:mt-0">
                    <button
                      onClick={() => setAccountFilter('all')}
                      className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                        accountFilter === 'all'
                          ? 'bg-[#6A5ACD] text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      All Accounts
                    </button>
                    <button
                      onClick={() => setAccountFilter('bank')}
                      className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                        accountFilter === 'bank'
                          ? 'bg-[#6A5ACD] text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Bank Only
                    </button>
                    <button
                      onClick={() => setAccountFilter('mobile')}
                      className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                        accountFilter === 'mobile'
                          ? 'bg-[#6A5ACD] text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Mobile Money
                    </button>
                  </div>
                </div>

                {/* Account List */}
                <div className="space-y-4">
                  {filteredAccounts.map((account) => (
                    <div key={account.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl ${
                          account.type === 'bank' ? 'bg-blue-100' : 'bg-green-100'
                        }`}>
                          {account.type === 'bank' ? (
                            <CreditCard size={20} className="text-blue-600" />
                          ) : (
                            <Wallet size={20} className="text-green-600" />
                          )}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{account.name}</h4>
                          <p className="text-sm text-gray-600">{account.number}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-900 text-lg">{formatAmount(account.balance)}</p>
                        <p className="text-sm text-gray-500 capitalize">{account.type} Account</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Other Pages */}
          {currentPage !== 'dashboard' && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
              <div className="max-w-md mx-auto">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings size={24} className="text-gray-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{getPageTitle()}</h3>
                <p className="text-gray-600">This page is currently under development. Check back soon for updates!</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;