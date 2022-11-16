<template>
    <div>
      <b-alert show dismissible variant="danger" v-if="errors.length > 0">
            <ul id="example-1">
              <div v-for="item in errors" :key="item.id">
                <li v-for="error in item" :key="error.id">
                  {{ error }}
                </li>
              </div>
            </ul>
          </b-alert>
    </div>
  </template>
  <script>
export default {
  name: "AlertErrores",
  props: {
    errors: Array,
  },
};
</script>