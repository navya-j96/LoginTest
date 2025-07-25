import React, { useState } from 'react';
import { Eye, EyeOff, LogIn, Lock, Mail, ArrowRight } from 'lucide-react';
import LoginForm from './components/LoginForm';
import Logo from './components/Logo';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 flex flex-col md:flex-row">
      {/* Left side - Branding */}
      <div className="hidden md:flex md:w-1/2 bg-indigo-600 text-white p-12 flex-col justify-between relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-indigo-800"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80')] bg-cover"></div>
        </div>
        
        <div className="relative z-10">
          <Logo />
          <h1 className="text-4xl font-bold mt-12 mb-4">Welcome Back</h1>
          <p className="text-indigo-200 text-lg max-w-md">
            Log in to your account to access your dashboard, manage your settings, and view your latest activity.
          </p>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-300">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80" 
                alt="User testimonial" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm text-indigo-200 italic">
                "This platform has transformed how our team collaborates. The interface is intuitive and the features are exactly what we needed."
              </p>
              <p className="text-white font-medium mt-1">Sarah Johnson, Product Manager</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right side - Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md">
          <div className="md:hidden mb-8">
            <Logo />
          </div>
          
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Sign in</h2>
            <p className="text-gray-600 mt-2">
              Enter your credentials to access your account
            </p>
          </div>
          
          <LoginForm />
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <a href="#" className="text-indigo-600 font-medium hover:text-indigo-500 transition-colors">
                Create an account
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
