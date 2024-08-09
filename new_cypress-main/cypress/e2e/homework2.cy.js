describe('Проверка авторизации', function () {
    afterEach('Конец теста', function () {
        cy.wait(2000);
        cy.get('.top_menu_exit').click();
       });
    it('Логин', function () {
         cy.visit('https://pokemonbattle.ru/login');
         cy.get(':nth-child(1) > .auth__input').type('Мой логин');
         cy.get('#password').type('Мой пароль');
         cy.get('.auth__button').click();
         cy.get('.header__btns > :nth-child(4)').click();
         cy.get('.available > button').first().click();
         cy.wait(1000);
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('5555 5555 5555 5599');
         cy.wait(1000);
         cy.get(':nth-child(1) > .pay_base-input-v2').type('06/28');
         cy.wait(1000);
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
         cy.wait(1000);
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Marat Dudin');
         cy.wait(1000);
         cy.get('.pay-btn').click();
         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').click();
         cy.get('.payment__adv').click();
        })
})