<template>
  <div>
    <div class="ad-unit" data-position="top" />
    <div class="row" style="flex-wrap: nowrap">
      <div class="card-container">
        <card-detail-title :card="card"></card-detail-title>
        <p>
          {{ card.subheadline }}
        </p>
        <card-detail-opnion :card="card"></card-detail-opnion>
        <div class="ad-unit" data-position="content" />
        <card-detail-summary :card="card"></card-detail-summary>
      </div>
      <div class="ad-sidebar-infinite" />
    </div>
  </div>
</template>

<script>
import CardDetailTitle from "./cardDetail/CardDetail.Title";
import CardDetailOpnion from "./cardDetail/CardDetail.Opnion";
import CardDetailSummary from "./cardDetail/CardDetail.Summary";
export default {
  name: "CardDetail",
  data() {
    return {};
  },
  components: {
    CardDetailTitle,
    CardDetailOpnion,
    CardDetailSummary,
  },
  data() {
    return {
      card: {},
    };
  },
  created() {
    // window.scrollTo(0, 0);
  },
  methods: {},
  computed: {},
  async asyncData({ params, redirect, $axios }) {
    const card = await $axios.$get(
      `https://api.plusdin.com/api/control/cards/${params.card}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer ZT3241CN8tA3IAe0ItPxKp3QrStCqSXityKyVl9Qft9X2mxyuAphKQvp981C9eTheAYh50p7dP2xBwID",
        },
      }
    );
    if (card) {
      return {
        card,
      };
    } else {
      redirect("/");
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-container {
  width: 70%;
  margin: 20px auto;
  padding: 20px 10px;
  text-align: center;
}

@media only screen and (max-width: 600px) {
  .card-container {
    width: 100%;
  }
}
</style>
