import * as oauth from '@/api/oauth'

export default {
  namespaced: true,
  state: {
    accessToken: null
  },
  mutations: {
    SET_ACCESS_TOKEN (state, payload) {
      state.accessToken = payload
    }
  },
  actions: {
    getToken ({ commit }) {
      commit('loading/SET', true, { root: true })
      oauth
        .getToken()
        .then(({ data }) => {
          // Aqui se cambio res por ({ data })
          commit('SET_ACCESS_TOKEN', data.access_token)
        })
        .catch(err => {
          commit('SET_ACCESS_TOKEN', null)
          console.log(`Error OAuth: ${err}`)
        })
        .finally(() => {
          commit('loading/SET', false, { root: true })
        })
    }
  }
}

// import * as oauth from '@/api/oauth.js'

// export default {
//   namespaced: true,
//   state: {
//     accessToken: null
//   },
//   mutations: {
//     SET_ACCESS_TOKEN (state, payload) {
//       state.accessToken = payload
//     }
//   },
//   actions: {
//     getToken ({ commit }) {
//       commit('loading/SET', true, { root: true })

//       oauth
//         .getToken()
//         .then(({ data }) => {
//           commit('SET_ACCESS_TOKEN', data.acces_token)
//         })
//         .catch(err => {
//           commit('SET_ACCESS_TOKEN', null)
//           console.log('ERROR OAuth: ', err)
//         })
//         .finally(() => {
//           commit('loading/SET', false, { root: true })
//         })
//     }
//   }
// }
// Importamos nuestra funcion que obtiene el token
// @ es un alias para /src
// creamos la funcion getToken, que recibe como parametro el objeto 'context'
// debido a la asignacion de desestructuracion de JS recogemos 'commit' como argumento
// pasos:
// 1.hacer llamada http para obtener el token
// 2.si todo esta bien guardar el token en "accesToken" y continuar el flujo normal
// 3.si hay error limpiar el "accesToken" y mostrar el log del error
// paso 1
// paso 2 guardamos el valor del token llamando a nuestra mutaciòn
// paso 3, en caso de error limpiar el token
// por ahora no se hace nada aqui, si pasa error se imprime en consola
