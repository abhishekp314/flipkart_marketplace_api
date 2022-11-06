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
import {DateFilter} from './DateFilter';

/**
 * The Filter model module.
 * @module model/Filter
 * @version 3.0
 */
export class Filter {
  /**
   * Constructs a new <code>Filter</code>.
   * @alias module:model/Filter
   * @class
   * @param type {module:model/Filter.TypeEnum} 
   */
  constructor(type) {
    this.type = type;
  }

  /**
   * Constructs a <code>Filter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Filter} obj Optional instance to populate.
   * @return {module:model/Filter} The populated <code>Filter</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Filter();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('states'))
        obj.states = ApiClient.convertToType(data['states'], ['String']);
      if (data.hasOwnProperty('locationId'))
        obj.locationId = ApiClient.convertToType(data['locationId'], 'String');
      if (data.hasOwnProperty('sku'))
        obj.sku = ApiClient.convertToType(data['sku'], ['String']);
      if (data.hasOwnProperty('orderDate'))
        obj.orderDate = DateFilter.constructFromObject(data['orderDate']);
      if (data.hasOwnProperty('dispatchAfterDate'))
        obj.dispatchAfterDate = DateFilter.constructFromObject(data['dispatchAfterDate']);
      if (data.hasOwnProperty('dispatchByDate'))
        obj.dispatchByDate = DateFilter.constructFromObject(data['dispatchByDate']);
      if (data.hasOwnProperty('modifiedDate'))
        obj.modifiedDate = DateFilter.constructFromObject(data['modifiedDate']);
      if (data.hasOwnProperty('shipmentTypes'))
        obj.shipmentTypes = ApiClient.convertToType(data['shipmentTypes'], ['String']);
      if (data.hasOwnProperty('serviceProfiles'))
        obj.serviceProfiles = ApiClient.convertToType(data['serviceProfiles'], ['String']);
      if (data.hasOwnProperty('dispatchServiceTiers'))
        obj.dispatchServiceTiers = ApiClient.convertToType(data['dispatchServiceTiers'], ['String']);
      if (data.hasOwnProperty('cancellationDate'))
        obj.cancellationDate = DateFilter.constructFromObject(data['cancellationDate']);
      if (data.hasOwnProperty('cancellationType'))
        obj.cancellationType = ApiClient.convertToType(data['cancellationType'], 'String');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Filter.TypeEnum = {
  /**
   * value: "preDispatch"
   * @const
   */
  preDispatch: "preDispatch",

  /**
   * value: "postDispatch"
   * @const
   */
  postDispatch: "postDispatch",

  /**
   * value: "cancelled"
   * @const
   */
  cancelled: "cancelled"
};
/**
 * @member {module:model/Filter.TypeEnum} type
 */
Filter.prototype.type = undefined;

/**
 * Allowed values for the <code>states</code> property.
 * @enum {String}
 * @readonly
 */
Filter.StatesEnum = {
  /**
   * value: "APPROVED"
   * @const
   */
  APPROVED: "APPROVED",

  /**
   * value: "PACKING_IN_PROGRESS"
   * @const
   */
  PACKING_IN_PROGRESS: "PACKING_IN_PROGRESS",

  /**
   * value: "FORM_FAILED"
   * @const
   */
  FORM_FAILED: "FORM_FAILED",

  /**
   * value: "PACKED"
   * @const
   */
  PACKED: "PACKED",

  /**
   * value: "READY_TO_DISPATCH"
   * @const
   */
  READY_TO_DISPATCH: "READY_TO_DISPATCH",

  /**
   * value: "PICKUP_COMPLETE"
   * @const
   */
  PICKUP_COMPLETE: "PICKUP_COMPLETE",

  /**
   * value: "CANCELLED"
   * @const
   */
  CANCELLED: "CANCELLED",

  /**
   * value: "RETURN_REQUESTED"
   * @const
   */
  RETURN_REQUESTED: "RETURN_REQUESTED",

  /**
   * value: "RETURNED"
   * @const
   */
  RETURNED: "RETURNED",

  /**
   * value: "SHIPPED"
   * @const
   */
  SHIPPED: "SHIPPED",

  /**
   * value: "DELIVERED"
   * @const
   */
  DELIVERED: "DELIVERED",

  /**
   * value: "COMPLETED"
   * @const
   */
  COMPLETED: "COMPLETED"
};
/**
 * @member {Array.<module:model/Filter.StatesEnum>} states
 */
Filter.prototype.states = undefined;

/**
 * @member {String} locationId
 */
Filter.prototype.locationId = undefined;

/**
 * @member {Array.<String>} sku
 */
Filter.prototype.sku = undefined;

/**
 * @member {module:model/DateFilter} orderDate
 */
Filter.prototype.orderDate = undefined;

/**
 * @member {module:model/DateFilter} dispatchAfterDate
 */
Filter.prototype.dispatchAfterDate = undefined;

/**
 * @member {module:model/DateFilter} dispatchByDate
 */
Filter.prototype.dispatchByDate = undefined;

/**
 * @member {module:model/DateFilter} modifiedDate
 */
Filter.prototype.modifiedDate = undefined;

/**
 * Allowed values for the <code>shipmentTypes</code> property.
 * @enum {String}
 * @readonly
 */
Filter.ShipmentTypesEnum = {
  /**
   * value: "EXPRESS"
   * @const
   */
  EXPRESS: "EXPRESS",

  /**
   * value: "NORMAL"
   * @const
   */
  NORMAL: "NORMAL",

  /**
   * value: "SELF"
   * @const
   */
  SELF: "SELF"
};
/**
 * @member {Array.<module:model/Filter.ShipmentTypesEnum>} shipmentTypes
 */
Filter.prototype.shipmentTypes = undefined;

/**
 * Allowed values for the <code>serviceProfiles</code> property.
 * @enum {String}
 * @readonly
 */
Filter.ServiceProfilesEnum = {
  /**
   * value: "FBF"
   * @const
   */
  FBF: "FBF",

  /**
   * value: "NON_FBF"
   * @const
   */
  NON_FBF: "NON_FBF",

  /**
   * value: "FBF_LITE"
   * @const
   */
  FBF_LITE: "FBF_LITE"
};
/**
 * @member {Array.<module:model/Filter.ServiceProfilesEnum>} serviceProfiles
 */
Filter.prototype.serviceProfiles = undefined;

/**
 * Allowed values for the <code>dispatchServiceTiers</code> property.
 * @enum {String}
 * @readonly
 */
Filter.DispatchServiceTiersEnum = {
  /**
   * value: "EXPRESS"
   * @const
   */
  EXPRESS: "EXPRESS",

  /**
   * value: "REGULAR"
   * @const
   */
  REGULAR: "REGULAR"
};
/**
 * @member {Array.<module:model/Filter.DispatchServiceTiersEnum>} dispatchServiceTiers
 */
Filter.prototype.dispatchServiceTiers = undefined;

/**
 * @member {module:model/DateFilter} cancellationDate
 */
Filter.prototype.cancellationDate = undefined;

/**
 * Allowed values for the <code>cancellationType</code> property.
 * @enum {String}
 * @readonly
 */
Filter.CancellationTypeEnum = {
  /**
   * value: "sellerCancellation"
   * @const
   */
  sellerCancellation: "sellerCancellation",

  /**
   * value: "buyerCancellation"
   * @const
   */
  buyerCancellation: "buyerCancellation",

  /**
   * value: "marketplaceCancellation"
   * @const
   */
  marketplaceCancellation: "marketplaceCancellation"
};
/**
 * @member {module:model/Filter.CancellationTypeEnum} cancellationType
 */
Filter.prototype.cancellationType = undefined;

