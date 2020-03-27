const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const categories = await connection('category').select('*');

        return response.json(categories);
    },
    async create(request, response) {
        const { name } = request.body;
        const id = crypto.randomBytes(4).toString('HEX');

        const [category] = await connection('category').insert({
            id,
            name,        
        });

        return response.json({ category });
    
    }
}

        