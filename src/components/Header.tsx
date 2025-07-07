import React from 'react';
import { Shield, User, LogOut, Menu } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface HeaderProps {
  onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={onMenuToggle}
              className="md:hidden p-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Menu size={24} />
            </button>
            <div className="flex items-center space-x-3">
              <div className="bg-white/10 p-2 rounded-lg">
                <Shield size={32} className="text-blue-200" />
              </div>
              <div>
                <h1 className="text-xl font-bold">KOCHI</h1>
                <p className="text-blue-200 text-sm">Crime Registration Portal</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="hidden md:block text-right">
                  <p className="font-medium">{user.name}</p>
                  <p className="text-blue-200 text-sm">{user.district}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="bg-white/10 p-2 rounded-lg">
                    <User size={20} />
                  </div>
                  <button
                    onClick={logout}
                    className="bg-red-600 hover:bg-red-700 px-3 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                  >
                    <LogOut size={16} />
                    <span className="hidden md:inline">Logout</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <div className="bg-white/10 p-2 rounded-lg">
                  <User size={20} />
                </div>
                <span className="text-blue-200">Not logged in</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;