# FlipkartMarketplaceApi.ListingsFlipkartV3Api

All URIs are relative to *https://sandbox-api.flipkart.net/sellers*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createListings**](ListingsFlipkartV3Api.md#createListings) | **POST** /listings/v3 | Create listing request
[**updateListings**](ListingsFlipkartV3Api.md#updateListings) | **POST** /listings/v3/update | Update listing request

<a name="createListings"></a>
# **createListings**
> {&#x27;String&#x27;: ListingChangeResponse} createListings(body)

Create listing request

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.ListingsFlipkartV3Api();
let body = null; // {String: CreateListingRequest} | request

apiInstance.createListings(body, (error, data, response) => {
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
 **body** | [**{String: CreateListingRequest}**](Object.md)| request | 

### Return type

[**{&#x27;String&#x27;: ListingChangeResponse}**](ListingChangeResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateListings"></a>
# **updateListings**
> {&#x27;String&#x27;: ListingChangeResponse} updateListings(body)

Update listing request

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.ListingsFlipkartV3Api();
let body = {
  "value" : {
    "seller-sku-id" : {
      "product_id" : "MOBFDG3VACEXZEYZ",
      "price" : {
        "mrp" : 100,
        "selling_price" : 90,
        "currency" : "INR"
      },
      "tax" : {
        "hsn" : "85171810",
        "tax_code" : "GST_5"
      },
      "listing_status" : "ACTIVE",
      "shipping_fees" : {
        "local" : 10,
        "zonal" : 10,
        "national" : 20,
        "currency" : "INR"
      },
      "fulfillment_profile" : "NON_FBF",
      "fulfillment" : {
        "dispatch_sla" : 1,
        "shipping_provider" : "FLIPKART",
        "procurement_type" : "REGULAR"
      },
      "packages" : [ {
        "name" : "random-sku-id",
        "dimensions" : {
          "length" : 10,
          "breadth" : 10,
          "height" : 10
        },
        "weight" : 100,
        "description" : "",
        "handling" : {
          "fragile" : true
        },
        "notional_value" : {
          "amount" : 100,
          "unit" : "PERCENTAGE"
        }
      } ],
      "locations" : [ {
        "id" : "LOC9e98b1262cb544c59f9bb13c189214ed",
        "status" : "ENABLED",
        "inventory" : 10
      } ],
      "address_label" : {
        "manufacturer_details" : [ "2nd floor X.Y.Z Complex, Bengaluru, Karnataka 560066" ],
        "importer_details" : [ "2nd floor X.Y.Z Complex, Bengaluru, Karnataka 560066" ],
        "packer_details" : [ "2nd floor X.Y.Z Complex, Bengaluru, Karnataka 560066" ],
        "countries_of_origin" : [ "IN" ]
      },
      "dating_label" : {
        "mfg_date" : "1617806560",
        "shelf_life" : "155520000"
      },
      "archived_status" : "NONE"
    }
  }
}; // {String: UpdateListingRequest} | request

apiInstance.updateListings(body, (error, data, response) => {
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
 **body** | [**{String: UpdateListingRequest}**](Object.md)| request | 

### Return type

[**{&#x27;String&#x27;: ListingChangeResponse}**](ListingChangeResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

