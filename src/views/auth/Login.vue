<template>
  <div>
    <b-container>
      <br />
      <br />

      <b-row>
        <b-col></b-col>
        <b-card no-body class="overflow-hidden" style="max-width: 540px">
          <b-row no-gutters align-h="end">
            <b-col md="6">
              <b-card-img
                src="https://picsum.photos/400/400/?image=20"
                alt="Image"
                class="rounded-0"
              >
              </b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body title="LoginApp">
                <b-card-text>
                  <b-form>
                    <b-form-group
                      id="fieldset-1"
                      description="Escribe tu mail de ususario"
                      label=""
                      label-for="input-1"
                    >
                      <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
                        <b-form-input
                          id="input-1"
                          v-model="form.email"
                          trim
                          type="email"
                          placeholder="Email"
                          valid-feedback="Ingreso correcto"
                          invalid-feedback="Campo obligatorio - Ingrese un mail válido"
                           :state="stateEmail"
                        ></b-form-input>
                      </b-input-group>
                    </b-form-group>
                    <b-form-group
                      id="fieldset-1"
                      description="Escribe tu password de ususario"
                      label=""
                      label-for="input-1"
                    >
                      <b-input-group prepend="***" class="mb-2 mr-sm-2 mb-sm-0">
                        <b-form-input
                          id="input-1"
                          v-model="form.password"
                          trim
                          type="password"
                          placeholder="Password"
                        >
                        </b-form-input>
                      </b-input-group>
                    </b-form-group>

                    <b-button
                      @click.prevent="login"
                      variant="success"
                      :disabled="isDisabledButton"
                      block
                    >
                      <b-spinner v-if="isLoading" small type="grow"></b-spinner>
                      Ingresar
                    </b-button>
                  </b-form>
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
        <b-col></b-col>
      </b-row>
      <b-row>
        <b-col></b-col>
        <b-col md="6">
          <AlertErrores :errors="errors"></AlertErrores>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import User from "../../apis/User";
import Errors from "../../Utils/Errors";
import Validators from "../../Utils/Validators";
import AlertErrores from "@/components/AlertErrores";
export default {
  components: {
    AlertErrores,
  },
  data() {
    return {
      form: {
        email: "admin@admin.com",
        password: "1q2w3e4r",
      },
      errors: [],
      isLoading: false,
      isDisabledButton: false,
    };
  },
  methods: {
    setFormsActionsErrors(val) {
      this.errors = [];
      this.isLoading = val;
      this.isDisabledButton = val;
    },

    login() {
      this.setFormsActionsErrors(true);
      
      User.login(this.form)
        .then((response) => {
          
          if (response.data.DATA.estado === "warning") {
           
            this.setFormsActionsErrors(false);
            this.errors.push({
              mensaje: "Credenciales incorrectas",
            });
          } else if (response.data.STATUS === "500") {
            this.setFormsActionsErrors(false);
            this.errors.push({
              mensaje: response.data.MESSAGE,
            });
          } else {
            this.$root.$emit("login", true);
            localStorage.setItem("auth", "true");
            localStorage.setItem("token", response.data.DATA.token);
            localStorage.setItem("user", response.data.DATA.user);
            this.$router.push({ name: "Home" });
          }
        })
        .catch((error) => {
          this.setFormsActionsErrors(false);
          
          if (error.response) {
            switch (error.response.status) {
              case 422:
                this.errors = Errors.procesarErrores(
                  error.response.data.errors
                );
                break;
              case 401:
                this.errors.push(["No esta autorizado para esta acción"]);
                break;
              case 500:
                this.errors.push(["Ocurrio un error inesperado"]);
                break;
            }
          } else {
            this.errors.push({
              mensaje: error + " Servidor Backend Desconectado",
            });
          }
        });
    },
  },
  computed: {
    
    stateEmail() {
      let email = this.form.email;
      // eslint-disable-next-line
      return Validators.validarEmail( email);
    },
    invalidFeedbackEmail() {
      let email = this.form.email;

      // eslint-disable-next-line
      return Validators.validarEmail(email) ? "Ingreso valido" : "Campo requerido";
    },
  },
};
</script>