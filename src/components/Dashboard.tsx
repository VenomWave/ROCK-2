import React from 'react';
import { FileText, Clock, CheckCircle, AlertTriangle, TrendingUp } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const stats = [
    { label: 'Total', value: '12', icon: FileText, bg: 'bg-blue-50', icon: 'text-blue-600', text: 'text-blue-900' },
    { label: 'Pending', value: '4', icon: Clock, bg: 'bg-yellow-50', icon: 'text-yellow-600', text: 'text-yellow-900' },
    { label: 'Resolved', value: '7', icon: CheckCircle, bg: 'bg-green-50', icon: 'text-green-600', text: 'text-green-900' },
    { label: 'Active', value: '1', icon: AlertTriangle, bg: 'bg-red-50', icon: 'text-red-600', text: 'text-red-900' },
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
    <div className="p-4 space-y-6 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back, {user?.name}</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <TrendingUp size={16} />
          <span>Updated just now</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className={`${stat.bg} p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-gray-600">{stat.label}</p>
                  <p className={`text-2xl font-bold ${stat.text}`}>{stat.value}</p>
                </div>
                <div className="p-2 rounded-full bg-white">
                  <Icon className={stat.icon} size={20} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Cases */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Recent Cases</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Case ID
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Title
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Priority
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentCases.map((case_) => (
                <tr key={case_.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 text-sm font-medium text-blue-600">
                    {case_.id}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    {case_.title}
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(case_.status)}`}>
                      {case_.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(case_.priority)}`}>
                      {case_.priority}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500">
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