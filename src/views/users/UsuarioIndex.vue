<template>
  <div>
    <b-container fluid="lg">
      <b-overlay :show="isLoading" rounded="sm">
        <CardDataTable :itemsTabla="items" :headersTabla="fields" :urlEditForm="urlEditForm">
          <!-- insercion del slot de botones en el header del card -->
          <template v-slot:header>
            <template v-if="!tieneFormChico">
              <b-row>
                <b-col>
                  <b-button-group>
                    <b-button variant="success" @click="goToCreateForm()">
                      <b-icon icon="plus-circle-fill"></b-icon> Nuevo
                      {{ tituloSingular }}
                    </b-button>
                  </b-button-group>
                </b-col>
                <b-col></b-col>
                  <b-badge>
                    <h4>Listado {{ titulo }}</h4>
                  </b-badge>
              
                <b-col></b-col>
                <b-col></b-col>
              </b-row>
            </template>
            <template v-else>
              <div>
                <Sidebar :tituloBoton="tituloBotonSidebar" :tituloSideBar="tituloSideBar">
                </Sidebar>
              </div>
            </template>
          </template>
        
        </CardDataTable>
      </b-overlay>
    </b-container>
  </div>
</template>
<script>
import CardDataTable from "@/components/CardDataTable.vue";
import Sidebar from "@/components/Sidebar.vue";
import User from "../../apis/User";
export default {
  name: "Usuarioindex",
  components: {
    CardDataTable,
    Sidebar,
  },
  data() {
    return {
      urlEditForm:  "usuarios",
      tieneFormChico: false,
      tituloBotonSidebar: "Nuevo Form chico",
      tituloSideBar: "Nuevo Usuario",
      isLoading: true,
      titulo: "Usuarios",
      tituloSingular: "Usuario",
      items: [],
      fields: [
        { key: "id", label: "ID", sortable: true, sortDirection: "desc" },
        {
          key: "nombre",
          label: "NOMBRE",
          sortable: true,
          class: "text-center",
        },
        { key: "email", label: "EMAIL", sortable: true, class: "text-center" },
        {
          key: "created_at",
          label: "FECHA CREACION",
          sortable: true,
          class: "text-center",
        },
        { key: "actions", label: "ACCIONES" },
      ],
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    goToCreateForm() {
      this.$router.push({ name: "UsuarioCreate" });
    },
   
    showLoading(length) {
      if (length >= 0) {
        return (this.isLoading = false);
      }
    },

    getUsers() {
      User.getUsers()
        .then((response) => {
          if (response.data.DATA.estado == "error") {
          
          } else {
            this.items = response.data.DATA;

            this.showLoading(this.items.length);
          }
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors;
          }
          if (error.response.status === 401) {
            this.$router.push({ name: "Login" });
          }
        });
    },
  },
};
</script>