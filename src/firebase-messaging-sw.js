import { initializeApp } from 'firebase/app'
import { getMessaging, getToken } from 'firebase/messaging'

const firebaseConfig = {
  apiKey: 'AIzaSyAGrLwvv0_s--vjRTUobuoOnYV4Wb7TeQE',
  authDomain: 'test-pwa-95148.firebaseapp.com',
  projectId: 'test-pwa-95148',
  storageBucket: 'test-pwa-95148.appspot.com',
  messagingSenderId: '491727938159',
  appId: '1:491727938159:web:b615ae9e2610b05981a39a',
  measurementId: 'G-L83GEF3E4W'
}
const app = initializeApp(firebaseConfig)
const messaging = getMessaging(app)

getToken(messaging, { vapidKey: 'BN-lUGf4dDGwe5-5nh_pHpx-KtnJvsIkq_TxUTDwK4XhnFWrw_IWT-gIqA-SK5GEd16AtlmblvD7N3lgTggl01M' })
  .then((currentToken) => {
    if (currentToken) {
      console.log('currentToken', currentToken)
    } else {
      console.log('Can not get token')
    }
  })

function requestPermission () {
  console.log('Requesting permission...')

  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.')
    } else {
      console.log('Do not have permission')
    }
  })
}

requestPermission()
