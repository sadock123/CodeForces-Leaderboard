import axios from 'axios';

import { baseUrl } from './Shared';

export const getLeaderboardData = () => axios.get(`${baseUrl}/leaderboard/rankings`);
