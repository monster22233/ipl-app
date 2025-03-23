export interface Team {
  name: string;
  logo: string;
}

export interface Match {
  date: string;
  match1: {
    team1: string;
    team2: string;
  };
  match2: {
    team1: string;
    team2: string;
  } | null;
}

export interface Prediction {
  instaId: string;
  toss: string;
  runsWickets: string;
  code?: string;
}

export interface TeamsData {
  teams: string[];
  todaysMatches: Match[];
}
