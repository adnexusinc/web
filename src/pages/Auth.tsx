import React, { useEffect } from 'react';

const Auth = () => {
  useEffect(() => {
    // Redirect to the external authentication page
    window.location.href = 'https://bc-dsp.ad.nexus';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-lg">Redirecting to login...</p>
      </div>
    </div>
  );
};

export default Auth;