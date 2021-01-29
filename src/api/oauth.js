import { post } from 'axios'

// Cogemos los datos de nuestra cuenta de Blizzard
// 🔥 Recuerda que debes usar tus datos a la hora de hacer las llamadas a las APIs
// 🔥 Como dice la documentación, tienes un máximo de llamadas por segundo y por hora a la API.
// 🔥 Estos datos deberían ser privados
const clientId = 'f62edcd1a25d4c6ba159d89a1820d85c'
const clientSecret = '2BSS5NbwR3cRNB8qyhrnC5aneVtF7WBe'

const region = 'eu'
const API_URL = `https://${region}.battle.net/oauth/token`
// Creamos la funcion get token
function getToken () {
  // creamos un objeto de tipo FormData que es un conjunto de pares clave/valor
  const body = new FormData()
  // con append le agreamos la clave 'grand_type' y el valor 'client_credentials'
  body.append('grant_type', 'client_credentials')
  // en este objeto llamado config vamos a hacer una parametros para pasar la configuracion
  // que necesitamos para hacer la llamada
  const config = {
    headers: { 'Content-type': 'multipart/form-data' },
    auth: { username: clientId, password: clientSecret }
  }
  // Hacemos un peticion tipo post que le pasamos la URL como primer parametro
  // como segundo el FormData, en un body
  // y por ultimo la configuracion
  return post(API_URL, body, config)
}
// exportamos la funcion para obtnerla mas adelante
export { getToken }
