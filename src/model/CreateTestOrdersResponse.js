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
import {CreateOrderItemResponse} from './CreateOrderItemResponse';

/**
 * The CreateTestOrdersResponse model module.
 * @module model/CreateTestOrdersResponse
 * @version 3.0
 */
export class CreateTestOrdersResponse {
  /**
   * Constructs a new <code>CreateTestOrdersResponse</code>.
   * @alias module:model/CreateTestOrdersResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CreateTestOrdersResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateTestOrdersResponse} obj Optional instance to populate.
   * @return {module:model/CreateTestOrdersResponse} The populated <code>CreateTestOrdersResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateTestOrdersResponse();
      if (data.hasOwnProperty('orderId'))
        obj.orderId = ApiClient.convertToType(data['orderId'], 'String');
      if (data.hasOwnProperty('orderItems'))
        obj.orderItems = ApiClient.convertToType(data['orderItems'], [CreateOrderItemResponse]);
    }
    return obj;
  }
}

/**
 * @member {String} orderId
 */
CreateTestOrdersResponse.prototype.orderId = undefined;

/**
 * @member {Array.<module:model/CreateOrderItemResponse>} orderItems
 */
CreateTestOrdersResponse.prototype.orderItems = undefined;

