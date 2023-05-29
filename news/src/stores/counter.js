import axios from "axios"

import { defineStore } from "pinia"

export const useNewsStore = defineStore('news', {
  state: () => ({ newsDetail: {}, fastDetail: {}, newsInter: [], newsTech: [] }),
  actions: {
    async fetchNewsInter() {
      try {
        const { data } = await axios({
          method: "get",
          url: `https://the-lazy-media-api.vercel.app/api/tech/recommend?page=1`,
        })
        const newData = data
        let limited = []
        for (let i = 0; i < newData.length; i++) {
          const element = newData[i];
          if (i < 4) {
            limited.push(element)
          }
        }
        const newEl = limited.map((el) => {
          let temp = ""
          for (let i = 0; i < el.key.length; i++) {
            const element = el.key[i];
            if (element == "/" && element != undefined) {
              temp += "%"
            } else {
              temp += element
            }
          }
          temp.replace("undefined", "")
          el.key = temp
          return el
        })
        this.newsInter = newEl
      } catch (error) {
        console.log(error)
      }
    },
    async fetchNewsTech() {
      try {
        const { data } = await axios({
          method: "get",
          url: `https://the-lazy-media-api.vercel.app/api/tech?page=1`,
        })
        const newData = data
        let limited = []
        for (let i = 0; i < newData.length; i++) {
          const element = newData[i];
          if (i < 4) {
            limited.push(element)
          }
        }
        const newEl = limited.map((el) => {
          let temp = ""
          for (let i = 0; i < el.key.length; i++) {
            const element = el.key[i];
            if (element == "/" && element != undefined) {
              temp += "%"
            } else {
              temp += element
            }
          }
          temp.replace("undefined", "")
          el.key = temp
          return el
        })
        this.newsTech = newEl
      } catch (error) {
        console.log(error)
      }
    },
    async fetchNewsByUrl(key) {
      let temp = ""
      for (let i = 0; i < key.length; i++) {
        const element = key[i];
        if (element == "%" && element != undefined) {
          temp += "/"
        } else {
          temp += element
        }
      }
      temp.replace("undefined", "")
      console.log(temp, "<<<<<");
      try {
        const { data } = await axios({
          method: "get",
          url: `https://the-lazy-media-api.vercel.app/api/detail/${temp}`,
        })
        if (data.message) {
          this.router.push("/error")
        }
        this.newsDetail = data.results
      } catch (error) {
        console.log(error)
      }
    },
  },
})

