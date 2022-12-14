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
 * The AddressLabel model module.
 * @module model/AddressLabel
 * @version 3.0
 */
export class AddressLabel {
  /**
   * Constructs a new <code>AddressLabel</code>.
   * @alias module:model/AddressLabel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AddressLabel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AddressLabel} obj Optional instance to populate.
   * @return {module:model/AddressLabel} The populated <code>AddressLabel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AddressLabel();
      if (data.hasOwnProperty('manufacturer_details'))
        obj.manufacturerDetails = ApiClient.convertToType(data['manufacturer_details'], ['String']);
      if (data.hasOwnProperty('importer_details'))
        obj.importerDetails = ApiClient.convertToType(data['importer_details'], ['String']);
      if (data.hasOwnProperty('packer_details'))
        obj.packerDetails = ApiClient.convertToType(data['packer_details'], ['String']);
      if (data.hasOwnProperty('countries_of_origin'))
        obj.countriesOfOrigin = ApiClient.convertToType(data['countries_of_origin'], ['String']);
    }
    return obj;
  }
}

/**
 * @member {Array.<String>} manufacturerDetails
 */
AddressLabel.prototype.manufacturerDetails = undefined;

/**
 * @member {Array.<String>} importerDetails
 */
AddressLabel.prototype.importerDetails = undefined;

/**
 * @member {Array.<String>} packerDetails
 */
AddressLabel.prototype.packerDetails = undefined;

/**
 * @member {Array.<String>} countriesOfOrigin
 */
AddressLabel.prototype.countriesOfOrigin = undefined;

