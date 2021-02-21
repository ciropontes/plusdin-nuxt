<template>
  <span>
    <p>
      <md-card class="card-dark">
        <md-card-header>
          <div class="md-title">Detalhes do seu cartão</div>
        </md-card-header>
        <md-card-content>
          <div class="row">
            <div class="col s6">
              <md-card class="card-default card-item">
                <span class="material-icons">monetization_on</span>Renda mínima
                necessária
                <span class="card-item-value">R$ 0,00</span>
              </md-card>
            </div>
            <div class="col s6">
              <md-card class="card-default card-item">
                <span class="material-icons">language</span>Tipo de cartão
                <span class="card-item-value">Internacional</span>
              </md-card>
            </div>
          </div>
          <div class="row">
            <div class="col s6">
              <md-card class="card-default card-item">
                <span class="material-icons">credit_card</span>Primeira anuidade
                <span class="card-item-value">{{
                  !card.fee ? "Grátis" : card.fee
                }}</span>
              </md-card>
            </div>
            <div class="col s6">
              <md-card class="card-default card-item">
                <span class="material-icons">flag</span>Bandeira
                <span v-if="card.brand" class="card-item-value">{{
                  card.brand
                }}</span>
              </md-card>
            </div>
          </div>
          <div class="row">
            <div class="col s6">
              <md-card class="card-default card-item">
                <span class="material-icons">credit_card</span>Demais anuidades
                <span class="card-item-value">{{
                  !card.fee ? "Grátis" : card.fee
                }}</span>
              </md-card>
            </div>
            <div class="col s6">
              <md-card class="card-default card-item">
                <span class="material-icons">emoji_symbols</span>Juros rotativos
                <span class="card-item-value">A consultar</span>
              </md-card>
            </div>
          </div>
          <div class="row">
            <div class="col s6">
              <md-card class="card-default card-item">
                <span class="material-icons">credit_card</span>Limite de crédito
                <span class="card-item-value">A consultar</span>
              </md-card>
            </div>
            <div class="col s6"></div>
          </div>
        </md-card-content>
      </md-card>
    </p>
  </span>
</template>

<script>
export default {
  name: "CardDetaiSummary",
  props: ["card"],
};
</script>

<style scoped>
.card-dark {
  background-color: #212121;
  color: #fff;
}
.card-default {
  background-color: #fff;
  color: #333;
  border-radius: 5px;
}

.card-item {
  text-align: left;
  vertical-align: middle;
  padding: 10px;
}

.card-item .material-icons {
  margin-right: 10px;
  padding: 0px;
}

.card-item-value {
  float: right;
}

.md-card-content .col {
  padding-bottom: 10px;
}

@media only screen and (max-width: 600px) {
  .s6 {
    width: 100% !important;
    margin-bottom: 20px;
  }
  .row {
    margin-bottom: 0px;
  }
  .card-container .col.s6 {
    flex-basis: auto;
  }
}
</style>
