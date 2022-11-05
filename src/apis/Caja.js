import Api from "./Api";
import Csrf from "./Csrf";

export default {


 
  async getCajas() {
   
    const token=localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
    return Api.get("/cajas/index",config);
  },

 
 
};
