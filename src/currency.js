export default class Currency {  
  static async getCurrency(country) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/6bc7e42e8d54293852b6d42a/latest/${country}&appid=${process.env.API_KEY}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}