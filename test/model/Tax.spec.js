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
    describe('Tax', function() {
      beforeEach(function() {
        instance = new FlipkartMarketplaceApi.Tax();
      });

      it('should create an instance of Tax', function() {
        // TODO: update the code to test Tax
        expect(instance).to.be.a(FlipkartMarketplaceApi.Tax);
      });

      it('should have the property hsn (base name: "hsn")', function() {
        // TODO: update the code to test the property hsn
        expect(instance).to.have.property('hsn');
        // expect(instance.hsn).to.be(expectedValueLiteral);
      });

      it('should have the property isGstSellable (base name: "is_gst_sellable")', function() {
        // TODO: update the code to test the property isGstSellable
        expect(instance).to.have.property('isGstSellable');
        // expect(instance.isGstSellable).to.be(expectedValueLiteral);
      });

      it('should have the property goodsServicesRate (base name: "goods_services_rate")', function() {
        // TODO: update the code to test the property goodsServicesRate
        expect(instance).to.have.property('goodsServicesRate');
        // expect(instance.goodsServicesRate).to.be(expectedValueLiteral);
      });

      it('should have the property taxCode (base name: "tax_code")', function() {
        // TODO: update the code to test the property taxCode
        expect(instance).to.have.property('taxCode');
        // expect(instance.taxCode).to.be(expectedValueLiteral);
      });

      it('should have the property luxuryCessPercentage (base name: "luxury_cess_percentage")', function() {
        // TODO: update the code to test the property luxuryCessPercentage
        expect(instance).to.have.property('luxuryCessPercentage');
        // expect(instance.luxuryCessPercentage).to.be(expectedValueLiteral);
      });

    });
  });

}));