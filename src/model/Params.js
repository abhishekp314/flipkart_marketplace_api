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
import {ApiClient} from '../ApiClient';
import {PickUpDate} from './PickUpDate';

/**
 * The Params model module.
 * @module model/Params
 * @version 3.0
 */
export class Params {
  /**
   * Constructs a new <code>Params</code>.
   * @alias module:model/Params
   * @class
   * @param vendorGroupCode {String} 
   */
  constructor(vendorGroupCode) {
    this.vendorGroupCode = vendorGroupCode;
  }

  /**
   * Constructs a <code>Params</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Params} obj Optional instance to populate.
   * @return {module:model/Params} The populated <code>Params</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Params();
      if (data.hasOwnProperty('vendorGroupCode'))
        obj.vendorGroupCode = ApiClient.convertToType(data['vendorGroupCode'], 'String');
      if (data.hasOwnProperty('pickupDate'))
        obj.pickupDate = PickUpDate.constructFromObject(data['pickupDate']);
      if (data.hasOwnProperty('locationId'))
        obj.locationId = ApiClient.convertToType(data['locationId'], 'String');
      if (data.hasOwnProperty('is_mps'))
        obj.isMps = ApiClient.convertToType(data['is_mps'], 'Boolean');
    }
    return obj;
  }
}

/**
 * @member {String} vendorGroupCode
 */
Params.prototype.vendorGroupCode = undefined;

/**
 * @member {module:model/PickUpDate} pickupDate
 */
Params.prototype.pickupDate = undefined;

/**
 * @member {String} locationId
 */
Params.prototype.locationId = undefined;

/**
 * @member {Boolean} isMps
 */
Params.prototype.isMps = undefined;
