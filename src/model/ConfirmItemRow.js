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
 * The ConfirmItemRow model module.
 * @module model/ConfirmItemRow
 * @version 3.0
 */
export class ConfirmItemRow {
  /**
   * Constructs a new <code>ConfirmItemRow</code>.
   * @alias module:model/ConfirmItemRow
   * @class
   * @param invoiceDate {Date} 
   * @param taxRate {Number} 
   */
  constructor(invoiceDate, taxRate) {
    this.invoiceDate = invoiceDate;
    this.taxRate = taxRate;
  }

  /**
   * Constructs a <code>ConfirmItemRow</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConfirmItemRow} obj Optional instance to populate.
   * @return {module:model/ConfirmItemRow} The populated <code>ConfirmItemRow</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ConfirmItemRow();
      if (data.hasOwnProperty('serialNumbers'))
        obj.serialNumbers = ApiClient.convertToType(data['serialNumbers'], [['String']]);
      if (data.hasOwnProperty('invoiceDate'))
        obj.invoiceDate = ApiClient.convertToType(data['invoiceDate'], 'Date');
      if (data.hasOwnProperty('invoiceNumber'))
        obj.invoiceNumber = ApiClient.convertToType(data['invoiceNumber'], 'String');
      if (data.hasOwnProperty('orderItemId'))
        obj.orderItemId = ApiClient.convertToType(data['orderItemId'], 'String');
      if (data.hasOwnProperty('taxRate'))
        obj.taxRate = ApiClient.convertToType(data['taxRate'], 'Number');
      if (data.hasOwnProperty('quantity'))
        obj.quantity = ApiClient.convertToType(data['quantity'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Array.<Array.<String>>} serialNumbers
 */
ConfirmItemRow.prototype.serialNumbers = undefined;

/**
 * @member {Date} invoiceDate
 */
ConfirmItemRow.prototype.invoiceDate = undefined;

/**
 * @member {String} invoiceNumber
 */
ConfirmItemRow.prototype.invoiceNumber = undefined;

/**
 * @member {String} orderItemId
 */
ConfirmItemRow.prototype.orderItemId = undefined;

/**
 * @member {Number} taxRate
 */
ConfirmItemRow.prototype.taxRate = undefined;

/**
 * @member {Number} quantity
 */
ConfirmItemRow.prototype.quantity = undefined;

