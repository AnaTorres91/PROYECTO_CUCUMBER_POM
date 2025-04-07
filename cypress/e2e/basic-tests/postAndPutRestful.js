
describe('Testing POST and PUT on Typicode', () => { 
         
    // it('GET on restful, check the status, properties and values', () => {
    //     ('https://api.restful-api.dev/objects');
    //     cy.request('https://api.restful-api.dev/objects/1').then((response) => {
    //         expect(response.status).to.eq(200)
    //         expect(response.body).to.be.a('object')
    //         expect(response.body).not.to.be.a('number')
    //         expect(response.body).include.all.keys(["id", "name", "data"]);      
    //         expect(response.body.id).to.eq("1")
    //         expect(response.body.name).to.include("Google Pixel 6 Pro")
    //         expect(response.body.data).to.deep.eq(
    //             {"color": "Cloudy White",
    //             "capacity": "128 GB"
    //             })
    //         })
    //     })

    // it('PUT on restful values and check the new values', () => {
    //     const realData = {
    //             id: "2",
    //             name: "Apple iPhone 12 Mini, 256GB, Blue",
    //             data: null
    //     } 
    //     const put2 = {
    //         name: "new Iphone",
    //         data: "the last Iphone in the world"
    //     }
    //     cy.request('https://api.restful-api.dev/objects/2').then((response) => {
    //         expect(response.status).to.eq(200)
    //         expect(response.body).to.include(realData)
    //     })

    //     cy.request('PUT', 'https://api.restful-api.dev/objects/2', put2).then((response) => {
    //         expect(response.status).to.eq(200)
    //         expect(response.body).to.eq(put2)
    //     })
    // })   

    // it('PATCH and check the response', () => {
    //     cy.request('PATCH', 'https://api.restful-api.dev/objects/3', 
    //       {
    //         id: "25",
    //         name: 'hola', 
    //         data: 'adióss',
    //       }
    //     ).then((response) => {
    //         expect(response.status).to.eq(200);
    //         expect(response.body.id).to.eq('25');
    //         expect(response.body.name).to.eq('hola');
    //         expect(response.body.data).to.contain('adióss')
    
    //       });
    //     });


    //Ejercicios 07/04/2025 Nivel 2

    it('Send a POST, get for id and delete', () => {
        const postDataTesting = {
            name: 'testing nivel 2', 
            data: "Esto es una prueba"
          }
        cy.request('POST', 'https://api.restful-api.dev/objects', postDataTesting).then((response) => {
          cy.log(JSON.stringify(response.body))
          expect(response.status).to.eq(200)
          expect(response.body).to.be.a('object')
          expect(response.body.name).to.include("testing nivel 2")
          expect(response.body.data).to.eq('Esto es una prueba')
          expect(response.body).to.contain(postDataTesting) //Engloba lo anterior
          cy.wrap(response.body.id).as('id')
          cy.wrap(response.body.createdAt).as('date')
        })
        cy.get('@id').then((id) => {
          cy.log(id);
          cy.request('GET', `https://api.restful-api.dev/objects/${id}`)
            .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.deep.include(postDataTesting);
        })
        cy.request('DELETE', `https://api.restful-api.dev/objects/${id}`) .then((response) => {
            expect(response.body.message).to.eq(`Object with id = ${id} has been deleted.`);
          })
         
    })
})
})

