/*
 * Flipkart Marketplace API
 * This API is offered by Flipkart Marketplace to sellers and partners for orders and listing management. <br /><br />You will need an access token to explore our APIs in the sandbox environment. For details on getting an access token, refer to the <a href='https://seller.flipkart.com/api-docs/FMSAPI.html#sandbox-environment'> documentation</a>. <br />Once you get the access token, use it to authorize the requests using the  <code>Authorize</code> button below. e.g. if your access token is <code>ACCTOK1</code>, the input for authorization should be <code>Bearer ACCTOK1</code>
 *
 * OpenAPI spec version: 3.0
 * Contact: seller-api-queries@flipkart.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.35
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.FlipkartMarketplaceApi);
  }
}(this, function(expect, FlipkartMarketplaceApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('ShipmentDetails', function() {
      beforeEach(function() {
        instance = new FlipkartMarketplaceApi.ShipmentDetails();
      });

      it('should create an instance of ShipmentDetails', function() {
        // TODO: update the code to test ShipmentDetails
        expect(instance).to.be.a(FlipkartMarketplaceApi.ShipmentDetails);
      });

      it('should have the property orderId (base name: "orderId")', function() {
        // TODO: update the code to test the property orderId
        expect(instance).to.have.property('orderId');
        // expect(instance.orderId).to.be(expectedValueLiteral);
      });

      it('should have the property shipmentId (base name: "shipmentId")', function() {
        // TODO: update the code to test the property shipmentId
        expect(instance).to.have.property('shipmentId');
        // expect(instance.shipmentId).to.be(expectedValueLiteral);
      });

      it('should have the property orderItems (base name: "orderItems")', function() {
        // TODO: update the code to test the property orderItems
        expect(instance).to.have.property('orderItems');
        // expect(instance.orderItems).to.be(expectedValueLiteral);
      });

      it('should have the property weighingRequired (base name: "weighingRequired")', function() {
        // TODO: update the code to test the property weighingRequired
        expect(instance).to.have.property('weighingRequired');
        // expect(instance.weighingRequired).to.be(expectedValueLiteral);
      });

      it('should have the property deliveryAddress (base name: "deliveryAddress")', function() {
        // TODO: update the code to test the property deliveryAddress
        expect(instance).to.have.property('deliveryAddress');
        // expect(instance.deliveryAddress).to.be(expectedValueLiteral);
      });

      it('should have the property billingAddress (base name: "billingAddress")', function() {
        // TODO: update the code to test the property billingAddress
        expect(instance).to.have.property('billingAddress');
        // expect(instance.billingAddress).to.be(expectedValueLiteral);
      });

      it('should have the property buyerDetails (base name: "buyerDetails")', function() {
        // TODO: update the code to test the property buyerDetails
        expect(instance).to.have.property('buyerDetails');
        // expect(instance.buyerDetails).to.be(expectedValueLiteral);
      });

      it('should have the property sellerAddress (base name: "sellerAddress")', function() {
        // TODO: update the code to test the property sellerAddress
        expect(instance).to.have.property('sellerAddress');
        // expect(instance.sellerAddress).to.be(expectedValueLiteral);
      });

      it('should have the property returnAddress (base name: "returnAddress")', function() {
        // TODO: update the code to test the property returnAddress
        expect(instance).to.have.property('returnAddress');
        // expect(instance.returnAddress).to.be(expectedValueLiteral);
      });

      it('should have the property courierDetails (base name: "courierDetails")', function() {
        // TODO: update the code to test the property courierDetails
        expect(instance).to.have.property('courierDetails');
        // expect(instance.courierDetails).to.be(expectedValueLiteral);
      });

    });
  });

}));
