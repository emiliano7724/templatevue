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

    return Api.post("/login", form);
  },

  async logout() {
    await Csrf.getCookie();

    return Api.post("/logout");
  },
  async saveEntity(form) {
    await Csrf.getCookie();
    const token=localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
    return Api.post("/user/store", form,config);
  },
  async updateEntity(form) {
    await Csrf.getCookie();
    const token=localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
    return Api.put("/user/update", form,config);
  },

  async getUsers() {
     const token=localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  }; 
    return Api.get("/proyectos/index",config);
  },

  async getUser(params) {
   
    await Csrf.getCookie();
    const token=localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
    return Api.post("/user/edit", params,config);
  },
  
};
