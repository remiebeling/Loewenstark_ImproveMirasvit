jQuery(document).ready(function () {
    SearchAutocomplete.prototype.click = function (e)
    {
        var self = this;
        var target = e.target;
        e.stopPropagation();
        e.preventDefault();

        if (jQuery(target).hasClass('search-to-cart-button'))
        {
            this.addToCart(target);
            return false;
        } else if (jQuery(target).hasClass('cart-qty')) {
            return false;
        } else {
            self.select();
        }
        return false;
    }
    
    SearchAutocomplete.prototype.onBlur = function () {
        return false;
    };
    
    SearchAutocomplete.prototype.addToCart = function (element) {
        element = jQuery(element);
        var url = AjaxUrl + 'addproducttocart/';
        var product_id = element.attr('data-product-id');
        this.addMessage(product_id, '');
        jQuery.post(AjaxUrl + 'addproducttocart/',
                {
                    id: product_id,
                    qty: jQuery('#qty-' + element.attr('data-product-id')).val()
                }
        ).done(function (data) {
            if (data)
            {
                SearchAutocomplete.prototype.addMessage(product_id, data);
            } else {
                window.location.href = window.location.href;
            }

        });
    };
    
    SearchAutocomplete.prototype.addMessage = function (product_id, message)
    {
        jQuery('#search-to-cart-message').remove();
        jQuery('#product-' + product_id + '-actions').append('<div id="search-to-cart-message">' + message + '</div>');
    };

});
