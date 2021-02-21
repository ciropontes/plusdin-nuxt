<template>
  <div v-if="this.card">
    <span v-if="user">
      <p class="card-title-user-name">
        <b>{{ user.name }},</b>
      </p>
      <p class="blue-text">
        Nossa melhor recomendação de cartão para o seu perfil é:
      </p>
    </span>
    <p v-if="card" class="card-title-card-name">{{ card.name }}</p>
    <p class="card-image">
      <img
      v-if="this.card.image_file"
        :src="this.card.image_file.url"
        alt="imagem cartão"
        width="200"
        style="max-height: 250px"
      />
    </p>
    <p v-if="user">
      <md-button
        v-if="user"
        class="md-raised md-primary green white-text button-card-required"
        >Solicitar agora</md-button
      >
    </p>
    <md-card-content>
      <div class="row card-info">
        <div v-if="!card.fee" class="col s4">
          <p>
            <span class="material-icons green-text">fiber_manual_record</span>
          </p>
          <p>Anuidade grátis</p>
        </div>
        <div v-if="card.fee" class="col s4">
          <p>
            <span class="material-icons red-text">fiber_manual_record</span>
          </p>
          <p>Anuidade: {{ card.fee }}</p>
        </div>
        <div class="col s4">
          <p>
            <span class="material-icons green-text">fiber_manual_record</span>
          </p>
          <p>Bandeira {{ card.brand }}</p>
        </div>
        <div class="col s4">
          <p>
            <span class="material-icons green-text">fiber_manual_record</span>
          </p>
          <p>Categoria {{ card.category }}</p>
        </div>
      </div>
    </md-card-content>
  </div>
</template>

<script>
export default {
  name: "CardDetailTitle",
  props: ["card", "user"],
};
</script>

<style scoped>
p {
  line-height: 1;
}

.card-title-user-name {
  font-size: 3em;
  color: #555;
}

.card-title-card-name {
  font-size: 2.5em;
  color: #555;
}
.card-image {
  display: flex;
}
.card-image img {
  margin: 0 auto;
}
.card-info .col {
  text-align: center;
}
.button-card-required {
  width: 70%;
}
@media only screen and (max-width: 600px) {
  .button-card-required {
    width: 100%;
  }
}
</style>
