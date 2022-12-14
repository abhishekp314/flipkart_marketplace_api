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
 * The Sort model module.
 * @module model/Sort
 * @version 3.0
 */
export class Sort {
  /**
   * Constructs a new <code>Sort</code>.
   * @alias module:model/Sort
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Sort</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Sort} obj Optional instance to populate.
   * @return {module:model/Sort} The populated <code>Sort</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Sort();
      if (data.hasOwnProperty('field'))
        obj.field = ApiClient.convertToType(data['field'], 'String');
      if (data.hasOwnProperty('order'))
        obj.order = ApiClient.convertToType(data['order'], 'String');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>field</code> property.
 * @enum {String}
 * @readonly
 */
Sort.FieldEnum = {
  /**
   * value: "dispatchByDate"
   * @const
   */
  dispatchByDate: "dispatchByDate",

  /**
   * value: "orderDate"
   * @const
   */
  orderDate: "orderDate",

  /**
   * value: "modifiedDate"
   * @const
   */
  modifiedDate: "modifiedDate",

  /**
   * value: "dispatchAfterDate"
   * @const
   */
  dispatchAfterDate: "dispatchAfterDate"
};
/**
 * @member {module:model/Sort.FieldEnum} field
 */
Sort.prototype.field = undefined;

/**
 * Allowed values for the <code>order</code> property.
 * @enum {String}
 * @readonly
 */
Sort.OrderEnum = {
  /**
   * value: "asc"
   * @const
   */
  asc: "asc",

  /**
   * value: "desc"
   * @const
   */
  desc: "desc"
};
/**
 * @member {module:model/Sort.OrderEnum} order
 */
Sort.prototype.order = undefined;

