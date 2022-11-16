<template>
  <div>
    <b-card>
      <template #header>
        <b-row>
          <template v-if="conBotonVolver">
            <b-col md="2">
              <b-button @click="goBack" variant="info"
                ><b-icon icon="arrow-left-circle-fill"></b-icon>
                Volver</b-button
              >
            </b-col>
          </template>

          <b-col md="2">
            <h2>
              <b-badge squared :variant="badgeVariantTitulo"
                ><b-icon icon="pen"></b-icon>{{ titulo }}</b-badge
              >
            </h2>
          </b-col>

          <template v-if="conInfoHelper">
            <b-col md="2">
            <b-button pill  variant="primary" @click="$bvToast.show('example-toast')">
              <b-icon icon="info"></b-icon>
       </b-button>
    <b-toast id="example-toast" title="InfoAyuda" static no-auto-hide>
    {{infoHelper}}
    </b-toast>
  </b-col>
          </template>

        </b-row>
      </template>
      <b-card-text>
        <slot></slot>
        <!-- slot para el cuerpo del card -->
      </b-card-text>
    </b-card>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    titulo: String,
    conBotonVolver: Boolean,
    conInfoHelper: Boolean,
    infoHelper:String,
    badgeVariantTitulo:String
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
