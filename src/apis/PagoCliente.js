import Api from "./Api";
import Csrf from "./Csrf";

export default {


 
  async getPagos(id) {
    const token=localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
    return Api.get("/pagos-clientes/index/"+id,config);
  },
  async saveEntity(form) {
    await Csrf.getCookie();
    const token=localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
    return Api.post("/pago-cliente/store", form,config);
  },

 
 
};
