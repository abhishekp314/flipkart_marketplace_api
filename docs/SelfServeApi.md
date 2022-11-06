# FlipkartMarketplaceApi.SelfServeApi

All URIs are relative to *https://sandbox-api.flipkart.net/sellers*

Method | HTTP request | Description
------------- | ------------- | -------------
[**changeDispatchSlots**](SelfServeApi.md#changeDispatchSlots) | **POST** /orders/sandbox/update_dispatch_slot | Change &#x60;dispatch_by_date&#x60; and &#x60;dispatch_after_date&#x60;
[**createReturn**](SelfServeApi.md#createReturn) | **POST** /returns/sandbox/create_returns | Create courier or customer return
[**createService**](SelfServeApi.md#createService) | **POST** /v2/shipments/sandbox/create_service/ | Create forward or reverse services for drop ship orders
[**createTestOrders**](SelfServeApi.md#createTestOrders) | **POST** /orders/sandbox/test_orders | Create test orders
[**makeOrderUnHold**](SelfServeApi.md#makeOrderUnHold) | **PUT** /orders/sandbox/un_hold | Mark order un hold
[**markOrderItemDelivered**](SelfServeApi.md#markOrderItemDelivered) | **POST** /orders/sandbox/delivered | Mark order item as delivered
[**markOrderItemPickupComplete**](SelfServeApi.md#markOrderItemPickupComplete) | **POST** /orders/sandbox/pick_up_complete | Mark order item as pick up complete
[**markOrderItemShipped**](SelfServeApi.md#markOrderItemShipped) | **POST** /orders/sandbox/shipped | Mark order item as shipped
[**processReturnEvents**](SelfServeApi.md#processReturnEvents) | **POST** /returns/sandbox/return_events | Process return events
[**putOrderOnHold**](SelfServeApi.md#putOrderOnHold) | **PUT** /orders/sandbox/on_hold | Put order on hold

<a name="changeDispatchSlots"></a>
# **changeDispatchSlots**
> CreateCourierReturnResponse changeDispatchSlots(body)

Change &#x60;dispatch_by_date&#x60; and &#x60;dispatch_after_date&#x60;

This operation changes dispatch_by_date and dispatch_after_date for a specified order item. Please note dispatch dates should be in IST format. For ex &#x27;dispatch_after_date&#x27;:&#x27;YYYY-MM-DDTHH:MM:SS+05:30&#x27;

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.SelfServeApi();
let body = new FlipkartMarketplaceApi.CreateTestOrdersRequest(); // CreateTestOrdersRequest | 

apiInstance.changeDispatchSlots(body, (error, data, response) => {
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
 **body** | [**CreateTestOrdersRequest**](CreateTestOrdersRequest.md)|  | 

### Return type

[**CreateCourierReturnResponse**](CreateCourierReturnResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createReturn"></a>
# **createReturn**
> CreateCourierReturnResponse createReturn(body)

Create courier or customer return

This operation creates return for order in post dispatch state. The return type can be courier or customer

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.SelfServeApi();
let body = new FlipkartMarketplaceApi.CreateCourierReturnRequest(); // CreateCourierReturnRequest | 

apiInstance.createReturn(body, (error, data, response) => {
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
 **body** | [**CreateCourierReturnRequest**](CreateCourierReturnRequest.md)|  | 

### Return type

[**CreateCourierReturnResponse**](CreateCourierReturnResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createService"></a>
# **createService**
> CreateCourierReturnResponse createService(body)

Create forward or reverse services for drop ship orders

This operation creates forward or reverse services for self ship order items. PS: Order items should be of type self ship. serviceType field should be either &#x27;FORWARD&#x27; or &#x27;REVERSE&#x27;

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.SelfServeApi();
let body = new FlipkartMarketplaceApi.CreateService(); // CreateService | 

apiInstance.createService(body, (error, data, response) => {
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
 **body** | [**CreateService**](CreateService.md)|  | 

### Return type

[**CreateCourierReturnResponse**](CreateCourierReturnResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createTestOrders"></a>
# **createTestOrders**
> CreateTestOrdersResponse createTestOrders(body)

Create test orders

This operation creates test orders in sandbox

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.SelfServeApi();
let body = new FlipkartMarketplaceApi.CreateTestOrdersRequest(); // CreateTestOrdersRequest | 

apiInstance.createTestOrders(body, (error, data, response) => {
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
 **body** | [**CreateTestOrdersRequest**](CreateTestOrdersRequest.md)|  | 

### Return type

[**CreateTestOrdersResponse**](CreateTestOrdersResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="makeOrderUnHold"></a>
# **makeOrderUnHold**
> CreateCourierReturnResponse makeOrderUnHold(body)

Mark order un hold

This operation makes specified order item un hold from on hold

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.SelfServeApi();
let body = new FlipkartMarketplaceApi.MakeOrderUnHold(); // MakeOrderUnHold | 

apiInstance.makeOrderUnHold(body, (error, data, response) => {
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
 **body** | [**MakeOrderUnHold**](MakeOrderUnHold.md)|  | 

### Return type

[**CreateCourierReturnResponse**](CreateCourierReturnResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="markOrderItemDelivered"></a>
# **markOrderItemDelivered**
> CreateCourierReturnResponse markOrderItemDelivered(body)

Mark order item as delivered

This operation marks specified order item delivered and sends notification for the same

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.SelfServeApi();
let body = new FlipkartMarketplaceApi.MarkOrderItemDelivered(); // MarkOrderItemDelivered | 

apiInstance.markOrderItemDelivered(body, (error, data, response) => {
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
 **body** | [**MarkOrderItemDelivered**](MarkOrderItemDelivered.md)|  | 

### Return type

[**CreateCourierReturnResponse**](CreateCourierReturnResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="markOrderItemPickupComplete"></a>
# **markOrderItemPickupComplete**
> CreateCourierReturnResponse markOrderItemPickupComplete(body)

Mark order item as pick up complete

This operation marks specified order item pick up complete and sends notification for the same

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.SelfServeApi();
let body = new FlipkartMarketplaceApi.MarkOrderItemPickupComplete(); // MarkOrderItemPickupComplete | 

apiInstance.markOrderItemPickupComplete(body, (error, data, response) => {
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
 **body** | [**MarkOrderItemPickupComplete**](MarkOrderItemPickupComplete.md)|  | 

### Return type

[**CreateCourierReturnResponse**](CreateCourierReturnResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="markOrderItemShipped"></a>
# **markOrderItemShipped**
> CreateCourierReturnResponse markOrderItemShipped(body)

Mark order item as shipped

This operation marks specified order item shipped and sends notification for the same

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.SelfServeApi();
let body = new FlipkartMarketplaceApi.MarkOrderItemShipped(); // MarkOrderItemShipped | 

apiInstance.markOrderItemShipped(body, (error, data, response) => {
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
 **body** | [**MarkOrderItemShipped**](MarkOrderItemShipped.md)|  | 

### Return type

[**CreateCourierReturnResponse**](CreateCourierReturnResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="processReturnEvents"></a>
# **processReturnEvents**
> CreateCourierReturnResponse processReturnEvents(body)

Process return events

This operation marks return completed or cancelled and sends notification for the same

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.SelfServeApi();
let body = new FlipkartMarketplaceApi.ProcessReturnEvents(); // ProcessReturnEvents | 

apiInstance.processReturnEvents(body, (error, data, response) => {
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
 **body** | [**ProcessReturnEvents**](ProcessReturnEvents.md)|  | 

### Return type

[**CreateCourierReturnResponse**](CreateCourierReturnResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putOrderOnHold"></a>
# **putOrderOnHold**
> CreateCourierReturnResponse putOrderOnHold(body)

Put order on hold

This operation puts specified order item on hold and sends notification for the same

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.SelfServeApi();
let body = new FlipkartMarketplaceApi.PutOrderOnHold(); // PutOrderOnHold | 

apiInstance.putOrderOnHold(body, (error, data, response) => {
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
 **body** | [**PutOrderOnHold**](PutOrderOnHold.md)|  | 

### Return type

[**CreateCourierReturnResponse**](CreateCourierReturnResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

