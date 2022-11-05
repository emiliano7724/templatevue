import Api from "./Api";
import Csrf from "./Csrf";

export default {

  async saveEntity(form) {
    console.log(form)
    await Csrf.getCookie();
    const token=localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
    return Api.post("/categorias/store", form,config);
  },
  async getAllCategorias() { // para la tabla
   
    const token=localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
    return Api.get("/categorias/get/all",config);
  },
  async getCategorias() { // para el combo
   
    const token=localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
    return Api.get("/categorias/index",config);
  },
  async getCategoriasXtipo(tipo) {
  
    const token=localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
    return Api.get("/categorias/by/tipo/"+tipo,config);
  },


  
 
};
