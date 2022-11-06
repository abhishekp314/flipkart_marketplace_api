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
import {ConfirmItemRow} from './ConfirmItemRow';

/**
 * The DispatchRequest model module.
 * @module model/DispatchRequest
 * @version 3.0
 */
export class DispatchRequest {
  /**
   * Constructs a new <code>DispatchRequest</code>.
   * @alias module:model/DispatchRequest
   * @class
   * @param tentativeDeliveryDate {Date} 
   * @param dispatchDate {Date} 
   * @param orderItems {Array.<module:model/ConfirmItemRow>} 
   */
  constructor(tentativeDeliveryDate, dispatchDate, orderItems) {
    this.tentativeDeliveryDate = tentativeDeliveryDate;
    this.dispatchDate = dispatchDate;
    this.orderItems = orderItems;
  }

  /**
   * Constructs a <code>DispatchRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DispatchRequest} obj Optional instance to populate.
   * @return {module:model/DispatchRequest} The populated <code>DispatchRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DispatchRequest();
      if (data.hasOwnProperty('shipmentId'))
        obj.shipmentId = ApiClient.convertToType(data['shipmentId'], 'String');
      if (data.hasOwnProperty('tentativeDeliveryDate'))
        obj.tentativeDeliveryDate = ApiClient.convertToType(data['tentativeDeliveryDate'], 'Date');
      if (data.hasOwnProperty('deliveryPartner'))
        obj.deliveryPartner = ApiClient.convertToType(data['deliveryPartner'], 'String');
      if (data.hasOwnProperty('dispatchDate'))
        obj.dispatchDate = ApiClient.convertToType(data['dispatchDate'], 'Date');
      if (data.hasOwnProperty('trackingId'))
        obj.trackingId = ApiClient.convertToType(data['trackingId'], 'String');
      if (data.hasOwnProperty('facilityId'))
        obj.facilityId = ApiClient.convertToType(data['facilityId'], 'String');
      if (data.hasOwnProperty('locationId'))
        obj.locationId = ApiClient.convertToType(data['locationId'], 'String');
      if (data.hasOwnProperty('orderItems'))
        obj.orderItems = ApiClient.convertToType(data['orderItems'], [ConfirmItemRow]);
    }
    return obj;
  }
}

/**
 * @member {String} shipmentId
 */
DispatchRequest.prototype.shipmentId = undefined;

/**
 * @member {Date} tentativeDeliveryDate
 */
DispatchRequest.prototype.tentativeDeliveryDate = undefined;

/**
 * @member {String} deliveryPartner
 */
DispatchRequest.prototype.deliveryPartner = undefined;

/**
 * @member {Date} dispatchDate
 */
DispatchRequest.prototype.dispatchDate = undefined;

/**
 * @member {String} trackingId
 */
DispatchRequest.prototype.trackingId = undefined;

/**
 * @member {String} facilityId
 */
DispatchRequest.prototype.facilityId = undefined;

/**
 * @member {String} locationId
 */
DispatchRequest.prototype.locationId = undefined;

/**
 * @member {Array.<module:model/ConfirmItemRow>} orderItems
 */
DispatchRequest.prototype.orderItems = undefined;
