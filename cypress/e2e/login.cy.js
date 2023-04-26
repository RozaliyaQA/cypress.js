describe('Автотесты для формы логина и пароля', function () {
    it('Верный логин, верный пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#loginButton').should ('be.disabled');
         cy.get ('#mail').type('german@dolnikov.ru');
         cy.get('#loginButton').should ('be.disabled');
         cy.get ('#pass'). type ('iLoveqastudio1');
         cy.get('#loginButton').should ('be.enabled').click();
         cy.contains ('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon');
         
     }) 
})



describe('Автотесты для формы логина и пароля', function () {
    it('Неверный логин, верный пароль', function () {
        cy.clearAllCookies();
         cy.visit('https://login.qa.studio/');
         cy.get('#loginButton').should ('be.disabled');
         cy.get ('#mail').type('germando@lnikov.kotikru');
         cy.get('#loginButton').should ('be.disabled');
         cy.get ('#pass'). type ('iLoveqastudio1');
         cy.get('#loginButton').should ('be.enabled').click();
         cy.contains ('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon');
         
     }) 
})


describe('Автотесты для формы логина и пароля', function () {
    it('верный логин, неверный пароль', function () {
        cy.clearAllCookies();
         cy.visit('https://login.qa.studio/');
         cy.get('#loginButton').should ('be.disabled');
         cy.get ('#mail').type('german@dolnikov.ru');
         cy.get('#loginButton').should ('be.disabled');
         cy.get ('#pass'). type ('iLovepizza1');
         cy.get('#loginButton').should ('be.enabled').click();
         cy.contains ('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon');
         
     }) 
})


describe('Автотесты для формы логина и пароля', function () {
    it('Логин без @ и верный пароль', function () {
        cy.clearAllCookies();
         cy.visit('https://login.qa.studio/');
         cy.get('#loginButton').should ('be.disabled');
         cy.get ('#mail').type('germandolnikov.ru');
         cy.get('#loginButton').should ('be.disabled');
         cy.get ('#pass'). type ('iiLoveqastudio1');
         cy.get('#loginButton').should ('be.enabled').click();
         cy.contains ('Нужно исправить проблему валидации');
         cy.get('#exitMessageButton > .exitIcon');
         
     }) 
})


describe('Автотесты для формы логина и пароля', function () {
    it('Восстановление пароля', function () {
        cy.clearAllCookies();
         cy.visit('https://login.qa.studio/');
         cy.get('#forgotEmailButton').click();
         cy.contains ('Восстановите пароль');
         cy.get('#forgotForm').click().type('german@dolnikov.ru');
         cy.get('#restoreEmailButton');
         cy.contains('Отправить код').click();
         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
         cy.get('#exitMessageButton > .exitIcon').click();
         cy.get('#form > .header');
     }) 
})


describe('Автотесты для формы логина и пароля', function () {
    it('Замена заглавных на строчные буквы', function () {
        cy.clearAllCookies();
         cy.visit('https://login.qa.studio/');
         cy.get('#loginButton').should ('be.disabled');
         cy.get ('#mail').type('gerMAN@dolnikov.ru');
         cy.get('#pass').click().type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.contains('Авторизация прошла успешно');
         cy.get('[data-layer="Content"]');

         
     }) 
})