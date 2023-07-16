module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      
function LoginAPI(User,Senha) {
  cy.get(':nth-child(2) >.login-wrapper__control__inpupt').type(User)
  cy.get(':nth-child(3) >.login-wrapper__control__inpupt').type(Senha)
  cy.get('.gwt-Button').click() // retorno 200    
}

function Desconect(){
  cy.get(':nth-child(6) >.dropdown-toggle').click() 
  cy.get('.sair > .list-group-item').click() // desconect 
}
     
    },
  },
};
