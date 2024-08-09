describe('Проверка авторизации', function () {

    it('1 задача', function () {
         cy.visit('/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.wait(2000);
         cy.get('#exitMessageButton > .exitIcon').click();
     })

     it('2 задача', function() {
        cy.visit('/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('marat@mail.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon')
     })

     it('3 задача', function() {
        cy.visit('/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio111');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.wait(2000);
        cy.get('#exitMessageButton > .exitIcon').click();
     })

     it('4 задача', function () {
        cy.visit('/');
        cy.get('#mail').type('marat@dudin.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.wait(2000);
        cy.get('#exitMessageButton > .exitIcon').click();
    })

    it('5 задача', function () {
        cy.visit('/');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.wait(2000);
        cy.get('#exitMessageButton > .exitIcon').click();
    })

    it('6 задача', function () {
        cy.visit('/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.wait(2000);
        cy.get('#exitMessageButton > .exitIcon').click();
    })
})