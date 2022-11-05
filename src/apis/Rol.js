import Api from "./Api";
import Csrf from "./Csrf";

export default {
 

  
  async getRoles() {
    const token=localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
    return Api.get("/roles/index",config);
  },

};
