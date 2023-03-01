'use strict';

let loader = $('.loader');
$(document).ready(function(){

    let productInput = $('.order-input.write').eq(0);
    let nameInput = $('.order-input.name').eq(0);
    let phoneInput = $('.order-input.telephone').eq(0);
    let errorProduct = $('.error-input.product').eq(0);
    let errorName = $('.error-input.name').eq(0);
    let errorPhone = $('.error-input.phone').eq(0);
    const borderNormalColor = 'rgb(130, 19, 40)';
    const borderWarningColor = 'rgb(255,0,0)';

    let popUp = $('.popUp').eq(0);
    let form = $('form.order-form').eq(0);

    $('.rights span').text((new Date()).getFullYear());

    $('#btn-main').click(function(){
        $('.products')[0].scrollIntoView({behavior:"smooth"});
    });
    $('.btn-items').click((e) => {
        productInput.val($(e.target).parents('.product-item').find('.product-title').text());

        $('.order')[0].scrollIntoView({behavior:"smooth"});
    })

    phoneInput.inputmask({"mask": "+375 (99) 999-9999"});

    $('.btn.btn-order').click(function () {
        let hasError = false;
        errorProduct.hide();
        errorName.hide();
        errorPhone.hide();
        productInput.css('border-color', borderNormalColor);
        nameInput.css('border-color', borderNormalColor);
        phoneInput.css('border-color', borderNormalColor);

        if(!productInput.val()) {
            errorProduct.css('display', 'flex');
            productInput.css('border-color', borderWarningColor);
            hasError = true;

        }    if(!nameInput.val()) {
            errorName.css('display', 'flex');
            nameInput.css('border-color', borderWarningColor);
            hasError = true;

        }    if(!phoneInput.val()) {
            errorPhone.css('display', 'flex');
            phoneInput.css('border-color', borderWarningColor);
            hasError = true;

        }
            if(!hasError){
                console.log(nameInput.val());
                console.log(productInput.val());
                console.log(phoneInput.val());
                loader.css('display', 'flex');
                $.ajax({
                    method: "POST",
                    url: "https://testologia.site/checkout",
                    data: { product: productInput.val(), name: nameInput.val(), phone: phoneInput.val() }
                })
                    .done(function(msg) {
                        console.log(msg);
                        loader.hide();
                        if(msg.success){
                            productInput.val('');
                            nameInput.val('');
                            phoneInput.val('');
                            form.hide();
                            popUp.css('display', 'flex');
                        } else {
                            alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
                        }
                    });
            }
    });
});