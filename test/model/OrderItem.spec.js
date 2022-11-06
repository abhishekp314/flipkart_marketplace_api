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
    describe('OrderItem', function() {
      beforeEach(function() {
        instance = new FlipkartMarketplaceApi.OrderItem();
      });

      it('should create an instance of OrderItem', function() {
        // TODO: update the code to test OrderItem
        expect(instance).to.be.a(FlipkartMarketplaceApi.OrderItem);
      });

      it('should have the property orderItemId (base name: "orderItemId")', function() {
        // TODO: update the code to test the property orderItemId
        expect(instance).to.have.property('orderItemId');
        // expect(instance.orderItemId).to.be(expectedValueLiteral);
      });

      it('should have the property orderId (base name: "orderId")', function() {
        // TODO: update the code to test the property orderId
        expect(instance).to.have.property('orderId');
        // expect(instance.orderId).to.be(expectedValueLiteral);
      });

      it('should have the property cancellationGroupId (base name: "cancellationGroupId")', function() {
        // TODO: update the code to test the property cancellationGroupId
        expect(instance).to.have.property('cancellationGroupId');
        // expect(instance.cancellationGroupId).to.be(expectedValueLiteral);
      });

      it('should have the property orderDate (base name: "orderDate")', function() {
        // TODO: update the code to test the property orderDate
        expect(instance).to.have.property('orderDate');
        // expect(instance.orderDate).to.be(expectedValueLiteral);
      });

      it('should have the property cancellationDate (base name: "cancellationDate")', function() {
        // TODO: update the code to test the property cancellationDate
        expect(instance).to.have.property('cancellationDate');
        // expect(instance.cancellationDate).to.be(expectedValueLiteral);
      });

      it('should have the property paymentType (base name: "paymentType")', function() {
        // TODO: update the code to test the property paymentType
        expect(instance).to.have.property('paymentType');
        // expect(instance.paymentType).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property cancellationReason (base name: "cancellationReason")', function() {
        // TODO: update the code to test the property cancellationReason
        expect(instance).to.have.property('cancellationReason');
        // expect(instance.cancellationReason).to.be(expectedValueLiteral);
      });

      it('should have the property cancellationSubReason (base name: "cancellationSubReason")', function() {
        // TODO: update the code to test the property cancellationSubReason
        expect(instance).to.have.property('cancellationSubReason');
        // expect(instance.cancellationSubReason).to.be(expectedValueLiteral);
      });

      it('should have the property courierReturn (base name: "courierReturn")', function() {
        // TODO: update the code to test the property courierReturn
        expect(instance).to.have.property('courierReturn');
        // expect(instance.courierReturn).to.be(expectedValueLiteral);
      });

      it('should have the property quantity (base name: "quantity")', function() {
        // TODO: update the code to test the property quantity
        expect(instance).to.have.property('quantity');
        // expect(instance.quantity).to.be(expectedValueLiteral);
      });

      it('should have the property fsn (base name: "fsn")', function() {
        // TODO: update the code to test the property fsn
        expect(instance).to.have.property('fsn');
        // expect(instance.fsn).to.be(expectedValueLiteral);
      });

      it('should have the property sku (base name: "sku")', function() {
        // TODO: update the code to test the property sku
        expect(instance).to.have.property('sku');
        // expect(instance.sku).to.be(expectedValueLiteral);
      });

      it('should have the property listingId (base name: "listingId")', function() {
        // TODO: update the code to test the property listingId
        expect(instance).to.have.property('listingId');
        // expect(instance.listingId).to.be(expectedValueLiteral);
      });

      it('should have the property hsn (base name: "hsn")', function() {
        // TODO: update the code to test the property hsn
        expect(instance).to.have.property('hsn');
        // expect(instance.hsn).to.be(expectedValueLiteral);
      });

      it('should have the property title (base name: "title")', function() {
        // TODO: update the code to test the property title
        expect(instance).to.have.property('title');
        // expect(instance.title).to.be(expectedValueLiteral);
      });

      it('should have the property packageIds (base name: "packageIds")', function() {
        // TODO: update the code to test the property packageIds
        expect(instance).to.have.property('packageIds');
        // expect(instance.packageIds).to.be(expectedValueLiteral);
      });

      it('should have the property priceComponents (base name: "priceComponents")', function() {
        // TODO: update the code to test the property priceComponents
        expect(instance).to.have.property('priceComponents');
        // expect(instance.priceComponents).to.be(expectedValueLiteral);
      });

      it('should have the property serviceProfile (base name: "serviceProfile")', function() {
        // TODO: update the code to test the property serviceProfile
        expect(instance).to.have.property('serviceProfile');
        // expect(instance.serviceProfile).to.be(expectedValueLiteral);
      });

      it('should have the property isReplacement (base name: "is_replacement")', function() {
        // TODO: update the code to test the property isReplacement
        expect(instance).to.have.property('isReplacement');
        // expect(instance.isReplacement).to.be(expectedValueLiteral);
      });

    });
  });

}));
