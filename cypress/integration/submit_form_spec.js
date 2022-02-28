describe("submit form", () => {
  it("user can submit form with correct data", () => {
    cy.visit("http://localhost:3000");
    cy.findByRole("textbox", { name: /first name/i }).type("Name");
    cy.findByRole("textbox", { name: /last name/i }).type("Surname");
    cy.findByRole("textbox", { name: /email/i }).type("test@test.com");
    cy.findByRole("button", { name: /choose date/i }).click();
    cy.findByRole("button", {
      name: /calendar view is open, switch to year view/i,
    }).click();
    cy.findByRole("button", { name: /2045/i }).click();
    cy.findByRole("button", { name: /19 lut 2045/i }).click();
    cy.findByRole("button", { name: /submit/i }).click();
  });

  it("user can't submit form with incorrect data", () => {
    cy.visit("http://localhost:3000");
    cy.findByRole("textbox", { name: /first name/i }).type("Name123");
    cy.findByRole("textbox", { name: /last name/i }).type("Surname456");
    cy.findByRole("textbox", { name: /email/i }).type("test");
    cy.findByRole("textbox", { name: /event date/i }).type("22.13.2022");
    cy.findByRole("button", { name: /submit/i }).click();
  });

  it("user corrects incorrect data and submits the form", () => {
    cy.visit("http://localhost:3000");
    cy.findByRole("textbox", { name: /first name/i }).type("Name123");
    cy.findByRole("textbox", { name: /last name/i }).type("Surname456");
    cy.findByRole("textbox", { name: /email/i }).type("test");
    cy.findByRole("button", { name: /submit/i }).click();
    cy.findByRole("textbox", { name: /first name/i }).clear();
    cy.findByRole("textbox", { name: /first name/i }).type("Name");
    cy.findByRole("textbox", { name: /last name/i }).clear();
    cy.findByRole("textbox", { name: /last name/i }).type("Surname");
    cy.findByRole("textbox", { name: /email/i }).clear();
    cy.findByRole("textbox", { name: /email/i }).type("test@test.com");
    cy.findByRole("button", { name: /choose date/i }).click();
    cy.findByRole("button", {
      name: /calendar view is open, switch to year view/i,
    }).click();
    cy.findByRole("button", { name: /2045/i }).click();
    cy.findByRole("button", { name: /19 lut 2045/i }).click();
    cy.findByRole("button", { name: /submit/i }).click();
  });

  it("user can't submit form with empty fields", () => {
    cy.visit("http://localhost:3000");
    cy.findByRole("button", { name: /submit/i }).click();
  });
});
