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
    describe('Price', function() {
      beforeEach(function() {
        instance = new FlipkartMarketplaceApi.Price();
      });

      it('should create an instance of Price', function() {
        // TODO: update the code to test Price
        expect(instance).to.be.a(FlipkartMarketplaceApi.Price);
      });

      it('should have the property mrp (base name: "mrp")', function() {
        // TODO: update the code to test the property mrp
        expect(instance).to.have.property('mrp');
        // expect(instance.mrp).to.be(expectedValueLiteral);
      });

      it('should have the property sellingPrice (base name: "selling_price")', function() {
        // TODO: update the code to test the property sellingPrice
        expect(instance).to.have.property('sellingPrice');
        // expect(instance.sellingPrice).to.be(expectedValueLiteral);
      });

      it('should have the property mop (base name: "mop")', function() {
        // TODO: update the code to test the property mop
        expect(instance).to.have.property('mop');
        // expect(instance.mop).to.be(expectedValueLiteral);
      });

      it('should have the property nlc (base name: "nlc")', function() {
        // TODO: update the code to test the property nlc
        expect(instance).to.have.property('nlc');
        // expect(instance.nlc).to.be(expectedValueLiteral);
      });

      it('should have the property dealerPrice (base name: "dealer_price")', function() {
        // TODO: update the code to test the property dealerPrice
        expect(instance).to.have.property('dealerPrice');
        // expect(instance.dealerPrice).to.be(expectedValueLiteral);
      });

      it('should have the property currency (base name: "currency")', function() {
        // TODO: update the code to test the property currency
        expect(instance).to.have.property('currency');
        // expect(instance.currency).to.be(expectedValueLiteral);
      });

    });
  });

}));