import React, { useState, useEffect } from 'react';
import { Ticket as Cricket, Menu } from 'lucide-react';
import PredictionForm from './components/PredictionForm';
import Sidebar from './components/Sidebar';
import AdPopup from './components/AdPopup';
import { TeamsData } from './types';

function App() {
  const [teamsData, setTeamsData] = useState<TeamsData | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [prediction, setPrediction] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    // In a real app, this would be an API call
    const mockTeamsData: TeamsData = {
      teams: ["Mumbai Indians", "Chennai Super Kings", "Kolkata Knight Riders"],
      todaysMatches: [{
        date: new Date().toISOString().split('T')[0],
        match1: {
          team1: "Mumbai Indians",
          team2: "Chennai Super Kings"
        },
        match2: null
      }]
    };
    setTeamsData(mockTeamsData);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#A3BFFA] to-[#C6F6D5] flex">
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setShowSidebar(!showSidebar)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-lg shadow-lg"
      >
        <Menu className="w-6 h-6 text-[#5C899D]" />
      </button>

      {/* Sidebar with mobile support */}
      <div className={`
        ${showSidebar ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 fixed lg:relative z-40 transition-transform duration-300
      `}>
        <Sidebar />
      </div>
      
      <main className="flex-1 p-4 lg:p-8 pt-16 lg:pt-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-4 lg:p-8 transform hover:scale-[1.01] transition-transform">
            <div className="flex items-center justify-center mb-6 lg:mb-8">
              <Cricket className="w-8 h-8 lg:w-12 lg:h-12 text-[#5C899D] mr-3 lg:mr-4" />
              <h1 className="text-2xl lg:text-4xl font-bold" style={{ fontFamily: 'system-ui' }}>
                VictoryPick
              </h1>
            </div>

            {/* Prize Image */}
            <div className="mb-6 lg:mb-8">
              <img 
                src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&h=300"
                alt="Prize Banner"
                className="w-full h-[150px] lg:h-[200px] object-cover rounded-xl"
              />
            </div>

            {teamsData && (
              <PredictionForm 
                teamsData={teamsData}
                onSubmit={(data) => {
                  setPrediction(data);
                  setShowPopup(true);
                  setShowSidebar(false);
                }}
              />
            )}
          </div>
        </div>
      </main>

      {showPopup && prediction && (
        <AdPopup 
          prediction={prediction}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
}

export default App;
