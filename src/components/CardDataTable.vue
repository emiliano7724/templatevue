<template>
  <div>
    <b-card border-variant="secondary" :header="titulo" header-border-variant="secondary" align="left">
      <template #header>
        <b-row>
          <b-col cols="4">
           <b-button-group>
            <b-button variant="success">
              <b-icon icon="plus-circle-fill"></b-icon> Nuevo {{tituloSingular}}
            </b-button>
            <Sidebar />
           </b-button-group>
          
          </b-col>
          <b-col cols="4">
          
       
          </b-col>
        </b-row>
      </template>

      <b-card-text>
        <Table :items="itemsTabla" :fields="headersTabla"></Table>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import Table from "@/components/Table.vue";
import Sidebar from "@/components/Sidebar.vue";
export default {
  name: "Card",
  components: {
    Table,
    Sidebar,
  },
  props: {
    titulo: String,
    tituloSingular: String,
    itemsTabla: Array,
    headersTabla: Array,
  },
};
</script>


