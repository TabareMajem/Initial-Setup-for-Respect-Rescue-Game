import React, { useEffect, useState } from 'react';
import { VRButton } from '@react-three/xr';

export default function XRInitializer() {
  const [isXRSupported, setIsXRSupported] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function checkXRSupport() {
      try {
        if ('xr' in navigator) {
          const supported = await navigator.xr.isSessionSupported('immersive-ar');
          setIsXRSupported(supported);
        } else {
          setIsXRSupported(false);
        }
      } catch (error) {
        console.error('Error checking XR support:', error);
        setIsXRSupported(false);
      } finally {
        setIsLoading(false);
      }
    }
    checkXRSupport();
  }, []);

  if (isLoading) {
    return null;
  }

  if (!isXRSupported) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
        <div className="bg-white p-6 rounded-lg max-w-md text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-2">AR Not Available</h2>
          <p className="text-gray-600">
            Please use a device and browser that support WebXR AR features.
          </p>
        </div>
      </div>
    );
  }

  return <VRButton className="fixed bottom-4 right-4 z-50" />;
}