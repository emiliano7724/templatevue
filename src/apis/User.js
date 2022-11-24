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
 /*    const token=localStorage.getItem('token');  // esto nos sirve en el caso que trabajemos con tokens, y pasamos config como tercer parametro
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  }; */
    return Api.post("api/user/store", form);
  },
  async updateEntity(form) {
    await Csrf.getCookie();
  
    return Api.put("api/user/update", form);
  },

  async getUsers() {
    await Csrf.getCookie();
    
    return Api.get("api/users/index");
  },

  async getUser() {
   
    await Csrf.getCookie();
   
    return Api.get("api/user");
  },
  
};
