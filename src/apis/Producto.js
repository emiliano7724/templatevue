import Api from "./Api";
import Csrf from "./Csrf";

export default {


  async saveEntity(form) {
    await Csrf.getCookie();
    const token=localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
    return Api.post("/producto/store", form,config);
  },
  async updateEntity(form) {
    await Csrf.getCookie();
    const token=localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
    return Api.put("/producto/update", form,config);
  },
 
  async getProductos() {
    const token=localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
    return Api.get("/productos/index",config);
  },

  async getproducto(params) {
    await Csrf.getCookie();
    const token=localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
    return Api.post("/producto/edit", params,config);
  },
 
};
