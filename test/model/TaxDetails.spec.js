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
    describe('TaxDetails', function() {
      beforeEach(function() {
        instance = new FlipkartMarketplaceApi.TaxDetails();
      });

      it('should create an instance of TaxDetails', function() {
        // TODO: update the code to test TaxDetails
        expect(instance).to.be.a(FlipkartMarketplaceApi.TaxDetails);
      });

      it('should have the property cgstRate (base name: "cgstRate")', function() {
        // TODO: update the code to test the property cgstRate
        expect(instance).to.have.property('cgstRate');
        // expect(instance.cgstRate).to.be(expectedValueLiteral);
      });

      it('should have the property sgstRate (base name: "sgstRate")', function() {
        // TODO: update the code to test the property sgstRate
        expect(instance).to.have.property('sgstRate');
        // expect(instance.sgstRate).to.be(expectedValueLiteral);
      });

      it('should have the property igstRate (base name: "igstRate")', function() {
        // TODO: update the code to test the property igstRate
        expect(instance).to.have.property('igstRate');
        // expect(instance.igstRate).to.be(expectedValueLiteral);
      });

    });
  });

}));
