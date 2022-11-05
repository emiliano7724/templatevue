import Api from "./Api";
import Csrf from "./Csrf";

export default {


 
  async getMovimientos() {
 
    const token=localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
    return Api.get("/movimientos/index",config);
  },
  async saveEntity(form) {
    await Csrf.getCookie();
    const token=localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
    return Api.post("/movimiento/store", form,config);
  },

  async filtrar(form) {
    await Csrf.getCookie();
    const token=localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
    return Api.post("/movimiento/filtro/multiple", form,config);
  },

 
 
};
