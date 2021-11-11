import fetch from 'node-fetch';

export class LeaderboardAPI {
  static async getMemberRatingsApiCall(query: string): Promise<any> {
    const result = await fetch(query);
    return result;
  }
}
