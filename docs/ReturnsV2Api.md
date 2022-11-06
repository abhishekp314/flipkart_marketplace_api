# FlipkartMarketplaceApi.ReturnsV2Api

All URIs are relative to *https://sandbox-api.flipkart.net/sellers*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approveSelfShipReturns**](ReturnsV2Api.md#approveSelfShipReturns) | **POST** /v2/returns/approve | Approve self-ship returns
[**cancelSelfShipReturn**](ReturnsV2Api.md#cancelSelfShipReturn) | **POST** /v2/returns/cancel | Cancel self-ship return
[**getReturns**](ReturnsV2Api.md#getReturns) | **GET** /v2/returns | Fetch returns
[**pickup**](ReturnsV2Api.md#pickup) | **POST** /v2/returns/pickup | Update self-ship returns pickup details
[**pickupAttempt**](ReturnsV2Api.md#pickupAttempt) | **POST** /v2/returns/pickupAttempt | Update self-ship returns pickup attempt
[**rejectSelfShipReturns**](ReturnsV2Api.md#rejectSelfShipReturns) | **POST** /v2/returns/reject | Reject self-ship returns
[**returnComplete**](ReturnsV2Api.md#returnComplete) | **POST** /v2/returns/complete | Update self-ship returns as complete

<a name="approveSelfShipReturns"></a>
# **approveSelfShipReturns**
> ReturnsActionResponseV2 approveSelfShipReturns(opts)

Approve self-ship returns

This operation is used to approve the self-ship returns.

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.ReturnsV2Api();
let opts = { 
  'body': new FlipkartMarketplaceApi.ReturnsApproveRequest() // ReturnsApproveRequest | 
};
apiInstance.approveSelfShipReturns(opts, (error, data, response) => {
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
 **body** | [**ReturnsApproveRequest**](ReturnsApproveRequest.md)|  | [optional] 

### Return type

[**ReturnsActionResponseV2**](ReturnsActionResponseV2.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json

<a name="cancelSelfShipReturn"></a>
# **cancelSelfShipReturn**
> ReturnsActionResponseV2 cancelSelfShipReturn(opts)

Cancel self-ship return

This operation is used to cancel the self-ship return

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.ReturnsV2Api();
let opts = { 
  'body': new FlipkartMarketplaceApi.SelfShipReturnCancellationRequest() // SelfShipReturnCancellationRequest | 
};
apiInstance.cancelSelfShipReturn(opts, (error, data, response) => {
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
 **body** | [**SelfShipReturnCancellationRequest**](SelfShipReturnCancellationRequest.md)|  | [optional] 

### Return type

[**ReturnsActionResponseV2**](ReturnsActionResponseV2.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getReturns"></a>
# **getReturns**
> ReturnsSearchResponseV2 getReturns(opts)

Fetch returns

This operation is used to fetch returns based on given return created / modified date ranges or specific &#x60;returnIds&#x60; or &#x60;trackingIds&#x60;

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.ReturnsV2Api();
let opts = { 
  'source': "source_example", // String | 
  'modifiedAfter': "modifiedAfter_example", // String | 
  'modifiedBefore': "modifiedBefore_example", // String | 
  'createdAfter': "createdAfter_example", // String | 
  'createdBefore': "createdBefore_example", // String | 
  'returnIds': "returnIds_example", // String | Comma separated return ids. Max. 25 allowed.
  'trackingIds': "trackingIds_example", // String | Comma separated tracking ids. Max. 25 allowed.
  'locationId': "locationId_example" // String | 
};
apiInstance.getReturns(opts, (error, data, response) => {
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
 **source** | **String**|  | [optional] 
 **modifiedAfter** | **String**|  | [optional] 
 **modifiedBefore** | **String**|  | [optional] 
 **createdAfter** | **String**|  | [optional] 
 **createdBefore** | **String**|  | [optional] 
 **returnIds** | **String**| Comma separated return ids. Max. 25 allowed. | [optional] 
 **trackingIds** | **String**| Comma separated tracking ids. Max. 25 allowed. | [optional] 
 **locationId** | **String**|  | [optional] 

### Return type

[**ReturnsSearchResponseV2**](ReturnsSearchResponseV2.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="pickup"></a>
# **pickup**
> ReturnsActionResponseV2 pickup(opts)

Update self-ship returns pickup details

This operation is used to update the pickup details of customer self-ship returns.

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.ReturnsV2Api();
let opts = { 
  'body': new FlipkartMarketplaceApi.SelfShipReturnPickupRequests() // SelfShipReturnPickupRequests | 
};
apiInstance.pickup(opts, (error, data, response) => {
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
 **body** | [**SelfShipReturnPickupRequests**](SelfShipReturnPickupRequests.md)|  | [optional] 

### Return type

[**ReturnsActionResponseV2**](ReturnsActionResponseV2.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="pickupAttempt"></a>
# **pickupAttempt**
> ReturnsActionResponseV2 pickupAttempt(opts)

Update self-ship returns pickup attempt

This operation is used to update the failed pickup attempt of self-ship returns.

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.ReturnsV2Api();
let opts = { 
  'body': new FlipkartMarketplaceApi.SelfShipReturnPickupAttemptRequests() // SelfShipReturnPickupAttemptRequests | 
};
apiInstance.pickupAttempt(opts, (error, data, response) => {
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
 **body** | [**SelfShipReturnPickupAttemptRequests**](SelfShipReturnPickupAttemptRequests.md)|  | [optional] 

### Return type

[**ReturnsActionResponseV2**](ReturnsActionResponseV2.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="rejectSelfShipReturns"></a>
# **rejectSelfShipReturns**
> ReturnsActionResponseV2 rejectSelfShipReturns(opts)

Reject self-ship returns

This operation is used to reject customer self-ship returns.

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.ReturnsV2Api();
let opts = { 
  'body': new FlipkartMarketplaceApi.ReturnsRejectRequest() // ReturnsRejectRequest | 
};
apiInstance.rejectSelfShipReturns(opts, (error, data, response) => {
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
 **body** | [**ReturnsRejectRequest**](ReturnsRejectRequest.md)|  | [optional] 

### Return type

[**ReturnsActionResponseV2**](ReturnsActionResponseV2.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json

<a name="returnComplete"></a>
# **returnComplete**
> ReturnsActionResponseV2 returnComplete(opts)

Update self-ship returns as complete

This operation is used to mark the self-ship returns as complete.

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.ReturnsV2Api();
let opts = { 
  'body': new FlipkartMarketplaceApi.SelfShipReturnCompleteRequest() // SelfShipReturnCompleteRequest | 
};
apiInstance.returnComplete(opts, (error, data, response) => {
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
 **body** | [**SelfShipReturnCompleteRequest**](SelfShipReturnCompleteRequest.md)|  | [optional] 

### Return type

[**ReturnsActionResponseV2**](ReturnsActionResponseV2.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

