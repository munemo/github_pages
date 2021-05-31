import Axios from 'axios'

const productionAPI = ''
const developmentAPI = 'https://mearn-deployment.herokuapp.com/'

const CalendarAPI = Axios.create({
    baseURL:developmentAPI

})

export default CalendarAPI