import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      liga: false,
      bolsa:{
        "by": "default",
        "valid_key": true,
        "results": {
          "currencies": {
            "source": "BRL",
            "USD": {
              "name": "Dollar",
              "buy": 3.7993,
              "sell": 3.8001,
              "variation": -0.708
            },
            "EUR": {
              "name": "Euro",
              "buy": 4.2898,
              "sell": 4.29,
              "variation": -0.63
            },
            "GBP": {
              "name": "Pound Sterling",
              "buy": 4.7844,
              "sell": null,
              "variation": -0.633
            },
            "ARS": {
              "name": "Argentine Peso",
              "buy": 0.0916,
              "sell": null,
              "variation": 0.659
            },
            "BTC": {
              "name": "Bitcoin",
              "buy": 44878.072,
              "sell": 44878.072,
              "variation": -4.613
            }
          },
          "stocks": {
            "IBOVESPA": {
              "name": "BM&F BOVESPA",
              "location": "Sao Paulo, Brazil",
              "points": 103636.172,
              "variation": 1.56
            },
            "NASDAQ": {
              "name": "NASDAQ Stock Market",
              "location": "New York City, United States",
              "points": 8170.23,
              "variation": 0.75
            },
            "CAC": {
              "name": "CAC 40",
              "location": "Paris, French",
              "variation": 0.03
            },
            "NIKKEI": {
              "name": "Nikkei 225",
              "location": "Tokyo, Japan",
              "variation": -0.05
            }
          },
          "available_sources": [
            "BRL"
          ],
          "bitcoin": {
            "blockchain_info": {
              "name": "Blockchain.info",
              "format": [
                "USD",
                "en_US"
              ],
              "last": 11143.58,
              "buy": 11143.58,
              "sell": 11143.58,
              "variation": -4.613
            },
            "coinbase": {
              "name": "Coinbase",
              "format": [
                "USD",
                "en_US"
              ],
              "last": 11125.005,
              "variation": -4.747
            },
            "bitstamp": {
              "name": "BitStamp",
              "format": [
                "USD",
                "en_US"
              ],
              "last": 11138.22,
              "buy": 11138.22,
              "sell": 11131.5,
              "variation": -4.264
            },
            "foxbit": {
              "name": "FoxBit",
              "format": [
                "BRL",
                "pt_BR"
              ],
              "last": 43548.12,
              "variation": -2.571
            },
            "mercadobitcoin": {
              "name": "Mercado Bitcoin",
              "format": [
                "BRL",
                "pt_BR"
              ],
              "last": 43437.84993,
              "buy": 43050.04003,
              "sell": 43437.82993,
              "variation": -3.899
            },
            "omnitrade": {
              "name": "OmniTrade",
              "format": [
                "BRL",
                "pt_BR"
              ],
              "last": 42500.81,
              "buy": 42500.6,
              "sell": 43120.1,
              "variation": -4.493
            },
            "xdex": {
              "name": "XDEX",
              "format": [
                "BRL",
                "pt_BR"
              ],
              "last": 43784.94,
              "variation": -3.023
            }
          },
          "taxes": [
            {
              "date": "2019-07-03",
              "cdi": 6.4,
              "selic": 6.4,
              "daily_factor": 1.0002462
            }
          ]
        },
        "execution_time": 0,
        "from_cache": true
      }
    },
    mutations: {
      ligar(state) {
        state.liga = !state.liga
        if(state.liga){
          window.setInterval(function() {
            let obj = this
            axios.get('https://api.hgbrasil.com/finance?format=json-cors&key=e875a88a')
            .then(function (response) {
            //     console.log(response.data.results.stocks.IBOVESPA.points)
            // obj.observador(response.data.results.stocks.IBOVESPA.points)
            obj.state.bolsa = response
            console.log(response)
            // obj.bolsa = response.data.results.stocks
            // console.log(response.data)
            })
            .catch(function(error) {
            // console.log(error);
            })
            .finally(function () {
            });
          }, 5000);
        }
      }
    }
  })