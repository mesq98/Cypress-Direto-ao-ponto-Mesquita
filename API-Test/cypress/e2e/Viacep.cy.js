describe("Testes automaticos da API consulta CEP", ()=>{
    it('Consulta de um CEP válido', ()=>{
        cy.request({
            method: 'GET',
            url: 'https://viacep.com.br/ws/75350000/json/',
            failOnStatusCode: false
        }).as('response')
        cy.get('@response').should((response)=>{
    
        })
    })

})