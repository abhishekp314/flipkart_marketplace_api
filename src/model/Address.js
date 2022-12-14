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
 * The Address model module.
 * @module model/Address
 * @version 3.0
 */
export class Address {
  /**
   * Constructs a new <code>Address</code>.
   * @alias module:model/Address
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Address</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Address} obj Optional instance to populate.
   * @return {module:model/Address} The populated <code>Address</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Address();
      if (data.hasOwnProperty('firstName'))
        obj.firstName = ApiClient.convertToType(data['firstName'], 'String');
      if (data.hasOwnProperty('lastName'))
        obj.lastName = ApiClient.convertToType(data['lastName'], 'String');
      if (data.hasOwnProperty('pinCode'))
        obj.pinCode = ApiClient.convertToType(data['pinCode'], 'String');
      if (data.hasOwnProperty('city'))
        obj.city = ApiClient.convertToType(data['city'], 'String');
      if (data.hasOwnProperty('state'))
        obj.state = ApiClient.convertToType(data['state'], 'String');
      if (data.hasOwnProperty('stateCode'))
        obj.stateCode = ApiClient.convertToType(data['stateCode'], 'String');
      if (data.hasOwnProperty('addressLine1'))
        obj.addressLine1 = ApiClient.convertToType(data['addressLine1'], 'String');
      if (data.hasOwnProperty('addressLine2'))
        obj.addressLine2 = ApiClient.convertToType(data['addressLine2'], 'String');
      if (data.hasOwnProperty('landmark'))
        obj.landmark = ApiClient.convertToType(data['landmark'], 'String');
      if (data.hasOwnProperty('contactNumber'))
        obj.contactNumber = ApiClient.convertToType(data['contactNumber'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} firstName
 */
Address.prototype.firstName = undefined;

/**
 * @member {String} lastName
 */
Address.prototype.lastName = undefined;

/**
 * @member {String} pinCode
 */
Address.prototype.pinCode = undefined;

/**
 * @member {String} city
 */
Address.prototype.city = undefined;

/**
 * @member {String} state
 */
Address.prototype.state = undefined;

/**
 * @member {String} stateCode
 */
Address.prototype.stateCode = undefined;

/**
 * @member {String} addressLine1
 */
Address.prototype.addressLine1 = undefined;

/**
 * @member {String} addressLine2
 */
Address.prototype.addressLine2 = undefined;

/**
 * @member {String} landmark
 */
Address.prototype.landmark = undefined;

/**
 * @member {String} contactNumber
 */
Address.prototype.contactNumber = undefined;

