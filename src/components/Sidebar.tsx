import React from 'react';
import { Home, FileText, Users, Settings, Phone, AlertTriangle } from 'lucide-react';
import { EMERGENCY_CONTACTS } from '../constants';

interface SidebarProps {
  isOpen: boolean;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, activeTab, onTabChange }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'report', label: 'File Report', icon: FileText },
    { id: 'cases', label: 'My Cases', icon: Users },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => onTabChange(activeTab)}
        />
      )}
      
      <aside className={`
        fixed md:relative top-0 left-0 z-50 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="p-6">
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onTabChange(item.id)}
                  className={`
                    w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors
                    ${activeTab === item.id 
                      ? 'bg-blue-100 text-blue-900 border-l-4 border-blue-600' 
                      : 'hover:bg-gray-100 text-gray-700'
                    }
                  `}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="mt-8 p-4 bg-red-50 rounded-lg border border-red-200">
            <div className="flex items-center space-x-2 mb-3">
              <AlertTriangle className="text-red-600" size={20} />
              <h3 className="font-bold text-red-800">Emergency</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Police:</span>
                <a href={`tel:${EMERGENCY_CONTACTS.POLICE}`} className="text-red-600 font-bold">
                  {EMERGENCY_CONTACTS.POLICE}
                </a>
              </div>
              <div className="flex justify-between">
                <span>Women Helpline:</span>
                <a href={`tel:${EMERGENCY_CONTACTS.WOMEN_HELPLINE}`} className="text-red-600 font-bold">
                  {EMERGENCY_CONTACTS.WOMEN_HELPLINE}
                </a>
              </div>
              <div className="flex justify-between">
                <span>Cyber Crime:</span>
                <a href={`tel:${EMERGENCY_CONTACTS.CYBER_CRIME}`} className="text-red-600 font-bold">
                  {EMERGENCY_CONTACTS.CYBER_CRIME}
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;