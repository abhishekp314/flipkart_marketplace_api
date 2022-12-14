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
    describe('Filter', function() {
      beforeEach(function() {
        instance = new FlipkartMarketplaceApi.Filter();
      });

      it('should create an instance of Filter', function() {
        // TODO: update the code to test Filter
        expect(instance).to.be.a(FlipkartMarketplaceApi.Filter);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property states (base name: "states")', function() {
        // TODO: update the code to test the property states
        expect(instance).to.have.property('states');
        // expect(instance.states).to.be(expectedValueLiteral);
      });

      it('should have the property locationId (base name: "locationId")', function() {
        // TODO: update the code to test the property locationId
        expect(instance).to.have.property('locationId');
        // expect(instance.locationId).to.be(expectedValueLiteral);
      });

      it('should have the property sku (base name: "sku")', function() {
        // TODO: update the code to test the property sku
        expect(instance).to.have.property('sku');
        // expect(instance.sku).to.be(expectedValueLiteral);
      });

      it('should have the property orderDate (base name: "orderDate")', function() {
        // TODO: update the code to test the property orderDate
        expect(instance).to.have.property('orderDate');
        // expect(instance.orderDate).to.be(expectedValueLiteral);
      });

      it('should have the property dispatchAfterDate (base name: "dispatchAfterDate")', function() {
        // TODO: update the code to test the property dispatchAfterDate
        expect(instance).to.have.property('dispatchAfterDate');
        // expect(instance.dispatchAfterDate).to.be(expectedValueLiteral);
      });

      it('should have the property dispatchByDate (base name: "dispatchByDate")', function() {
        // TODO: update the code to test the property dispatchByDate
        expect(instance).to.have.property('dispatchByDate');
        // expect(instance.dispatchByDate).to.be(expectedValueLiteral);
      });

      it('should have the property modifiedDate (base name: "modifiedDate")', function() {
        // TODO: update the code to test the property modifiedDate
        expect(instance).to.have.property('modifiedDate');
        // expect(instance.modifiedDate).to.be(expectedValueLiteral);
      });

      it('should have the property shipmentTypes (base name: "shipmentTypes")', function() {
        // TODO: update the code to test the property shipmentTypes
        expect(instance).to.have.property('shipmentTypes');
        // expect(instance.shipmentTypes).to.be(expectedValueLiteral);
      });

      it('should have the property serviceProfiles (base name: "serviceProfiles")', function() {
        // TODO: update the code to test the property serviceProfiles
        expect(instance).to.have.property('serviceProfiles');
        // expect(instance.serviceProfiles).to.be(expectedValueLiteral);
      });

      it('should have the property dispatchServiceTiers (base name: "dispatchServiceTiers")', function() {
        // TODO: update the code to test the property dispatchServiceTiers
        expect(instance).to.have.property('dispatchServiceTiers');
        // expect(instance.dispatchServiceTiers).to.be(expectedValueLiteral);
      });

      it('should have the property cancellationDate (base name: "cancellationDate")', function() {
        // TODO: update the code to test the property cancellationDate
        expect(instance).to.have.property('cancellationDate');
        // expect(instance.cancellationDate).to.be(expectedValueLiteral);
      });

      it('should have the property cancellationType (base name: "cancellationType")', function() {
        // TODO: update the code to test the property cancellationType
        expect(instance).to.have.property('cancellationType');
        // expect(instance.cancellationType).to.be(expectedValueLiteral);
      });

    });
  });

}));
