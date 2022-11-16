<template>
  <div>
    <b-card border-variant="secondary" :header="titulo" header-border-variant="secondary">
      <template #header>


        <slot name="header"></slot>
        <!--slot para botones arriba de la tabla -->

      </template>
      <template #footer>


        <slot name="footer"></slot>
        <!--slot para botones abajo de la tabla -->

      </template>


      <b-card-text>
        <Table :items="itemsTabla" :fields="headersTabla" :urlEditForm="urlEditForm"></Table>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import Table from "@/components/Table.vue";

export default {
  name: "Card",
  components: {
    Table,
  },
  props: {
    urlEditForm: String,
    titulo: String,
    itemsTabla: Array,
    headersTabla: Array,
  },
};
</script>


