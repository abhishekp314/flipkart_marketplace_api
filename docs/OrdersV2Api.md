# FlipkartMarketplaceApi.OrdersV2Api

All URIs are relative to *https://sandbox-api.flipkart.net/sellers*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelOrders**](OrdersV2Api.md#cancelOrders) | **POST** /v2/orders/cancel | Cancel order items
[**getBulkActionProgressByRequestId**](OrdersV2Api.md#getBulkActionProgressByRequestId) | **GET** /v2/orders/labelRequest/{requestId} | Check label generation status
[**getInvoicesInfo**](OrdersV2Api.md#getInvoicesInfo) | **GET** /v2/orders/invoices | Get invoice details for order items
[**getLabels**](OrdersV2Api.md#getLabels) | **GET** /v2/orders/labels | Download labels and invoices in PDF format for order items
[**getManifestPdfForRequest**](OrdersV2Api.md#getManifestPdfForRequest) | **GET** /v2/orders/manifest | Download manifest PDF
[**getOrderItemById**](OrdersV2Api.md#getOrderItemById) | **GET** /v2/orders/{order_item_id} | Get details of order item
[**getOrderItemsByIds**](OrdersV2Api.md#getOrderItemsByIds) | **GET** /v2/orders | Get details of order items
[**getShipments**](OrdersV2Api.md#getShipments) | **GET** /v2/orders/shipments | Get shipping related details of order items
[**searchOrderItemRequest**](OrdersV2Api.md#searchOrderItemRequest) | **POST** /v2/orders/search | Search order items using filters
[**submitBulkConfirmRequest**](OrdersV2Api.md#submitBulkConfirmRequest) | **POST** /v2/orders/labels | Trigger label generation for order items
[**submitBulkRtdRequest**](OrdersV2Api.md#submitBulkRtdRequest) | **POST** /v2/orders/dispatch | Mark order items ready for dispatch
[**submitSelfShipDeliverAttemptRequest**](OrdersV2Api.md#submitSelfShipDeliverAttemptRequest) | **POST** /v2/shipments/deliveryAttempt | Update delivery attempt for self-ship order items
[**submitSelfShipDeliverRequest**](OrdersV2Api.md#submitSelfShipDeliverRequest) | **POST** /v2/shipments/delivery | Update delivery date for self-ship order items
[**submitSelfShipmentDispatchRequest**](OrdersV2Api.md#submitSelfShipmentDispatchRequest) | **POST** /v2/shipments/dispatch | Mark self-ship order items ready for dispatch
[**submitServiceAttemptRequest**](OrdersV2Api.md#submitServiceAttemptRequest) | **POST** /v2/services/attempt | Update service attempts
[**submitServiceCompleteRequest**](OrdersV2Api.md#submitServiceCompleteRequest) | **POST** /v2/services/complete | Update services as complete

<a name="cancelOrders"></a>
# **cancelOrders**
> OrderItemCancelResponse cancelOrders(opts)

Cancel order items

This operation allows client to cancel order items before marking them &#x60;PACKED&#x60;

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.OrdersV2Api();
let opts = { 
  'body': new FlipkartMarketplaceApi.CancelRequestV2() // CancelRequestV2 | 
};
apiInstance.cancelOrders(opts, (error, data, response) => {
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
 **body** | [**CancelRequestV2**](CancelRequestV2.md)|  | [optional] 

### Return type

[**OrderItemCancelResponse**](OrderItemCancelResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBulkActionProgressByRequestId"></a>
# **getBulkActionProgressByRequestId**
> BulkActionProgressResponse getBulkActionProgressByRequestId(requestId)

Check label generation status

This operation returns the status of the label generation process which was triggered using &#x60;POST /v2/orders/labels&#x60; API. Query param &#x60;requestId&#x60; is the same value which is returned in the response of &#x60;POST /v2/orders/labels&#x60; API

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.OrdersV2Api();
let requestId = "requestId_example"; // String | 

apiInstance.getBulkActionProgressByRequestId(requestId, (error, data, response) => {
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
 **requestId** | **String**|  | 

### Return type

[**BulkActionProgressResponse**](BulkActionProgressResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInvoicesInfo"></a>
# **getInvoicesInfo**
> InvoicesSearchResponseV2 getInvoicesInfo(opts)

Get invoice details for order items

This operation returns the GST tax details, invoice number and date for the order items

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.OrdersV2Api();
let opts = { 
  'orderItemIds': "orderItemIds_example" // String | 
};
apiInstance.getInvoicesInfo(opts, (error, data, response) => {
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
 **orderItemIds** | **String**|  | [optional] 

### Return type

[**InvoicesSearchResponseV2**](InvoicesSearchResponseV2.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLabels"></a>
# **getLabels**
> getLabels(opts)

Download labels and invoices in PDF format for order items

This operation returns the labels and invoices for the order items in PDF format. Label and invoice must have been generated before invoking this method.

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.OrdersV2Api();
let opts = { 
  'orderItemIds': "orderItemIds_example" // String | Comma separated order items ids
};
apiInstance.getLabels(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderItemIds** | **String**| Comma separated order items ids | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getManifestPdfForRequest"></a>
# **getManifestPdfForRequest**
> getManifestPdfForRequest()

Download manifest PDF

This operation returns the manifest file in PDF format

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.OrdersV2Api();
apiInstance.getManifestPdfForRequest((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getOrderItemById"></a>
# **getOrderItemById**
> OrderItem getOrderItemById(orderItemId)

Get details of order item

This operation returns details for the order item id

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.OrdersV2Api();
let orderItemId = "orderItemId_example"; // String | A single order item id

apiInstance.getOrderItemById(orderItemId, (error, data, response) => {
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
 **orderItemId** | **String**| A single order item id | 

### Return type

[**OrderItem**](OrderItem.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrderItemsByIds"></a>
# **getOrderItemsByIds**
> FetchOrderItemsResponse getOrderItemsByIds(opts)

Get details of order items

This operation returns details for the order item ids passed in the query param. This is a bulk version of &#x60;GET /v2/orders/{order_item_id}&#x60; API

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.OrdersV2Api();
let opts = { 
  'orderItemIds': "orderItemIds_example" // String | Comma separated order item ids
};
apiInstance.getOrderItemsByIds(opts, (error, data, response) => {
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
 **orderItemIds** | **String**| Comma separated order item ids | [optional] 

### Return type

[**FetchOrderItemsResponse**](FetchOrderItemsResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getShipments"></a>
# **getShipments**
> ShipmentSearchResponse getShipments(opts)

Get shipping related details of order items

This operation returns shipping and tracking related details of the order items e.g delivery / billing address, tracking id, buyer address, etc. Buyer contact number and email address would be provided only for self-ship orders.

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.OrdersV2Api();
let opts = { 
  'orderItemIds': "orderItemIds_example" // String | 
};
apiInstance.getShipments(opts, (error, data, response) => {
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
 **orderItemIds** | **String**|  | [optional] 

### Return type

[**ShipmentSearchResponse**](ShipmentSearchResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchOrderItemRequest"></a>
# **searchOrderItemRequest**
> SearchOrderItemResponseV2 searchOrderItemRequest(opts)

Search order items using filters

This operation returns order items based on applied filters

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.OrdersV2Api();
let opts = { 
  'body': new FlipkartMarketplaceApi.SearchOrderItemRequest() // SearchOrderItemRequest | 
};
apiInstance.searchOrderItemRequest(opts, (error, data, response) => {
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
 **body** | [**SearchOrderItemRequest**](SearchOrderItemRequest.md)|  | [optional] 

### Return type

[**SearchOrderItemResponseV2**](SearchOrderItemResponseV2.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json

<a name="submitBulkConfirmRequest"></a>
# **submitBulkConfirmRequest**
> BulkConfirmResponseV2 submitBulkConfirmRequest(opts)

Trigger label generation for order items

This operation triggers the generation of invoice and shipping labels for the order items and marks them as &#x60;PACKED&#x60;

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.OrdersV2Api();
let opts = { 
  'body': new FlipkartMarketplaceApi.GenerateLabelRequestV2() // GenerateLabelRequestV2 | 
};
apiInstance.submitBulkConfirmRequest(opts, (error, data, response) => {
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
 **body** | [**GenerateLabelRequestV2**](GenerateLabelRequestV2.md)|  | [optional] 

### Return type

[**BulkConfirmResponseV2**](BulkConfirmResponseV2.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="submitBulkRtdRequest"></a>
# **submitBulkRtdRequest**
> BulkRtdResponse submitBulkRtdRequest(opts)

Mark order items ready for dispatch

This operation is used to mark the order items as &#x60;READY_TO_DISPATCH&#x60;. It must be invoked after downloading the invoice and label.

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.OrdersV2Api();
let opts = { 
  'body': new FlipkartMarketplaceApi.BulkRtdActionRequest() // BulkRtdActionRequest | 
};
apiInstance.submitBulkRtdRequest(opts, (error, data, response) => {
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
 **body** | [**BulkRtdActionRequest**](BulkRtdActionRequest.md)|  | [optional] 

### Return type

[**BulkRtdResponse**](BulkRtdResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="submitSelfShipDeliverAttemptRequest"></a>
# **submitSelfShipDeliverAttemptRequest**
> ShipmentsDeliverResponseV2 submitSelfShipDeliverAttemptRequest(opts)

Update delivery attempt for self-ship order items

This operation is used to update the delivery attempt with failure reason and new delivery date for the self-ship order items.

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.OrdersV2Api();
let opts = { 
  'body': new FlipkartMarketplaceApi.ShipmentsDeliverAttemptRequestV2() // ShipmentsDeliverAttemptRequestV2 | 
};
apiInstance.submitSelfShipDeliverAttemptRequest(opts, (error, data, response) => {
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
 **body** | [**ShipmentsDeliverAttemptRequestV2**](ShipmentsDeliverAttemptRequestV2.md)|  | [optional] 

### Return type

[**ShipmentsDeliverResponseV2**](ShipmentsDeliverResponseV2.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="submitSelfShipDeliverRequest"></a>
# **submitSelfShipDeliverRequest**
> ShipmentsDeliverResponseV2 submitSelfShipDeliverRequest(opts)

Update delivery date for self-ship order items

This operation is used to update the delivery date for self-ship order items.

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.OrdersV2Api();
let opts = { 
  'body': new FlipkartMarketplaceApi.ShipmentsDeliverRequestV2() // ShipmentsDeliverRequestV2 | 
};
apiInstance.submitSelfShipDeliverRequest(opts, (error, data, response) => {
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
 **body** | [**ShipmentsDeliverRequestV2**](ShipmentsDeliverRequestV2.md)|  | [optional] 

### Return type

[**ShipmentsDeliverResponseV2**](ShipmentsDeliverResponseV2.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="submitSelfShipmentDispatchRequest"></a>
# **submitSelfShipmentDispatchRequest**
> ShipmentsDispatchResponseV2 submitSelfShipmentDispatchRequest(opts)

Mark self-ship order items ready for dispatch

This operation is used to mark self-ship order items as &#x60;READY_TO_DISPATCH&#x60; from the seller warehouse.

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.OrdersV2Api();
let opts = { 
  'body': new FlipkartMarketplaceApi.ShipmentsDispatchRequestV2() // ShipmentsDispatchRequestV2 | 
};
apiInstance.submitSelfShipmentDispatchRequest(opts, (error, data, response) => {
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
 **body** | [**ShipmentsDispatchRequestV2**](ShipmentsDispatchRequestV2.md)|  | [optional] 

### Return type

[**ShipmentsDispatchResponseV2**](ShipmentsDispatchResponseV2.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="submitServiceAttemptRequest"></a>
# **submitServiceAttemptRequest**
> ServiceResponseStatusV2 submitServiceAttemptRequest(opts)

Update service attempts

This operation is used to update the service attempt with failure reason and new delivery date.

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.OrdersV2Api();
let opts = { 
  'body': new FlipkartMarketplaceApi.ServiceAttemptRequest() // ServiceAttemptRequest | 
};
apiInstance.submitServiceAttemptRequest(opts, (error, data, response) => {
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
 **body** | [**ServiceAttemptRequest**](ServiceAttemptRequest.md)|  | [optional] 

### Return type

[**ServiceResponseStatusV2**](ServiceResponseStatusV2.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="submitServiceCompleteRequest"></a>
# **submitServiceCompleteRequest**
> ServiceResponseStatusV2 submitServiceCompleteRequest(opts)

Update services as complete

This operation is used to mark the services as complete.

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.OrdersV2Api();
let opts = { 
  'body': new FlipkartMarketplaceApi.ServiceCompleteRequest() // ServiceCompleteRequest | 
};
apiInstance.submitServiceCompleteRequest(opts, (error, data, response) => {
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
 **body** | [**ServiceCompleteRequest**](ServiceCompleteRequest.md)|  | [optional] 

### Return type

[**ServiceResponseStatusV2**](ServiceResponseStatusV2.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

