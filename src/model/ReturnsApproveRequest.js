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
import {ReturnApproveRequest} from './ReturnApproveRequest';

/**
 * The ReturnsApproveRequest model module.
 * @module model/ReturnsApproveRequest
 * @version 3.0
 */
export class ReturnsApproveRequest {
  /**
   * Constructs a new <code>ReturnsApproveRequest</code>.
   * @alias module:model/ReturnsApproveRequest
   * @class
   * @param returns {Array.<module:model/ReturnApproveRequest>} 
   */
  constructor(returns) {
    this.returns = returns;
  }

  /**
   * Constructs a <code>ReturnsApproveRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReturnsApproveRequest} obj Optional instance to populate.
   * @return {module:model/ReturnsApproveRequest} The populated <code>ReturnsApproveRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ReturnsApproveRequest();
      if (data.hasOwnProperty('returns'))
        obj.returns = ApiClient.convertToType(data['returns'], [ReturnApproveRequest]);
      if (data.hasOwnProperty('locationId'))
        obj.locationId = ApiClient.convertToType(data['locationId'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/ReturnApproveRequest>} returns
 */
ReturnsApproveRequest.prototype.returns = undefined;

/**
 * @member {String} locationId
 */
ReturnsApproveRequest.prototype.locationId = undefined;
