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
import {AddressLabel} from './AddressLabel';
import {DatingLabel} from './DatingLabel';
import {Location} from './Location';
import {ModelPackage} from './ModelPackage';
import {Price} from './Price';
import {Tax} from './Tax';

/**
 * The CreateHyperlocalListingRequest model module.
 * @module model/CreateHyperlocalListingRequest
 * @version 3.0
 */
export class CreateHyperlocalListingRequest {
  /**
   * Constructs a new <code>CreateHyperlocalListingRequest</code>.
   * @alias module:model/CreateHyperlocalListingRequest
   * @class
   * @param productId {String} 
   * @param price {module:model/Price} 
   * @param tax {module:model/Tax} 
   * @param listingStatus {module:model/CreateHyperlocalListingRequest.ListingStatusEnum} 
   * @param _package {module:model/ModelPackage} 
   * @param location {module:model/Location} 
   * @param addressLabel {module:model/AddressLabel} 
   * @param datingLabel {module:model/DatingLabel} 
   */
  constructor(productId, price, tax, listingStatus, _package, location, addressLabel, datingLabel) {
    this.productId = productId;
    this.price = price;
    this.tax = tax;
    this.listingStatus = listingStatus;
    this._package = _package;
    this.location = location;
    this.addressLabel = addressLabel;
    this.datingLabel = datingLabel;
  }

  /**
   * Constructs a <code>CreateHyperlocalListingRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateHyperlocalListingRequest} obj Optional instance to populate.
   * @return {module:model/CreateHyperlocalListingRequest} The populated <code>CreateHyperlocalListingRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateHyperlocalListingRequest();
      if (data.hasOwnProperty('product_id'))
        obj.productId = ApiClient.convertToType(data['product_id'], 'String');
      if (data.hasOwnProperty('price'))
        obj.price = Price.constructFromObject(data['price']);
      if (data.hasOwnProperty('tax'))
        obj.tax = Tax.constructFromObject(data['tax']);
      if (data.hasOwnProperty('listing_status'))
        obj.listingStatus = ApiClient.convertToType(data['listing_status'], 'String');
      if (data.hasOwnProperty('package'))
        obj._package = ModelPackage.constructFromObject(data['package']);
      if (data.hasOwnProperty('location'))
        obj.location = Location.constructFromObject(data['location']);
      if (data.hasOwnProperty('address_label'))
        obj.addressLabel = AddressLabel.constructFromObject(data['address_label']);
      if (data.hasOwnProperty('dating_label'))
        obj.datingLabel = DatingLabel.constructFromObject(data['dating_label']);
    }
    return obj;
  }
}

/**
 * @member {String} productId
 */
CreateHyperlocalListingRequest.prototype.productId = undefined;

/**
 * @member {module:model/Price} price
 */
CreateHyperlocalListingRequest.prototype.price = undefined;

/**
 * @member {module:model/Tax} tax
 */
CreateHyperlocalListingRequest.prototype.tax = undefined;

/**
 * Allowed values for the <code>listingStatus</code> property.
 * @enum {String}
 * @readonly
 */
CreateHyperlocalListingRequest.ListingStatusEnum = {
  /**
   * value: "ACTIVE"
   * @const
   */
  ACTIVE: "ACTIVE",

  /**
   * value: "INACTIVE"
   * @const
   */
  INACTIVE: "INACTIVE"
};
/**
 * @member {module:model/CreateHyperlocalListingRequest.ListingStatusEnum} listingStatus
 */
CreateHyperlocalListingRequest.prototype.listingStatus = undefined;

/**
 * @member {module:model/ModelPackage} _package
 */
CreateHyperlocalListingRequest.prototype._package = undefined;

/**
 * @member {module:model/Location} location
 */
CreateHyperlocalListingRequest.prototype.location = undefined;

/**
 * @member {module:model/AddressLabel} addressLabel
 */
CreateHyperlocalListingRequest.prototype.addressLabel = undefined;

/**
 * @member {module:model/DatingLabel} datingLabel
 */
CreateHyperlocalListingRequest.prototype.datingLabel = undefined;
