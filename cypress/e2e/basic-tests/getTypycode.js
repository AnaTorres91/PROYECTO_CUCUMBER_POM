describe('Use  GET method to get daa from typicode', () => {

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

    it.only('GET on typicode.com check status in response and some body properties with expec', () => {
        cy.request('https://jsonplaceholder.typicode.com/comments').then((response) => {
            expect(response.body).to.have.length(500)
            expect(response.status).to.eq(200)
            expect(response.body).to.be.a('array')
            expect(response.duration).to.be.greaterThan(65)
            expect(response.duration).to.be.lessThan(100)
        })
    })
})