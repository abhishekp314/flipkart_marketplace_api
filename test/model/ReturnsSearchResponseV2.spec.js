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
    describe('ReturnsSearchResponseV2', function() {
      beforeEach(function() {
        instance = new FlipkartMarketplaceApi.ReturnsSearchResponseV2();
      });

      it('should create an instance of ReturnsSearchResponseV2', function() {
        // TODO: update the code to test ReturnsSearchResponseV2
        expect(instance).to.be.a(FlipkartMarketplaceApi.ReturnsSearchResponseV2);
      });

      it('should have the property hasMore (base name: "hasMore")', function() {
        // TODO: update the code to test the property hasMore
        expect(instance).to.have.property('hasMore');
        // expect(instance.hasMore).to.be(expectedValueLiteral);
      });

      it('should have the property nextUrl (base name: "nextUrl")', function() {
        // TODO: update the code to test the property nextUrl
        expect(instance).to.have.property('nextUrl');
        // expect(instance.nextUrl).to.be(expectedValueLiteral);
      });

      it('should have the property returnItems (base name: "returnItems")', function() {
        // TODO: update the code to test the property returnItems
        expect(instance).to.have.property('returnItems');
        // expect(instance.returnItems).to.be(expectedValueLiteral);
      });

    });
  });

}));
