import React from 'react';
import { FileText, Clock, CheckCircle, AlertTriangle, TrendingUp } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const stats = [
    { label: 'Total Reports', value: '12', icon: FileText, color: 'blue', bgColor: 'bg-blue-50', iconColor: 'text-blue-600', textColor: 'text-blue-900' },
    { label: 'Pending', value: '4', icon: Clock, color: 'yellow', bgColor: 'bg-yellow-50', iconColor: 'text-yellow-600', textColor: 'text-yellow-900' },
    { label: 'Resolved', value: '7', icon: CheckCircle, color: 'green', bgColor: 'bg-green-50', iconColor: 'text-green-600', textColor: 'text-green-900' },
    { label: 'Under Investigation', value: '1', icon: AlertTriangle, color: 'red', bgColor: 'bg-red-50', iconColor: 'text-red-600', textColor: 'text-red-900' },
  ];

  const recentCases = [
    {
      id: 'CR001',
      title: 'Online Fraud Report',
      category: 'Cyber Crime',
      status: 'Under Investigation',
      date: '2024-12-19',
      priority: 'High'
    },
    {
      id: 'CR002',
      title: 'Vehicle Theft',
      category: 'Theft',
      status: 'Resolved',
      date: '2024-12-18',
      priority: 'Medium'
    },
    {
      id: 'CR003',
      title: 'Domestic Violence',
      category: 'Domestic Violence',
      status: 'Investigating',
      date: '2024-12-17',
      priority: 'Urgent'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Urgent': return 'bg-red-100 text-red-800';
      case 'High': return 'bg-orange-100 text-orange-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Resolved': return 'bg-green-100 text-green-800';
      case 'Under Investigation': return 'bg-blue-100 text-blue-800';
      case 'Investigating': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 space-y-8 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-lg text-gray-600">Welcome back, {user?.name}</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600 bg-white px-4 py-2 rounded-lg shadow-sm border">
          <TrendingUp size={16} />
          <span>Updated just now</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className={`${stat.bgColor} p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">{stat.label}</p>
                  <p className={`text-3xl font-bold ${stat.textColor}`}>{stat.value}</p>
                </div>
                <div className={`p-4 rounded-full bg-white shadow-md`}>
                  <Icon className={stat.iconColor} size={28} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Cases */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Recent Cases</h2>
          <p className="text-gray-600 mt-1">Your latest crime reports and their status</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Case ID
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Priority
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {recentCases.map((case_) => (
                <tr key={case_.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-blue-600">
                    {case_.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {case_.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {case_.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(case_.status)}`}>
                      {case_.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getPriorityColor(case_.priority)}`}>
                      {case_.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700">
                    {case_.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;