import Api from "./Api";
import Csrf from "./Csrf";

export default {


 
  async getStock() {
    const token=localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
    return Api.get("/stock-productos/index",config);
  },
 

 
 
};
