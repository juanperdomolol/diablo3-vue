import { post } from 'axios'

// Cogemos los datos de nuestra cuenta de Blizzard
// 🔥 Recuerda que debes usar tus datos a la hora de hacer las llamadas a las APIs
// 🔥 Como dice la documentación, tienes un máximo de llamadas por segundo y por hora a la API.
// 🔥 Estos datos deberían ser privados
const clientId = 'f62edcd1a25d4c6ba159d89a1820d85c'
const clientSecret = '2BSS5NbwR3cRNB8qyhrnC5aneVtF7WBe'

const region = 'eu'
const API_URL = `https://${region}.battle.net/oauth/token`

function getToken () {
  const body = new FormData()

  body.append('grant_type', 'client_credentials')

  const config = {
    headers: { 'Content-type': 'multipart/form-data' },
    auth: { username: clientId, password: clientSecret }
  }
  return post(API_URL, body, config)
}

export default { getToken }
