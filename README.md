# Loewenstark_MirasvitImprovements
Adds "add to cart" functionality to search autocomplete

## Installation:
the usual modman Way. 
Keep in Mind that you have to enable the module in System config.

you also need to edit the mirasvit searchautocomplete Template located in:
app/design/frontend/base/default/template/mst_searchautocomplete/autocomplete/index/mage/catalog/

remember to copy it to your custom theme before doing so.

You have to add these lines.

```php
    <?php if(Mage::getStoreConfigFLag('searchautocomplete/loewenstark_improvements/active') && $_product->isSalable()):?>
        <div id="product-<?php echo $_product->getId(); ?>-actions" class="add-to-cart-container">
            <input type="number" value="1" min="1" max="" name="cart-qty" class="cart-qty" id="qty-<?php echo $_product->getId()?>"/>
            <div class="search-to-cart-button" data-product-id="<?php echo $_product->getId(); ?>">
                To cart
            </div>
        </div>
    <?php endif; ?>  
```






