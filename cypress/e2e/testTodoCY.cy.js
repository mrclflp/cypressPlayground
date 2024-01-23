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
  it('should mark todo as complete', () => {
    // create 4 default todos
    cy.createDefaultTodos()

    // mark 1st todo as completed + check it appears as completed
    cy.get('[data-testid="todo-item"]:contains(' + todoItems[0] + ')')
      .find('[type=checkbox]')
      .check()

    // check the number of active todos decreased (3)
    cy.get('.todo-count')
      .contains('3 items left')
      .should('be.visible')

    // go to Active tab and check there are 3 active items
    cy.get('a:contains(Active)')
      .click()
    cy.get('[data-testid="todo-item"]').eq(0)
      .should('have.text', todoItems[1])
    cy.get('[data-testid="todo-item"]').eq(1)
      .should('have.text', todoItems[2])
    cy.get('[data-testid="todo-item"]').eq(2)
      .should('have.text', todoItems[3])

    // go to Completed tab and check there is 1st todo only
    cy.get('a:contains(Completed)')
      .click()
    cy.get('[data-testid="todo-item"]')
      .should('have.length', 1)
      .should('have.text', todoItems[0])
      .should('have.class', 'completed')
  })

  // 4. delete a todo
  it('should delete todo', () => {
    // create 4 default todos
    cy.createDefaultTodos()

    // delete 4th todo
    cy.get('[data-testid="todo-item"]').last()
      .find('.destroy').click( {force: true} )

    // check the list contains only 3 todos now
    cy.get('[data-testid="todo-item"]').eq(0)
      .should('be.visible')
      .should('have.text', todoItems[0])
    cy.get('[data-testid="todo-item"]').eq(1)
      .should('be.visible')
      .should('have.text', todoItems[1])
    cy.get('[data-testid="todo-item"]').eq(2)
      .should('be.visible')
      .should('have.text', todoItems[2])
    cy.get('[data-testid="todo-item"]')
      .contains(todoItems[3])
      .should('not.exist')
  })

  // 5. edit a todo
  it('should edit todo', () => {
    // create default todos
    cy.createDefaultTodos()

    // edit 3rd todo
    cy.get('[data-testid="todo-item"]').eq(2)
      .dblclick()
      .find('.edit')
      .clear()
      .type('book wellness for Sunday{enter}')

    // check the 3rd todo is actually edited
    cy.get('[data-testid="todo-item"]').eq(2)
      .should('have.text', 'book wellness for Sunday')
  })

  // 6. mark all todos as completed
  it('should mark all todos as completed', () => {
    // create default todos
    cy.createDefaultTodos()

    // mark all todos as complete
    cy.get('#toggle-all')
      .check()
      
    let todo
    for ( todo in todoItems )
      cy.get('[data-testid="todo-item"]').eq(todo)
        .should('have.class', 'completed')

    // check the number of active todos is 0
    cy.get('.todo-count')
      .should('have.text', '0 items left')

    // check all todos are actually completed
    cy.get('a:contains(Completed)')
      .click()
    cy.get('[data-testid="todo-item"]')
      .should('have.length', 4)
    cy.get('a:contains(Active)')
      .click()
    cy.get('[data-testid="todo-item"]')
      .should('have.length', 0)
  })
})