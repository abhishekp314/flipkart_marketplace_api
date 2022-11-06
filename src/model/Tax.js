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
 * The Tax model module.
 * @module model/Tax
 * @version 3.0
 */
export class Tax {
  /**
   * Constructs a new <code>Tax</code>.
   * @alias module:model/Tax
   * @class
   * @param hsn {String} 
   */
  constructor(hsn) {
    this.hsn = hsn;
  }

  /**
   * Constructs a <code>Tax</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Tax} obj Optional instance to populate.
   * @return {module:model/Tax} The populated <code>Tax</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Tax();
      if (data.hasOwnProperty('hsn'))
        obj.hsn = ApiClient.convertToType(data['hsn'], 'String');
      if (data.hasOwnProperty('is_gst_sellable'))
        obj.isGstSellable = ApiClient.convertToType(data['is_gst_sellable'], 'Boolean');
      if (data.hasOwnProperty('goods_services_rate'))
        obj.goodsServicesRate = ApiClient.convertToType(data['goods_services_rate'], 'Number');
      if (data.hasOwnProperty('tax_code'))
        obj.taxCode = ApiClient.convertToType(data['tax_code'], 'String');
      if (data.hasOwnProperty('luxury_cess_percentage'))
        obj.luxuryCessPercentage = ApiClient.convertToType(data['luxury_cess_percentage'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} hsn
 */
Tax.prototype.hsn = undefined;

/**
 * @member {Boolean} isGstSellable
 */
Tax.prototype.isGstSellable = undefined;

/**
 * @member {Number} goodsServicesRate
 */
Tax.prototype.goodsServicesRate = undefined;

/**
 * @member {String} taxCode
 */
Tax.prototype.taxCode = undefined;

/**
 * @member {Number} luxuryCessPercentage
 */
Tax.prototype.luxuryCessPercentage = undefined;

