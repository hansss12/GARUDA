<template>
  <Navbar />
  <Top />
  <Card :news="newsInter" type="Tech" />
  <CardTech :news="newsTech" type="Tech Update" />
  <Footerr />
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useNewsStore } from "../stores/counter"

import Navbar from "../components/Navbar.vue"
import Top from "../components/TopNewsCard.vue"
import Footerr from "../components/Footer.vue"
import Card from "../components/Card.vue"
import CardTech from "../components/CardTech.vue"
export default {
  components: {
    Navbar,
    Top,
    Footerr,
    Card,
    CardTech
  },
  computed: {
    ...mapState(useNewsStore, ['newsInter', "newsTech"])
  },
  methods: {
    ...mapActions(useNewsStore, ['fetchNewsInter', "fetchNewsTech"])
  },
  async created() {
    await this.fetchNewsInter()
    await this.fetchNewsTech()
  }
}
</script>