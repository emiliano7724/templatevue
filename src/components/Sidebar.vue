<template>
  <div>
    <b-button v-b-toggle.sidebar-right variant="success">
      <b-icon icon="plus-circle-fill"></b-icon> {{ tituloBoton }}</b-button
    >
    <b-sidebar
      id="sidebar-right"
      :title="tituloSideBar"
      bg-variant="dark"
      text-variant="light"
      right
      backdrop
      shadow
    >
      <div class="px-3 py-2">
        <slot></slot>
        <b-img
          src="https://picsum.photos/500/500/?image=54"
          fluid
          thumbnail
        ></b-img>
      </div>
    </b-sidebar>
  </div>
</template>
 <script>
export default {
  name: "Sidebar",
  props: {
    tituloBoton: String,
    tituloSideBar: String,
  },
};
</script>