describe("Tower app", () => {
  it("works", () => {
    cy.visit("http://127.0.0.1:8080/");
    cy.title().should("include", "Galvanize");  => the assert
  });
});