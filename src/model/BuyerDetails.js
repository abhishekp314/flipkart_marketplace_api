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

/**
 * The BuyerDetails model module.
 * @module model/BuyerDetails
 * @version 3.0
 */
export class BuyerDetails {
  /**
   * Constructs a new <code>BuyerDetails</code>.
   * @alias module:model/BuyerDetails
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BuyerDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BuyerDetails} obj Optional instance to populate.
   * @return {module:model/BuyerDetails} The populated <code>BuyerDetails</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BuyerDetails();
      if (data.hasOwnProperty('firstName'))
        obj.firstName = ApiClient.convertToType(data['firstName'], 'String');
      if (data.hasOwnProperty('lastName'))
        obj.lastName = ApiClient.convertToType(data['lastName'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} firstName
 */
BuyerDetails.prototype.firstName = undefined;

/**
 * @member {String} lastName
 */
BuyerDetails.prototype.lastName = undefined;

