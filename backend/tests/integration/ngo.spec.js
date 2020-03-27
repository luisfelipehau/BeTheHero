const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');


describe('NGO', () => {
    beforeEach(async () =>{
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    //afterEach();

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new NGO', async () => {
        const response = await request(app).post('/ngos')
        .send({            
            name: "APAD2",
            email: "contato@apad.com.br",
            whatsapp: "41991613493",
            city: "Mafra",
            uf: "SC"
        });

        //console.log(response.body);

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});