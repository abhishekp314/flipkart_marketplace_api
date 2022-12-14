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
 * The GenerateLabelRequestItemV2 model module.
 * @module model/GenerateLabelRequestItemV2
 * @version 3.0
 */
export class GenerateLabelRequestItemV2 {
  /**
   * Constructs a new <code>GenerateLabelRequestItemV2</code>.
   * @alias module:model/GenerateLabelRequestItemV2
   * @class
   * @param orderItemId {String} 
   * @param taxRate {Number} 
   * @param invoiceDate {String} 
   */
  constructor(orderItemId, taxRate, invoiceDate) {
    this.orderItemId = orderItemId;
    this.taxRate = taxRate;
    this.invoiceDate = invoiceDate;
  }

  /**
   * Constructs a <code>GenerateLabelRequestItemV2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GenerateLabelRequestItemV2} obj Optional instance to populate.
   * @return {module:model/GenerateLabelRequestItemV2} The populated <code>GenerateLabelRequestItemV2</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GenerateLabelRequestItemV2();
      if (data.hasOwnProperty('orderItemId'))
        obj.orderItemId = ApiClient.convertToType(data['orderItemId'], 'String');
      if (data.hasOwnProperty('taxRate'))
        obj.taxRate = ApiClient.convertToType(data['taxRate'], 'Number');
      if (data.hasOwnProperty('invoiceNumber'))
        obj.invoiceNumber = ApiClient.convertToType(data['invoiceNumber'], 'String');
      if (data.hasOwnProperty('serialNumbers'))
        obj.serialNumbers = ApiClient.convertToType(data['serialNumbers'], [['String']]);
      if (data.hasOwnProperty('invoiceDate'))
        obj.invoiceDate = ApiClient.convertToType(data['invoiceDate'], 'String');
      if (data.hasOwnProperty('quantity'))
        obj.quantity = ApiClient.convertToType(data['quantity'], 'Number');
      if (data.hasOwnProperty('subItems'))
        obj.subItems = ApiClient.convertToType(data['subItems'], [GenerateLabelRequestItemV2]);
    }
    return obj;
  }
}

/**
 * @member {String} orderItemId
 */
GenerateLabelRequestItemV2.prototype.orderItemId = undefined;

/**
 * @member {Number} taxRate
 */
GenerateLabelRequestItemV2.prototype.taxRate = undefined;

/**
 * @member {String} invoiceNumber
 */
GenerateLabelRequestItemV2.prototype.invoiceNumber = undefined;

/**
 * @member {Array.<Array.<String>>} serialNumbers
 */
GenerateLabelRequestItemV2.prototype.serialNumbers = undefined;

/**
 * @member {String} invoiceDate
 */
GenerateLabelRequestItemV2.prototype.invoiceDate = undefined;

/**
 * @member {Number} quantity
 */
GenerateLabelRequestItemV2.prototype.quantity = undefined;

/**
 * @member {Array.<module:model/GenerateLabelRequestItemV2>} subItems
 */
GenerateLabelRequestItemV2.prototype.subItems = undefined;

