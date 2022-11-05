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
              <b-card-body title=LoginApp>

                <b-card-text>
                    <b-form @submit="onSubmit" @reset="onReset" >
                  <b-form-group
                    id="fieldset-1"
                    description="Escribe tu mail de ususario"
                    label=""
                    label-for="input-1"
               
                  >
                    <b-form-input
                      id="input-1"
                      v-model="email"
                      trim
                      type="email"
                      placeholder="Email"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group
                    id="fieldset-1"
                    description="Escribe tu password de ususario"
                    label=""
                    label-for="input-1"
                  >
                    <b-form-input
                      id="input-1"
                      v-model="password"
                      trim
                      type="password"
                      placeholder="Password"
                    ></b-form-input>
                  </b-form-group>


                  <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {

  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>