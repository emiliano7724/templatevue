<template>
  <div>
    <b-container fluid="lg">
      <b-row>
        <b-col>
        
            <Card
              :titulo="tituloCard"
              :conBotonVolver="conBotonVolver"
              :conInfoHelper="conInfoHelper"
              :infoHelper="infoHelper"
              :badgeVariantTitulo="dark"
            >
            <b-row>

           <b-col>

          
            <b-overlay :show="isLoadingCard1" rounded="sm">
              <Card
                titulo="Cambio contraseña"
                :conBotonVolver=false
                :conInfoHelper=false
                :infoHelper="infoHelper"
                 badgeVariantTitulo="danger"
               
              >
                <div>
                  <b-form @submit.stop.prevent>
                    <b-row>
                      <b-col md="4">
                        <b-form-group
                          id="fieldset-1"
                          label="Password Actual"
                          label-for="input-1"
                         
                         
                        >
                          <b-input-group>
                            <b-input-group-prepend>
                              <b-input-group-text>
                                <b-icon icon="key" />
                              </b-input-group-text>
                            </b-input-group-prepend>
                            <b-form-input
                              id="input-1"
                              v-model="form.passwordActual"
                        
                              trim
                              type="password"
                            ></b-form-input>
                          </b-input-group>
                        </b-form-group>
                      </b-col>

                      <b-col md="4">
                        <b-form-group
                          id="fieldset-1"
                          label="Password Nueva"
                          label-for="input-1"
                        
                        >
                          <b-input-group prepend="@">
                            <b-form-input
                              id="input-1"
                              v-model="form.passwordNueva"
                              trim
                              type="password"
                            ></b-form-input>
                          </b-input-group>
                        </b-form-group>
                      </b-col>
                      <b-col md="4">
                        <b-form-group
                          id="fieldset-1"
                          label="Confirmacion"
                          label-for="input-1"
                        
                        >
                          <b-input-group prepend="@">
                            <b-form-input
                              id="input-1"
                              v-model="form.passwordNuevaConfirmacion"
                              trim
                              type="password"
                            ></b-form-input>
                          </b-input-group>
                        </b-form-group>
                      </b-col>
                    </b-row>
                  </b-form>

                  <b-row>
                    <b-col></b-col>
                    <b-col></b-col>
                    <b-col>
                      <b-button-group class="mx-1">
                        <b-button variant="success" @click="saveEntityCambioPassword">{{
                          tittleButtonSubmit
                        }}</b-button>
                        <b-button @click="resetForm">{{
                          tittleButtonCancel
                        }}</b-button>
                      </b-button-group>
                    </b-col>
                  </b-row>
                </div>
              </Card>
            </b-overlay>
          </b-col>
            <b-col>
            <b-overlay :show="isLoadingCard2" rounded="sm">
              <Card
                titulo="Mis datos"
                :conBotonVolver=false
                :conInfoHelper=false
                :infoHelper="infoHelper"
              >
                <div>
                  <b-form @submit.stop.prevent>
                    <b-row>
                      <b-col md="6">
                        <b-form-group
                          id="fieldset-1"
                          label="Nombre"
                          label-for="input-1"
                          :invalid-feedback="invalidFeedbackName"
                          :state="stateName"
                        >
                          <b-input-group>
                            <b-input-group-prepend>
                              <b-input-group-text>
                                <b-icon icon="person-fill" />
                              </b-input-group-text>
                            </b-input-group-prepend>
                            <b-form-input
                              id="input-1"
                              v-model="form.name"
                              :state="stateName"
                              trim
                            ></b-form-input>
                          </b-input-group>
                        </b-form-group>
                      </b-col>

                      <b-col md="6">
                        <b-form-group
                          id="fieldset-1"
                          label="Email"
                          label-for="input-1"
                          :invalid-feedback="invalidFeedbackEmail"
                          :state="stateEmail"
                        >
                          <b-input-group prepend="@">
                            <b-form-input
                              id="input-1"
                              v-model="form.email"
                              :state="stateEmail"
                              trim
                            ></b-form-input>
                          </b-input-group>
                        </b-form-group>
                      </b-col>
                    </b-row>
                  </b-form>

                  <b-row>
                    <b-col></b-col>
                    <b-col></b-col>
                    <b-col>
                      <b-button-group class="mx-1">
                        <b-button variant="success" @click="saveEntity">{{
                          tittleButtonSubmit
                        }}</b-button>
                        <b-button @click="resetForm">{{
                          tittleButtonCancel
                        }}</b-button>
                      </b-button-group>
                    </b-col>
                  </b-row>
                </div>
              </Card>
            </b-overlay>
          </b-col>
          </b-row>
            </Card>
        
        </b-col>
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
import Card from "../../components/Card";
import AlertErrores from "../../components/AlertErrores";
import Errors from "../../Utils/Errors";
import Validators from "../../Utils/Validators";
export default {
  name: "UsuarioCreate",
  components: {
    Card,
    AlertErrores,
  },
  data() {
    return {
      errors: [],
      isLoadingCard1: false,
      isLoadingCard2: false,
      form: {
        name: "",
        email: "",
      },
      conInfoHelper: false,
      infoHelper: "/",
      tituloCard: "Perfil de Usuario",
      tieneFormChico: false,
      tituloBotonSidebar: "Nuevo Form chico",
      tituloSideBar: "Perfil Usuario",
      tituloSwal: "",
      titulo: "Usuarios",
      tituloSingular: "Usuario",
      conBotonVolver: true,
      tittleButtonSubmit: "Guardar",
      tittleButtonCancel: "Cancelar",
    };
  },
  computed: {
    stateName() {
      return Validators.validarMinLength(this.form.name.length, 4);
    },
    invalidFeedbackName() {
      if (this.form.name.length > 0) {
        return "Escribe al menos 4 caracteres";
      }
      return "Campo requerido";
    },
    stateEmail() {
      let email = this.form.email;
      // eslint-disable-next-line
      return Validators.validarEmail(email);
    },
    invalidFeedbackEmail() {
      let email = this.form.email;

      // eslint-disable-next-line
      return Validators.validarEmail(email)
        ? "Ingreso valido"
        : "Campo requerido | Email Valido";
    },
  },
  created() {},
  methods: {
    saveEntityCambioPassword() {
      swal({
        title: this.tituloSwal,
        text: "Estas seguro de guardar el cambio de contraseña?",
        icon: "warning",
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          this.isLoading = true;
          User.saveEntity(this.form)
            .then((response) => {
              if (response.data.STATUS === "500") {
                swal("Error!", response.data.MESSAGE, "error");
              } else {
                swal(
                  "Guardado!",
                  this.tituloSingular + " almacenado con éxito",
                  "success"
                );
              }
              this.errors = [];
              this.isLoading = false;
            })
            .catch((error) => {
              if (error.response.status === 422) {
                this.errors = [];
                this.isLoading = false;
                this.errors = Errors.procesarErrores(
                  error.response.data.errors
                );
              }
            });
        }
      });
    },
    resetForm(event) {
      swal({
        title: "Atención",
        text: "Estas seguro de cancelar ? Se perdará la info cargada en el formulario.",
        icon: "warning",
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          event.preventDefault();
          // Reset our form values
          this.form.email = "";
          this.form.name = "";
        }
      });
    },
  },
};
</script>