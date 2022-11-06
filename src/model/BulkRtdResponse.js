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
import {BulkRtdRequestItemStatus} from './BulkRtdRequestItemStatus';

/**
 * The BulkRtdResponse model module.
 * @module model/BulkRtdResponse
 * @version 3.0
 */
export class BulkRtdResponse {
  /**
   * Constructs a new <code>BulkRtdResponse</code>.
   * @alias module:model/BulkRtdResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BulkRtdResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BulkRtdResponse} obj Optional instance to populate.
   * @return {module:model/BulkRtdResponse} The populated <code>BulkRtdResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BulkRtdResponse();
      if (data.hasOwnProperty('orderItems'))
        obj.orderItems = ApiClient.convertToType(data['orderItems'], [BulkRtdRequestItemStatus]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/BulkRtdRequestItemStatus>} orderItems
 */
BulkRtdResponse.prototype.orderItems = undefined;

