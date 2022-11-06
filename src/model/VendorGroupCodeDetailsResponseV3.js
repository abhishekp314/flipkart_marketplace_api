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
import {Otc} from './Otc';
import {PickUpDate} from './PickUpDate';

/**
 * The VendorGroupCodeDetailsResponseV3 model module.
 * @module model/VendorGroupCodeDetailsResponseV3
 * @version 3.0
 */
export class VendorGroupCodeDetailsResponseV3 {
  /**
   * Constructs a new <code>VendorGroupCodeDetailsResponseV3</code>.
   * @alias module:model/VendorGroupCodeDetailsResponseV3
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>VendorGroupCodeDetailsResponseV3</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VendorGroupCodeDetailsResponseV3} obj Optional instance to populate.
   * @return {module:model/VendorGroupCodeDetailsResponseV3} The populated <code>VendorGroupCodeDetailsResponseV3</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new VendorGroupCodeDetailsResponseV3();
      if (data.hasOwnProperty('vendorGroupCode'))
        obj.vendorGroupCode = ApiClient.convertToType(data['vendorGroupCode'], 'String');
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
      if (data.hasOwnProperty('pickUpDate'))
        obj.pickUpDate = PickUpDate.constructFromObject(data['pickUpDate']);
      if (data.hasOwnProperty('otc'))
        obj.otc = Otc.constructFromObject(data['otc']);
      if (data.hasOwnProperty('isMps'))
        obj.isMps = ApiClient.convertToType(data['isMps'], 'Boolean');
    }
    return obj;
  }
}

/**
 * @member {String} vendorGroupCode
 */
VendorGroupCodeDetailsResponseV3.prototype.vendorGroupCode = undefined;

/**
 * @member {Number} count
 */
VendorGroupCodeDetailsResponseV3.prototype.count = undefined;

/**
 * @member {module:model/PickUpDate} pickUpDate
 */
VendorGroupCodeDetailsResponseV3.prototype.pickUpDate = undefined;

/**
 * @member {module:model/Otc} otc
 */
VendorGroupCodeDetailsResponseV3.prototype.otc = undefined;

/**
 * @member {Boolean} isMps
 */
VendorGroupCodeDetailsResponseV3.prototype.isMps = undefined;

