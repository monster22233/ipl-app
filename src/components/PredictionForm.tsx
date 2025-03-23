import React, { useState } from 'react';
import { TeamsData, Prediction } from '../types';

interface PredictionFormProps {
  teamsData: TeamsData;
  onSubmit: (prediction: Prediction) => void;
}

const PredictionForm: React.FC<PredictionFormProps> = ({ teamsData, onSubmit }) => {
  const [formData, setFormData] = useState<Prediction>({
    instaId: '',
    toss: teamsData.todaysMatches[0].match1.team1,
    runsWickets: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#FFFCEF] rounded-xl p-4 lg:p-6 shadow-inner">
      <div className="mb-4 lg:mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Instagram ID
        </label>
        <input
          type="text"
          placeholder="Enter Instagram ID"
          className="w-full px-3 lg:px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5C899D] text-base"
          value={formData.instaId}
          onChange={(e) => setFormData({ ...formData, instaId: e.target.value })}
          required
        />
      </div>

      <div className="mb-4 lg:mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Toss Winner
        </label>
        <select
          className="w-full px-3 lg:px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5C899D] text-base appearance-none bg-white"
          value={formData.toss}
          onChange={(e) => setFormData({ ...formData, toss: e.target.value })}
          required
        >
          <option value={teamsData.todaysMatches[0].match1.team1}>
            {teamsData.todaysMatches[0].match1.team1}
          </option>
          <option value={teamsData.todaysMatches[0].match1.team2}>
            {teamsData.todaysMatches[0].match1.team2}
          </option>
        </select>
      </div>

      <div className="mb-4 lg:mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Runs-Wickets
        </label>
        <input
          type="text"
          inputMode="numeric"
          placeholder="e.g., 230-6"
          className="w-full px-3 lg:px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5C899D] text-base"
          value={formData.runsWickets}
          onChange={(e) => setFormData({ ...formData, runsWickets: e.target.value })}
          required
          pattern="\d+-\d+"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#5C899D] text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors text-base lg:text-lg"
      >
        Submit
      </button>
    </form>
  );
};

export default PredictionForm;
