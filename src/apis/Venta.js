import Api from "./Api";
import Csrf from "./Csrf";

export default {


  async saveEntity(form) {
    await Csrf.getCookie();
    const token=localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}`,Accept:"application/json" }
  };
    return Api.post("/venta/store", form,config);
  },
  async updateEntity(form) {
    await Csrf.getCookie();
    const token=localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
    return Api.put("/venta/update", form,config);
  },
 
  async getVentas() {
    const token=localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
    return Api.get("/ventas/index",config);
  },
  async getNroVenta() {
    const token=localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` ,'Accept': 'application/json'}
  };
    return Api.get("/venta/nuevo/nroventa",config);
  },

  async getVenta(params) {
    await Csrf.getCookie();
    const token=localStorage.getItem('token');
    const config = {
      headers: { 'Authorization': `Bearer ${token}` }
  };

    return Api.post("/venta/edit", params,config);
  },
  async orden2PDF(params) {
    
    const token=localStorage.getItem('token');
    const config = {
      headers: { 'Authorization': `Bearer ${token}`, 'Accept': 'application/pdf' },
      responseType: 'arraybuffer' 
  };

    return Api.post("/venta/orden2pdf", params,config);
  },
};
