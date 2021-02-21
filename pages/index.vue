<template>
  <div>
    <div class="ad-unit" data-position="top" />
    <div class="row" style="flex-wrap: nowrap">
      <div
        class="card-ranking-list center-align"
        data-ignore-ads-near="true"
        data-ignore-tags-near="true"
      >
        <md-card
          class="card-container"
          v-for="card in this.cardList"
          :key="card.id"
        >
          <md-ripple>
            <md-card-content>
              <card-detail-title :card="card"></card-detail-title>
            </md-card-content>

            <md-card-actions>
              <router-link :to="`/cartao-credito/${card.id}`">
                <md-button class="md-raised md-primary"
                  >Clique aqui e saiba mais</md-button
                >
              </router-link>
            </md-card-actions>
          </md-ripple>
        </md-card>
      </div>
      <div class="ad-sidebar-infinite" />
    </div>
  </div>
</template>

<script>
import CardDetailTitle from "./cartao-credito/cardDetail/CardDetail.Title";
export default {
  name: "CardRanking",
  data() {
    return {
      cardList: [],
    };
  },
  components: { CardDetailTitle },

  async asyncData({ $axios }) {
    const { data } = await $axios.$get(
      "https://api.plusdin.com/api/control/cards",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer ZT3241CN8tA3IAe0ItPxKp3QrStCqSXityKyVl9Qft9X2mxyuAphKQvp981C9eTheAYh50p7dP2xBwID",
        },
      }
    );
    return { cardList: data };
  },
};
</script>

<style>
.card-container {
  width: 70%;
  margin: 20px auto;
  padding: 20px 10px;
}

.btn-go-top {
  position: sticky;
  top: calc(100vh - 80px);
  right: 0px;
  float: right;
  z-index: 9;
}

@media only screen and (max-width: 600px) {
  .card-container {
    width: 100%;
  }
}
</style>
