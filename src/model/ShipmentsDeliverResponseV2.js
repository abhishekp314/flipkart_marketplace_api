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
import {ShipmentResponseStatusV2} from './ShipmentResponseStatusV2';

/**
 * The ShipmentsDeliverResponseV2 model module.
 * @module model/ShipmentsDeliverResponseV2
 * @version 3.0
 */
export class ShipmentsDeliverResponseV2 {
  /**
   * Constructs a new <code>ShipmentsDeliverResponseV2</code>.
   * @alias module:model/ShipmentsDeliverResponseV2
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ShipmentsDeliverResponseV2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ShipmentsDeliverResponseV2} obj Optional instance to populate.
   * @return {module:model/ShipmentsDeliverResponseV2} The populated <code>ShipmentsDeliverResponseV2</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ShipmentsDeliverResponseV2();
      if (data.hasOwnProperty('shipments'))
        obj.shipments = ApiClient.convertToType(data['shipments'], [ShipmentResponseStatusV2]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/ShipmentResponseStatusV2>} shipments
 */
ShipmentsDeliverResponseV2.prototype.shipments = undefined;
