it('Test API Login', () => {

 // teste desktop teste 

    cy.request({
        method: 'POST',
        url: 'http://localhost:50/winthor/autenticacao/v1/login',
        body: {
          "login": "PCADMIN",
          "senha": "C4CA4238A0B923820DCC509A6F75849B"
        },
        log: true,
        failOnStatusCode: true,
        encoding: 'binary',
        timeout: 60000,
                                
      }).then((response) => {
       // expect(response.body).to.have.property('parameters', 'value')
       expect(response.status).to.eq(200)
       cy.log('TOKEN GERADO', response.body)
       cy.writeFile('/Projects/Thunder/TesteQA/API-Test/cypress/e2e/TokenGerado.json', response.body, 'binary')
      });
});

