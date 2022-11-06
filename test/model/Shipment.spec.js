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
    describe('Shipment', function() {
      beforeEach(function() {
        instance = new FlipkartMarketplaceApi.Shipment();
      });

      it('should create an instance of Shipment', function() {
        // TODO: update the code to test Shipment
        expect(instance).to.be.a(FlipkartMarketplaceApi.Shipment);
      });

      it('should have the property shipmentId (base name: "shipmentId")', function() {
        // TODO: update the code to test the property shipmentId
        expect(instance).to.have.property('shipmentId');
        // expect(instance.shipmentId).to.be(expectedValueLiteral);
      });

      it('should have the property dispatchByDate (base name: "dispatchByDate")', function() {
        // TODO: update the code to test the property dispatchByDate
        expect(instance).to.have.property('dispatchByDate');
        // expect(instance.dispatchByDate).to.be(expectedValueLiteral);
      });

      it('should have the property dispatchAfterDate (base name: "dispatchAfterDate")', function() {
        // TODO: update the code to test the property dispatchAfterDate
        expect(instance).to.have.property('dispatchAfterDate');
        // expect(instance.dispatchAfterDate).to.be(expectedValueLiteral);
      });

      it('should have the property updatedAt (base name: "updatedAt")', function() {
        // TODO: update the code to test the property updatedAt
        expect(instance).to.have.property('updatedAt');
        // expect(instance.updatedAt).to.be(expectedValueLiteral);
      });

      it('should have the property locationId (base name: "locationId")', function() {
        // TODO: update the code to test the property locationId
        expect(instance).to.have.property('locationId');
        // expect(instance.locationId).to.be(expectedValueLiteral);
      });

      it('should have the property hold (base name: "hold")', function() {
        // TODO: update the code to test the property hold
        expect(instance).to.have.property('hold');
        // expect(instance.hold).to.be(expectedValueLiteral);
      });

      it('should have the property mps (base name: "mps")', function() {
        // TODO: update the code to test the property mps
        expect(instance).to.have.property('mps');
        // expect(instance.mps).to.be(expectedValueLiteral);
      });

      it('should have the property packagingPolicy (base name: "packagingPolicy")', function() {
        // TODO: update the code to test the property packagingPolicy
        expect(instance).to.have.property('packagingPolicy');
        // expect(instance.packagingPolicy).to.be(expectedValueLiteral);
      });

      it('should have the property subShipments (base name: "subShipments")', function() {
        // TODO: update the code to test the property subShipments
        expect(instance).to.have.property('subShipments');
        // expect(instance.subShipments).to.be(expectedValueLiteral);
      });

      it('should have the property orderItems (base name: "orderItems")', function() {
        // TODO: update the code to test the property orderItems
        expect(instance).to.have.property('orderItems');
        // expect(instance.orderItems).to.be(expectedValueLiteral);
      });

      it('should have the property forms (base name: "forms")', function() {
        // TODO: update the code to test the property forms
        expect(instance).to.have.property('forms');
        // expect(instance.forms).to.be(expectedValueLiteral);
      });

      it('should have the property shipmentType (base name: "shipmentType")', function() {
        // TODO: update the code to test the property shipmentType
        expect(instance).to.have.property('shipmentType');
        // expect(instance.shipmentType).to.be(expectedValueLiteral);
      });

    });
  });

}));
