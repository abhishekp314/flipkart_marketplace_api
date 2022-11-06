# FlipkartMarketplaceApi.ListingsCommonV3Api

All URIs are relative to *https://sandbox-api.flipkart.net/sellers*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getListings**](ListingsCommonV3Api.md#getListings) | **GET** /listings/v3/{skuIds} | Get listings for SKUs
[**updateInventory**](ListingsCommonV3Api.md#updateInventory) | **POST** /listings/v3/update/inventory | Update listing inventory request
[**updatePrice**](ListingsCommonV3Api.md#updatePrice) | **POST** /listings/v3/update/price | Update listing price request

<a name="getListings"></a>
# **getListings**
> GetMarketplaceListingDetailsResponse getListings(skuIds)

Get listings for SKUs

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.ListingsCommonV3Api();
let skuIds = "skuIds_example"; // String | sku-ids

apiInstance.getListings(skuIds, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skuIds** | **String**| sku-ids | 

### Return type

[**GetMarketplaceListingDetailsResponse**](GetMarketplaceListingDetailsResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateInventory"></a>
# **updateInventory**
> {&#x27;String&#x27;: ListingChangeResponse} updateInventory(body)

Update listing inventory request

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.ListingsCommonV3Api();
let body = {
  "value" : {
    "random-sku-id" : {
      "product_id" : "MOBFDG3VACEXZEYZ",
      "locations" : [ {
        "id" : "LOC9e98b1262cb544c59f9bb13c189214ed",
        "inventory" : 10
      } ]
    }
  }
}; // {String: UpdateInventoryRequest} | request

apiInstance.updateInventory(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**{String: UpdateInventoryRequest}**](Object.md)| request | 

### Return type

[**{&#x27;String&#x27;: ListingChangeResponse}**](ListingChangeResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatePrice"></a>
# **updatePrice**
> {&#x27;String&#x27;: ListingChangeResponse} updatePrice(body)

Update listing price request

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.ListingsCommonV3Api();
let body = {
  "value" : {
    "random-sku-id" : {
      "product_id" : "MOBFDG3VACEXZEYZ",
      "price" : {
        "mrp" : 100,
        "selling_price" : 90,
        "currency" : "INR"
      }
    }
  }
}; // {String: UpdatePriceRequest} | request

apiInstance.updatePrice(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**{String: UpdatePriceRequest}**](Object.md)| request | 

### Return type

[**{&#x27;String&#x27;: ListingChangeResponse}**](ListingChangeResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

