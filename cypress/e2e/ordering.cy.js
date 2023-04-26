describe('Автотесты для проверки оформления заказа', function () {
    it('позитивный кейс', function () {
         cy.visit('https://huntingpony.com');
         cy.wait(2000);
         cy.get('[data-index="2"] > .header__collections-controls > .header__collections-link').wait(2000).click();
         cy.wait(2000);
         cy.get('[data-product-id="338932768"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').wait(2000).click();
         cy.wait(2000);
         cy.get('.product__price-cur').contains('4 900 ₽');
         cy.get('.add-cart-counter__btn').click();
         cy.wait(2000);
         cy.get('.add-cart-counter__detail').contains('В корзине 1 шт Перейти').click().wait(2000);
         cy.get('.is-count-up > .icon').click();
         cy.get('.cart-controls > .button').click();
         cy.get('.decorated-title').contains('Оформление заказа');
       


     }) 
})
