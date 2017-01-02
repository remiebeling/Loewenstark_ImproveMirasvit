<?php

class Loewenstark_MirasvitImprovements_AjaxController extends Mage_Core_Controller_Front_Action
{

    public function addProductToCartAction()
    {
        $params = Mage::app()->getRequest()->getParams();
        $qty = 1;
        if(isset($params['qty']) && $params['qty'] != "")
        {
            $qty = (int) $params['qty'];
        }
        if(isset($params['id']) && $params['id'] != "")
        {
            try {
                Mage::getModel('checkout/cart')->addProduct($params['id'], $qty)->save();
            } catch (Exception $ex) {
                //Mage::getModel('customer/session')->addError($ex->getMessage());
                echo $ex->getMessage();
            }
            
        }
        
    }

}
