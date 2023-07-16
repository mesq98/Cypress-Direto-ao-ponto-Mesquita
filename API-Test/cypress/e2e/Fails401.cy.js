it(' Test API LOGIN fails with 401 (Unauthorized) status code when access token is missing', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:50/winthor/autenticacao/v1/login',
      failOnStatusCode: true,
      headers: { accessToken: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJQQ0FETUlOIiwibmJmIjoxNjgyODAyNjM2LCJpc3MiOiJXVEEiLCJleHAiOjE2ODI4MTcwMzYsImlhdCI6MTY4MjgwMjYzNiwianRpIjoiYjQzZDhjNDMtZDhiZC00OGY5LWFkNTMtZTk2NzdhMmFiYmEyIn0.Lmwt57lGGjCTY3mNMZOPI6y1IXg_ZcDdPSZQhH09gwM'},
    }).should(({ status, body }) => {
      expect(status).to.equal(401)
      expect(body).includes('AUTHENTICATION_FAILED')
      expect(body)
        .includes('Authentication credentials not found on the Request Headers')
      // Or
      const bodyObj = JSON.parse(body)
      const { code, description } = bodyObj
      expect(code).to.equal('AUTHENTICATION_FAILED')
      expect(description)
        .to.equal('Authentication credentials not found on the Request Headers')
    })
  })