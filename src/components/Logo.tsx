import React from 'react';
import { Shield } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="bg-white p-2 rounded-lg shadow-md">
        <Shield className="h-8 w-8 text-indigo-600" />
      </div>
      <span className="ml-3 text-xl font-bold">SecureLogin</span>
    </div>
  );
};

export default Logo;
