import axios from 'axios'

export function fetchSummary() {
    return axios.get('https://api.covid19api.com/summary')
}