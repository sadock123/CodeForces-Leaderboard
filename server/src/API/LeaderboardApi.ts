import fetch from 'node-fetch';

export class LeaderboardAPI {
  static async getMemberRatingsApiCall(query: string): Promise<any> {
    try {
      const result = await fetch(query);
      const data: any = await result.json();
      if (result.status === 200) {
        return {
          status: true,
          code: 200,
          data: data?.result
        };
      } else {
        return {
          status: false,
          code: data.status,
          data: null
        };
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
