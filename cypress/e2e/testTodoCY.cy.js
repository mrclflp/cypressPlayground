describe('Test the Todo app', () => {

  beforeEach('visit the app', () => {
    cy.visit('/')
  })

  const todoItems = [
    'buy milk & eggs',
    'call grandma',
    'plan birthday party',
    'get tickets to the movies',
  ]

  // 1. check the basic elements
  it('should check the basic elements', () => {
    cy.get('h1:contains(todos)').should('be.visible')
    cy.get('input.new-todo').should('be.visible').and('have.attr', 'placeholder', 'What needs to be done?')
  })

  // 2. adding todos
  it('should add todos', () => {
    // add 1st todo
    cy.get('input.new-todo').type(todoItems[0] + '{enter}')
    // verify it's added
    cy.get('[data-testid="todo-item"]').should('have.length', 1)
    cy.get('[data-testid="todo-item"]').contains(todoItems[0]).should('be.visible')
    // check the counter of added todos (1)
    cy.get('[data-testid="todo-count"]').should('include.text', '1 item left')
    // add 2nd todo
    cy.get('input.new-todo').type(todoItems[1] + '{enter}')
    // verify it's added
    cy.get('[data-testid="todo-item"]').should('have.length', 2)
    cy.get('[data-testid="todo-item"]').contains(todoItems[0]).should('be.visible')
    cy.get('[data-testid="todo-item"]').contains(todoItems[1]).should('be.visible')
    // check the counter of added todos (2)
    cy.get('[data-testid="todo-count"]').should('include.text', '2 items left')
  })

  // 3. mark todo as completed; check active & completed lists
  // 4. delete a todo
  // 5. edit a todo
  // 6. mark all todos as completed
})