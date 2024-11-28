import React from 'react';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-purple-600 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-white text-lg font-medium">Loading Assets...</p>
      </div>
    </div>
  );
}