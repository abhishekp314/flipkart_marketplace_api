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
    describe('Invoice', function() {
      beforeEach(function() {
        instance = new FlipkartMarketplaceApi.Invoice();
      });

      it('should create an instance of Invoice', function() {
        // TODO: update the code to test Invoice
        expect(instance).to.be.a(FlipkartMarketplaceApi.Invoice);
      });

      it('should have the property shipmentId (base name: "shipmentId")', function() {
        // TODO: update the code to test the property shipmentId
        expect(instance).to.have.property('shipmentId');
        // expect(instance.shipmentId).to.be(expectedValueLiteral);
      });

      it('should have the property invoiceDate (base name: "invoiceDate")', function() {
        // TODO: update the code to test the property invoiceDate
        expect(instance).to.have.property('invoiceDate');
        // expect(instance.invoiceDate).to.be(expectedValueLiteral);
      });

      it('should have the property invoiceNumber (base name: "invoiceNumber")', function() {
        // TODO: update the code to test the property invoiceNumber
        expect(instance).to.have.property('invoiceNumber');
        // expect(instance.invoiceNumber).to.be(expectedValueLiteral);
      });

      it('should have the property fssaiLicenseNo (base name: "fssaiLicenseNo")', function() {
        // TODO: update the code to test the property fssaiLicenseNo
        expect(instance).to.have.property('fssaiLicenseNo');
        // expect(instance.fssaiLicenseNo).to.be(expectedValueLiteral);
      });

      it('should have the property orderItems (base name: "orderItems")', function() {
        // TODO: update the code to test the property orderItems
        expect(instance).to.have.property('orderItems');
        // expect(instance.orderItems).to.be(expectedValueLiteral);
      });

    });
  });

}));
