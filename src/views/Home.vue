<template>
  <div class="home">
    <b-container fluid="lg">
      <b-overlay :show="showLoading" rounded="sm">
        <div>
          <b-card-group deck>
            <b-card
              bg-variant="primary"
              text-variant="white"
              header="Primary"
              class="text-center"
            >
              <b-card-text
                >Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.</b-card-text
              >
            </b-card>

            <b-card
              bg-variant="secondary"
              text-variant="white"
              header="Secondary"
              class="text-center"
            >
              <b-card-text
                >Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.</b-card-text
              >
            </b-card>

            <b-card
              bg-variant="success"
              text-variant="white"
              header="Success"
              class="text-center"
            >
              <b-card-text
                >Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.</b-card-text
              >
            </b-card>
          </b-card-group>
        </div>
      </b-overlay>
      
    
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
      return {
        showLoading: false
      }
    }
};
</script>
