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
import {ApiClient} from "../ApiClient";
import {GetMarketplaceListingDetailsResponse} from '../model/GetMarketplaceListingDetailsResponse';
import {ListingChangeResponse} from '../model/ListingChangeResponse';
import {UpdateInventoryRequest} from '../model/UpdateInventoryRequest';
import {UpdatePriceRequest} from '../model/UpdatePriceRequest';

/**
* ListingsCommonV3 service.
* @module api/ListingsCommonV3Api
* @version 3.0
*/
export class ListingsCommonV3Api {

    /**
    * Constructs a new ListingsCommonV3Api. 
    * @alias module:api/ListingsCommonV3Api
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getListings operation.
     * @callback moduleapi/ListingsCommonV3Api~getListingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetMarketplaceListingDetailsResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get listings for SKUs
     * @param {String} skuIds sku-ids
     * @param {module:api/ListingsCommonV3Api~getListingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getListings(skuIds, callback) {
      
      let postBody = null;
      // verify the required parameter 'skuIds' is set
      if (skuIds === undefined || skuIds === null) {
        throw new Error("Missing the required parameter 'skuIds' when calling getListings");
      }

      let pathParams = {
        'skuIds': skuIds
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetMarketplaceListingDetailsResponse;

      return this.apiClient.callApi(
        '/listings/v3/{skuIds}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateInventory operation.
     * @callback moduleapi/ListingsCommonV3Api~updateInventoryCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, module:model/{'String': ListingChangeResponse}>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update listing inventory request
     * @param {{String: UpdateInventoryRequest}} body request
     * @param {module:api/ListingsCommonV3Api~updateInventoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    updateInventory(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateInventory");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = {'String': ListingChangeResponse};

      return this.apiClient.callApi(
        '/listings/v3/update/inventory', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updatePrice operation.
     * @callback moduleapi/ListingsCommonV3Api~updatePriceCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, module:model/{'String': ListingChangeResponse}>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update listing price request
     * @param {{String: UpdatePriceRequest}} body request
     * @param {module:api/ListingsCommonV3Api~updatePriceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    updatePrice(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updatePrice");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = {'String': ListingChangeResponse};

      return this.apiClient.callApi(
        '/listings/v3/update/price', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}