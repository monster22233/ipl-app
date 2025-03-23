import React, { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';
import { Prediction } from '../types';

interface AdPopupProps {
  prediction: Prediction;
  onClose: () => void;
}

const AdPopup: React.FC<AdPopupProps> = ({ prediction, onClose }) => {
  const [countdown, setCountdown] = useState(10);
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setShowQR(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#FFFCEF] p-4 lg:p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <div className="border-2 border-[#5C899D] h-[100px] mb-4 lg:mb-6 flex items-center justify-center">
          <span className="text-gray-500 text-sm lg:text-base">Ad Space (300x100)</span>
        </div>

        {!showQR ? (
          <div className="text-center">
            <p className="text-xl lg:text-2xl font-bold text-[#5C899D]">
              Wait: {countdown}s
            </p>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-base lg:text-lg font-bold text-[#5C899D] mb-4">
              Your Prediction:<br />
              Toss: {prediction.toss}<br />
              Score: {prediction.runsWickets}
            </p>
            <div className="flex justify-center mb-4">
              <QRCode
                value={prediction.code || 'DEMO-CODE'}
                size={150}
                className="mx-auto"
              />
            </div>
            <button
              onClick={onClose}
              className="bg-[#5C899D] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors text-base lg:text-lg"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdPopup;
