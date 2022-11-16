import Api from "./Api";
import Csrf from "./Csrf";

export default {
 /*  async register(form) {
    await Csrf.getCookie();

    return Api.post("/register", form,);
  }, 
  
  async auth() {
    return Api.get("/user");
  }
  */
  async login(form) {

    await Csrf.getCookie();

    return Api.post("api/login", form);
  },

  async logout() {
    await Csrf.getCookie();

    return Api.post("api/logout");
  },
  async saveEntity(form) {
    await Csrf.getCookie();
    const token=localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
    return Api.post("api/user/store", form,config);
  },
  async updateEntity(form) {
    await Csrf.getCookie();
    const token=localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
    return Api.put("api/user/update", form,config);
  },

  async getUsers() {
     const token=localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  }; 
    return Api.get("api/users/index",config);
  },

  async getUser(params) {
   
    await Csrf.getCookie();
    const token=localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
    return Api.post("api/user/edit", params,config);
  },
  
};
