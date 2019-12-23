const axios = require('axios')

module.exports = {
    getCharacters: async () => {
        try {
            return await axios.get('https://rickandmortyapi.com/api/character/')
        } catch (error) {
            console.error(error)
        }
    },
    getCharacterById: async characterId => {        
        try {
            return await axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
        } catch (error) {
            console.error(error)
        }
    }
}
