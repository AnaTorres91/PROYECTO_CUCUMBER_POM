describe('Use  GET method to get data from typicode', () => {

    it('first visit and get on tpicode.com', () => {
        cy.visit ('https://jsonplaceholder.typicode.com/')
        cy.request({
            method:'GET',
            url: '/posts'
        })
    })

    it('GET on typicode.com with properties', () => {
        cy.request({
            method:'GET',
            url: 'https://jsonplaceholder.typicode.com/posts'
        })
    })

    it('GET on typicode.com no properties', () => {
        cy.request('GET','https://jsonplaceholder.typicode.com/posts')
    })

    it('GET on typicode.com without add the GET string', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts')
    })

    it('GET on typicode.com without and check status in response', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts').then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('GET on typicode.com without add and check status in response better', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts').its('status').should('eq', 200)
    })

    it('GET on typicode.com without add and check length', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts').its('body').should('have.length', 100)
    })

    it('GET on typicode.com without and check lenght and status', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts').then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.length(100)   
        })
    })

    it('GET on typicode.com check status in response and some body properties with expec', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts').then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.length(100) 
            expect(response.body).to.be.a('array')
            expect(response.body).not.to.be.a('number')
        })
    })

    it('GET on typicode.com check status in response and some body properties with should', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts').should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.length(100) 
            expect(response.body).to.be.a('array')
            expect(response.body).not.to.be.a('number')
        })
    })

    it('GET on typicode.com check status in response and some body properties with should in post/1', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts/1').should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.be.a('object')
            expect(response.body).not.to.be.a('number')
            expect(response.body).not.to.be.a('string')
        })
    })

    it('GET on typicode.com check status in response and some body properties with should in post', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts/').should((response) => {
            response.body.forEach((array) => {
                expect(array).to.include.all.keys(["userId","id","title", "body"])
            })
        })
    })

    it('GET on typicode.com check status in response and some body properties with expec', () => {
        cy.request('https://jsonplaceholder.typicode.com/comments').then((response) => {
            expect(response.body).to.have.length(500)
            expect(response.status).to.eq(200)
            expect(response.body).to.be.a('array')
            expect(response.duration).to.be.greaterThan(65)
            expect(response.duration).to.be.lessThan(100)
        })
    })

//Ejercicios 31/03/2025
    it('Nivel 1 GET on typicode.com/photos check status in response and some body properties with expec', () => {
        cy.request('https://jsonplaceholder.typicode.com/photos').then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.be.a('array') 
            expect(response.body).not.to.be.a('object')
            expect(response.body).to.have.length(5000)
        })
    })

    it('Nivel 1 GET on typicode.com/todos check status in response and some body properties with expec', () => {
        cy.request('https://jsonplaceholder.typicode.com/todos').then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.be.a('array') 
            expect(response.body).not.to.be.a('string')
            expect(response.body).to.have.length(200) 
        })
    })

    it('Nivel 2 GET on typicode.com/todos/1 check status in response and some body properties with expec', () => {
       cy.request('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.include.all.keys(["userId","id","title", "completed"])
            expect(response.body).to.have.property("title","delectus aut autem").that.is.a("string")
            expect(response.body.title).to.be.a('string')
            expect(response.body.title).to.eq("delectus aut autem")
            expect(response.body.title).include('delectus')
            expect(response.body).to.have.property('completed', false)
            expect(response.body.completed).to.be.a('boolean')
            expect(response.body).deep.equal( 
                {
                    "userId": 1,
                    "id": 1,
                    "title": "delectus aut autem",
                    "completed": false
                  }
            )

         })
   })

   it('Check email for id=4 using find', () => {
        cy.request('https://jsonplaceholder.typicode.com/post/1/comments').should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.be.a('array')
            expect(response.body).to.have.length(5)
            expect(response.body.find((alias) => alias.id === 4)).to.exist
            
            const id_4 = response.body.find((alias) => alias.id === 4) 

            expect(id_4).to.exist
            expect(id_4.email).to.be.a ('string')
            expect(id_4.email).to.eq('Lew@alysha.tv')
            expect(id_4.email).to.contain('@')
            expect(id_4.name).to.be.a ('string')
            expect(id_4.name).to.contain('alias')
            expect(id_4.name).to.eq('alias odio sit')
            expect(id_4.body).to.eq("non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati")

            const name = response.body.find((aliasName) => aliasName.name === "id labore ex et quam laborum")
            expect(name.email).to.be.include("er.biz")
            })
        })
  
    it('Check email for id=4 using some', () => {
        cy.request('https://jsonplaceholder.typicode.com/post/1/comments').should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.be.a('array')
            expect(response.body).to.have.length(5)
            expect(response.body.some(({ id, email, name, body }) => id === 4 && email === 'Lew@alysha.tv' && name === 'alias odio sit' && body === "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati" )).to.be.true
        })
    })

    it('Check email for id=4 using some', () => {
        cy.request('https://jsonplaceholder.typicode.com/post/1/comments').should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.be.a('array')
            expect(response.body).to.have.length(5)

           response.body.forEach((comment) => {
            if (comment.id === 4) {
            expect(comment.email).to.be.a('string')
            expect(comment.email).to.be.eq('Lew@alysha.tv')
            }
        })
    })
})
    
    it('get data from a typicode/post1, check its status code, type of responde body and evaluates type of value', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts/1').should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.be.a('object')
             Object.values(response.body).forEach((value) => {
                expect (typeof value === 'number'|| typeof value === 'string').to.be.true
            })
            expect(response.body['title']).to.be.a('string').eq(
                "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
            )
            expect(response.body['userId']).to.be.a('number').to.eq(1)
            expect(response.body['body']).to.be.a('string').to.contain(
                "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"

            )

    })
})
// it('get data from a typicode/post1/comments,check its status code, type of responde body and assert over object with id', () => {
//     cy.request('https://jsonplaceholder.typicode.com/posts/1/comment').should((response) => {
//         expect(response.status).to.eq(200)
//         expect(response.body).to.be.a('array')
//         expect(response.body).to.have.length(5)
//         response.body.filter((comment) => {
//             comment.name === "alias odio sit" && expect (comment.email).to.eq('Lew@alysha.tv')
//         })
//     })
// })

it('a 404 error is displayed when getting data from typicode/post1/comment', () => {
    cy.request({
        url: 'https://jsonplaceholder.typicode.com/posts/1/error',
        failOnStatusCode: false,
    }).should((response) => {
            expect(response.status).to.eq(404)
        })
        })

})


//!= significa NO
//|| significa o
// const se declara antes de usarla y después el then
