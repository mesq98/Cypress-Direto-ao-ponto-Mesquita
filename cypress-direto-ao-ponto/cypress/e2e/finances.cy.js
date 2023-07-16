describe('Transações', () => {
//hooks -> executar antes ou depois / de cada ou de todos os testes
// before - Um vez antes de todos os teste
// after - executar UMA VEZ DEPOIS de todos os teste
// beforeEach - executar ANTES de cada teste
// afterEach - executar DEPIS  de cada teste

beforeEach(() => {
    cy.visit("https://devfinance-agilizei.netlify.app/") //visitar site 
});

    it('Cadastrar uma entrada', () => {
         CriarTranscao("Unibanco", 100)
         CriarTranscao("Biel", 100)
         CriarTranscao("Marly", 100)
         CriarTranscao("Djalma", 500)
         ValidarNome("Djalma")
        // CriarTranscao("Elinia", "50")
        // CriarTranscao("Michelly", "100")
       //  cy.get("tbody tr td.description").should("have.text", "Unibanco")// procure na tela a palavra unibanco
       //  cy.get("tbody tr td.description").should("have.text", "Djalma") 

         cy.contains(".description", "Biel")
         .siblings() // Identifique os irmao do pai TD -> Tr
         .children('img') // localiza um filho, imagem clicavel
         .click()
         
       //  cy.get('tbody tr').should("have.length", 4) // nossa tbody tr vai ser as linhas, a quantidade de linhas é X
   
    });

    it('Cadastrar Saidas', () => {
        CriarTranscao("Djalma", "-100")
      //  CriarTranscao("Gabriel", "-100")
     //  cy.get("tbody tr td.description").should("have.text", "Djalma") // procure na tela a palavra unibanco
    });

    it('Excluir Transacao', () => {
        CriarTranscao("Biel", 100)
        //CriarTranscao("Marly", 100)
      /*  cy.contains(".description", "Biel") // td -> referencia 
        .parent() //elemento pai <tr data-index="0">
        .find('img') // imagem clicavel 
        .click()  // ação de clicar */
    
        cy.contains(".description", "Biel")
        .siblings() // Identifique os irmao do pai TD -> Tr
        .children('img') // localiza um filho, imagem clicavel
        .click()
        
        /*
         <body> --> pai
                 <tr> ---> varios Tr é irmão 
                            <th>Descrição</th> --> Filho do TR (Filho do irmao)
                            <th>Valor</th>
                            <th>Data</th>
                            <th></th>
                </tr>
        </body>*/     
    
    
        cy.get('tbody tr').should("have.length", 1)
    }); 
    
    
});


function ValidarNome(Nome) {
    cy.get('#description').should("have.text", 'Djalma') 
};


function CriarTranscao(descricao, valor) {

    cy.contains('+ Nova Transação').click() //identifique um botão é clique
    cy.get('#description').type(descricao) // get, inseri um o txt unibanco no campo Description, coletado pelo impressionar elemento
    cy.get('#amount').type(valor)
    cy.get('#date').type("2023-04-09") //2023-04-09 - exemplo aaaa/mm/dd
    cy.get('button').click()
   
   
    };