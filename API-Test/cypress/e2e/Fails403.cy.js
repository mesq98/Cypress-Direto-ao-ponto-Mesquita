it('fails with 403 (Forbidden) status code when access token is incorrect', () => {
    cy.request({
      method: 'POST',
      url: 'https://localhost:50/winthor/autenticacao/v1/login',
      headers: { accessToken: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJQQ0FETUlOIiwibmJmIjoxNjgyODAyNjM2LCJpc3MiOiJXVEEiLCJleHAiOjE2ODI4MTcwMzYsImlhdCI6MTY4MjgwMjYzNiwianRpIjoiYjQzZDhjNDMtZDhiZC00OGY5LWFkNTMtZTk2NzdhMmFiYmEyIn0.Lmwt57lGGjCTY3mNMZOPI6y1IXg_ZcDdPSZQhH09gwM"},
   
      failOnStatusCode: false,
    }).should(({ status, body }) => {
      expect(status).to.equal(403)
      expect(body).includes('AUTHENTICATION_FAILED')
      expect(body).includes('Authentication failed')
      // Or
      const bodyObj = JSON.parse(body)
      const { code, description } = bodyObj
      expect(code).to.equal('AUTHENTICATION_FAILED')
      expect(description).to.equal('Authentication failed')
    })
  })