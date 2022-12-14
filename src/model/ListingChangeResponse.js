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
import {AttributeError} from './AttributeError';
import {Error} from './Error';

/**
 * The ListingChangeResponse model module.
 * @module model/ListingChangeResponse
 * @version 3.0
 */
export class ListingChangeResponse {
  /**
   * Constructs a new <code>ListingChangeResponse</code>.
   * @alias module:model/ListingChangeResponse
   * @class
   * @param status {module:model/ListingChangeResponse.StatusEnum} 
   * @param errors {Array.<module:model/Error>} 
   * @param attributeErrors {Array.<module:model/AttributeError>} 
   */
  constructor(status, errors, attributeErrors) {
    this.status = status;
    this.errors = errors;
    this.attributeErrors = attributeErrors;
  }

  /**
   * Constructs a <code>ListingChangeResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListingChangeResponse} obj Optional instance to populate.
   * @return {module:model/ListingChangeResponse} The populated <code>ListingChangeResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ListingChangeResponse();
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('errors'))
        obj.errors = ApiClient.convertToType(data['errors'], [Error]);
      if (data.hasOwnProperty('attribute_errors'))
        obj.attributeErrors = ApiClient.convertToType(data['attribute_errors'], [AttributeError]);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
ListingChangeResponse.StatusEnum = {
  /**
   * value: "SUCCESS"
   * @const
   */
  SUCCESS: "SUCCESS",

  /**
   * value: "FAILURE"
   * @const
   */
  FAILURE: "FAILURE",

  /**
   * value: "WARNING"
   * @const
   */
  WARNING: "WARNING"
};
/**
 * @member {module:model/ListingChangeResponse.StatusEnum} status
 */
ListingChangeResponse.prototype.status = undefined;

/**
 * @member {Array.<module:model/Error>} errors
 */
ListingChangeResponse.prototype.errors = undefined;

/**
 * @member {Array.<module:model/AttributeError>} attributeErrors
 */
ListingChangeResponse.prototype.attributeErrors = undefined;

