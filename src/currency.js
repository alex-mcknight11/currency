export default class Currency {  
  static async getCurrency(USD) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/${process.env.API_KEY}/pair/${USD}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}