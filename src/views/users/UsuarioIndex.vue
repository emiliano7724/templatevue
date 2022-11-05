<template>
  <div>
    <b-container fluid="lg">
  
    
      <CardDataTable
        :tituloSingular="tituloSingular"
        :itemsTabla="items"
        :headersTabla="fields"
      />
    </b-container>
  
  </div>
</template>
<script>
import CardDataTable from "@/components/CardDataTable.vue";

import User from "../../apis/User";
export default {
  name: "Usuarioindex",
  components: {
    CardDataTable
   
  },
  data() {
    return {
      titulo: "Usuarios",
      tituloSingular: "Usuario",
      items: [
        {
          isActive: true,
          age: 40,
          name: { first: "Dickerson", last: "Macdonald" },
        },
        { isActive: false, age: 21, name: { first: "Larsen", last: "Shaw" } },
        {
          isActive: false,
          age: 9,
          name: { first: "Mini", last: "Navarro" },
          _rowVariant: "success",
        },
        { isActive: false, age: 89, name: { first: "Geneva", last: "Wilson" } },
        { isActive: true, age: 38, name: { first: "Jami", last: "Carney" } },
        { isActive: false, age: 27, name: { first: "Essie", last: "Dunlap" } },
        { isActive: true, age: 40, name: { first: "Thor", last: "Macdonald" } },
        {
          isActive: true,
          age: 87,
          name: { first: "Larsen", last: "Shaw" },
          _cellVariants: { age: "danger", isActive: "warning" },
        },
        { isActive: false, age: 26, name: { first: "Mitzi", last: "Navarro" } },
        {
          isActive: false,
          age: 22,
          name: { first: "Genevieve", last: "Wilson" },
        },
        { isActive: true, age: 38, name: { first: "John", last: "Carney" } },
        { isActive: false, age: 29, name: { first: "Dick", last: "Dunlap" } },
      ],
      fields: [
        { key: "name", label: "Nombre", sortable: true, sortDirection: "desc" },
        { key: "age", label: "Edad", sortable: true, class: "text-center" },
        {
          key: "isActive",
          label: "Activo",
          formatter: (value) => {
            return value ? "Si" : "No";
          },
          sortable: true,
          sortByFormatted: true,
          filterByFormatted: true,
        },
        { key: "actions", label: "Acciones" },
      ],
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    goToCreateForm() {
      this.$router.push({ name: "UserCreate" });
    },
    goToEditForm(item) {
      this.$router.push({ path: `users/${item.id}` });
    },
    showLoading(length) {
      if (length >= 0) {
        return (this.isLoading = false);
      }
    },

    getUsers() {
      User.getUsers()
        .then((response) => {
          if (response.data.estado == "error") {
            console.log("ocurrio un error");
          } else {
            this.items = response.data.data;

            this.showLoading(this.items.length);
          }
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors;
          }
        });
    },

    pageChange(val) {
      this.$router.push({ query: { page: val } });
    },
    openModal(item) {
      this.infoModal = true;
      this.itemModal = item;
    },
  },
};
</script>