describe("Tower app", () => {
  it("has the correct Title", () => {
    cy.visit("http://tower-fe.herokuapp.com/");
    cy.title().should("include", "Dojo Sense");
  });
  it("Makes sure there are at least 5 styles listed", () => {
    cy
      .get(".dojo-div")
      .find("div")
      .should("have.length.least", 5);
  });
  it("Can list an individual style based on the style id and checks there is only one item displayed on the page", () => {
    cy
      .get("#listStyleForm")
      .find("input")
      .eq(0)
      .type("2");
    cy
      .get("#listStyleForm")
      .find("input")
      .eq(1)
      .click();
    cy
      .get(".dojo-div")
      .should("have.length", 1);
  });
});
