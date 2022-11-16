<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand to="/home">
        <img
          src="../assets/logo.png"
          class="d-inline-block align-top"
          alt="Kitten"
          height="30px"
          width="30px"
        />
        {{ appName }}</b-navbar-brand
      >

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <!--    <b-nav-item to="/about"> // 
            <b-icon icon="chevron-bar-up"></b-icon> Menu link comun</b-nav-item
          > -->

          <b-nav-item-dropdown>
            <template #button-content>
              <b-icon icon="x-diamond-fill"></b-icon>
              Administrar
            </template>
            <b-dropdown-item to="/usuarios"
              ><b-icon icon="people-fill"></b-icon>Usuarios</b-dropdown-item
            >
            <b-dropdown-item to="#"
              ><b-icon icon="key-fill"></b-icon>Roles</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <b-avatar variant="success" icon="person-fill"></b-avatar>
              Admin
            </template>
            <b-dropdown-item to="/usuarios/perfil"
              ><b-icon icon="people-fill"></b-icon>Perfil</b-dropdown-item
            >
            <b-dropdown-item @click="logout"
              ><b-icon icon="power"></b-icon>Salir</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import User from "../../src/apis/User";
export default {
  name: "NavBar",
  props: {
    appName: String,
  },
  methods: {
    logout() {
      User.logout().then((response) => {
        if (response.data.STATUS === "500") {
          swal("Error!", response.data.MESSAGE, "error");
        } else {
          swal("Gracias por vistar la web!", "Hasta pronto", "success");
        }
        this.$root.$emit("login", false);
        localStorage.setItem("auth", "false");
        localStorage.setItem("token", "");
        this.$router.push({ name: "Login" });
      });
    },
  },
};
</script>


