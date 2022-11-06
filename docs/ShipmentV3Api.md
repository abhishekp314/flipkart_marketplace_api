# FlipkartMarketplaceApi.ShipmentV3Api

All URIs are relative to *https://sandbox-api.flipkart.net/sellers*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelByEnforcedGroupIds**](ShipmentV3Api.md#cancelByEnforcedGroupIds) | **POST** /v3/shipments/cancel | Cancel order items in a shipment
[**getInvoicesPdfFromEsi**](ShipmentV3Api.md#getInvoicesPdfFromEsi) | **GET** /v3/shipments/{shipmentIds}/invoices | Download invoice PDF
[**getLabels**](ShipmentV3Api.md#getLabels) | **GET** /v3/shipments/{shipmentIds}/labels | Download labels and invoices in PDF format for shipments
[**getLabelsOnly**](ShipmentV3Api.md#getLabelsOnly) | **POST** /v3/shipments/{shipmentIds}/labelOnly | Download labels Byte-Stream for shipments
[**getLabelsOnlyPDF**](ShipmentV3Api.md#getLabelsOnlyPDF) | **POST** /v3/shipments/{shipmentIds}/labelOnly/pdf | Download labels in PDF format for shipments
[**getManifest**](ShipmentV3Api.md#getManifest) | **POST** /v3/shipments/manifest | Download manifest PDF
[**getShipmentDetails**](ShipmentV3Api.md#getShipmentDetails) | **GET** /v3/shipments/{shipmentIds} | Get shipping related details for shipments
[**getShipmentDetailsByInternalId**](ShipmentV3Api.md#getShipmentDetailsByInternalId) | **GET** /v3/shipments | Get order details for given shipment or order ids
[**getVendorGroupDetails**](ShipmentV3Api.md#getVendorGroupDetails) | **GET** /v3/shipments/handover/counts | Get shipment handover counts per vendor
[**markRTD**](ShipmentV3Api.md#markRTD) | **POST** /v3/shipments/dispatch | Mark shipments ready for dispatch
[**pack**](ShipmentV3Api.md#pack) | **POST** /v3/shipments/labels | Trigger label generation for shipments
[**searchPreDispatchShipmentGet**](ShipmentV3Api.md#searchPreDispatchShipmentGet) | **GET** /v3/shipments/filter | Search shipments using filters
[**searchPreDispatchShipmentPost**](ShipmentV3Api.md#searchPreDispatchShipmentPost) | **POST** /v3/shipments/filter | Search shipments using filters
[**submitSelfShipDeliverAttemptRequest**](ShipmentV3Api.md#submitSelfShipDeliverAttemptRequest) | **POST** /v3/shipments/selfShip/deliveryAttempt | Update delivery attempt for self-ship shipments
[**submitSelfShipDeliveryRequest**](ShipmentV3Api.md#submitSelfShipDeliveryRequest) | **POST** /v3/shipments/selfShip/delivery | Update delivery date for self-ship shipments
[**submitSelfShiptDispatchRequest**](ShipmentV3Api.md#submitSelfShiptDispatchRequest) | **POST** /v3/shipments/selfShip/dispatch | Mark self-ship shipments dispatched
[**updateTrackingInfo**](ShipmentV3Api.md#updateTrackingInfo) | **POST** /v3/shipments/{shipmentId}/update | Update Tracking Id of the Shipment

<a name="cancelByEnforcedGroupIds"></a>
# **cancelByEnforcedGroupIds**
> ShipmentStatusResponse cancelByEnforcedGroupIds(opts)

Cancel order items in a shipment

This operation allows client to cancel order items inside shipment before marking them &#x60;PACKED&#x60;

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.ShipmentV3Api();
let opts = { 
  'body': new FlipkartMarketplaceApi.CancelShipmentRequest() // CancelShipmentRequest | 
};
apiInstance.cancelByEnforcedGroupIds(opts, (error, data, response) => {
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
 **body** | [**CancelShipmentRequest**](CancelShipmentRequest.md)|  | [optional] 

### Return type

[**ShipmentStatusResponse**](ShipmentStatusResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInvoicesPdfFromEsi"></a>
# **getInvoicesPdfFromEsi**
> getInvoicesPdfFromEsi(shipmentIds)

Download invoice PDF

This operation provides invoices for shipments in the PDF format. Label and invoice must have been generated before invoking this method.

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.ShipmentV3Api();
let shipmentIds = "shipmentIds_example"; // String | Comma separated shipment ids

apiInstance.getInvoicesPdfFromEsi(shipmentIds, (error, data, response) => {
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
 **shipmentIds** | **String**| Comma separated shipment ids | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getLabels"></a>
# **getLabels**
> getLabels(shipmentIds)

Download labels and invoices in PDF format for shipments

This operation returns the labels and invoices for the shipments in PDF format

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.ShipmentV3Api();
let shipmentIds = "shipmentIds_example"; // String | Comma separated shipment ids

apiInstance.getLabels(shipmentIds, (error, data, response) => {
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
 **shipmentIds** | **String**| Comma separated shipment ids | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getLabelsOnly"></a>
# **getLabelsOnly**
> InputStream getLabelsOnly(shipmentIds, opts)

Download labels Byte-Stream for shipments

This operation returns the labels for the shipments in Byte-Stream format

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.ShipmentV3Api();
let shipmentIds = "shipmentIds_example"; // String | Comma separated shipmentIds
let opts = { 
  'reprint': false // Boolean | True to rePrint Label
};
apiInstance.getLabelsOnly(shipmentIds, opts, (error, data, response) => {
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
 **shipmentIds** | **String**| Comma separated shipmentIds | 
 **reprint** | **Boolean**| True to rePrint Label | [optional] [default to false]

### Return type

[**InputStream**](InputStream.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/octet-stream

<a name="getLabelsOnlyPDF"></a>
# **getLabelsOnlyPDF**
> getLabelsOnlyPDF(shipmentIds, opts)

Download labels in PDF format for shipments

This operation returns the labels for the shipments in PDF format

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.ShipmentV3Api();
let shipmentIds = "shipmentIds_example"; // String | Comma separated shipment ids
let opts = { 
  'reprint': false // Boolean | True if you are reprinting Label
};
apiInstance.getLabelsOnlyPDF(shipmentIds, opts, (error, data, response) => {
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
 **shipmentIds** | **String**| Comma separated shipment ids | 
 **reprint** | **Boolean**| True if you are reprinting Label | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getManifest"></a>
# **getManifest**
> getManifest(opts)

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

let apiInstance = new FlipkartMarketplaceApi.ShipmentV3Api();
let opts = { 
  'body': new FlipkartMarketplaceApi.GetManifestRequest() // GetManifestRequest | 
};
apiInstance.getManifest(opts, (error, data, response) => {
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
 **body** | [**GetManifestRequest**](GetManifestRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="getShipmentDetails"></a>
# **getShipmentDetails**
> ShipmentDetailsResponseV3 getShipmentDetails(shipmentIds)

Get shipping related details for shipments

This operation returns shipping and tracking related details of the shipments e.g delivery / billing address, tracking id, buyer address, etc. Buyer contact number and email address would be provided only for self-ship shipments.

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.ShipmentV3Api();
let shipmentIds = "shipmentIds_example"; // String | Comma separated shipment ids

apiInstance.getShipmentDetails(shipmentIds, (error, data, response) => {
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
 **shipmentIds** | **String**| Comma separated shipment ids | 

### Return type

[**ShipmentDetailsResponseV3**](ShipmentDetailsResponseV3.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getShipmentDetailsByInternalId"></a>
# **getShipmentDetailsByInternalId**
> ShipmentResponse getShipmentDetailsByInternalId(opts)

Get order details for given shipment or order ids

This operation returns the order related details for the shipments. This operation can accept either shipmentIds, orderIds or orderItemIds, but only one type of query param is accepted per invocation.

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.ShipmentV3Api();
let opts = { 
  'shipmentIds': "shipmentIds_example", // String | Comma separated shipment ids
  'orderItemIds': "orderItemIds_example", // String | Comma separated order item ids
  'orderIds': "orderIds_example" // String | Comma separated order ids
};
apiInstance.getShipmentDetailsByInternalId(opts, (error, data, response) => {
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
 **shipmentIds** | **String**| Comma separated shipment ids | [optional] 
 **orderItemIds** | **String**| Comma separated order item ids | [optional] 
 **orderIds** | **String**| Comma separated order ids | [optional] 

### Return type

[**ShipmentResponse**](ShipmentResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getVendorGroupDetails"></a>
# **getVendorGroupDetails**
> [VendorGroupCodeDetailsResponseV3] getVendorGroupDetails(opts)

Get shipment handover counts per vendor

This operation returns the count of shipments to be handed over to the logistics partner (E-Kart or 3rd party vendors)

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.ShipmentV3Api();
let opts = { 
  'locationId': "locationId_example" // String | 
};
apiInstance.getVendorGroupDetails(opts, (error, data, response) => {
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
 **locationId** | **String**|  | [optional] 

### Return type

[**[VendorGroupCodeDetailsResponseV3]**](VendorGroupCodeDetailsResponseV3.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="markRTD"></a>
# **markRTD**
> ShipmentStatusResponse markRTD(opts)

Mark shipments ready for dispatch

This operation is used to mark the shipments as &#x60;READY_TO_DISPATCH&#x60; after the labels and invoices are generated and downloaded.

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.ShipmentV3Api();
let opts = { 
  'body': new FlipkartMarketplaceApi.DispatchShipmentRequest() // DispatchShipmentRequest | 
};
apiInstance.markRTD(opts, (error, data, response) => {
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
 **body** | [**DispatchShipmentRequest**](DispatchShipmentRequest.md)|  | [optional] 

### Return type

[**ShipmentStatusResponse**](ShipmentStatusResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="pack"></a>
# **pack**
> ShipmentStatusResponse pack(opts)

Trigger label generation for shipments

This operation triggers the generation of invoice and shipping labels for the shipment ids and marks shipments as &#x60;PACKED&#x60;

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.ShipmentV3Api();
let opts = { 
  'body': new FlipkartMarketplaceApi.ShipmentPackRequest() // ShipmentPackRequest | 
};
apiInstance.pack(opts, (error, data, response) => {
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
 **body** | [**ShipmentPackRequest**](ShipmentPackRequest.md)|  | [optional] 

### Return type

[**ShipmentStatusResponse**](ShipmentStatusResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchPreDispatchShipmentGet"></a>
# **searchPreDispatchShipmentGet**
> SearchShipmentResponse searchPreDispatchShipmentGet(opts)

Search shipments using filters

This operation should be used if &#x60;hasMore&#x60; is true in the response of &#x60;POST /v3/shipments/filter&#x60; API, so that the client can fetch the next set of shipment which qualify the earlier defined filter criteria. User need not build this URL by themselves, just use the URL returned as &#x60;nextPageUrl&#x60; in the response of &#x60;POST /v3/shipments/filter&#x60; or &#x60;GET /v3/shipments/filter&#x60;.

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.ShipmentV3Api();
let opts = { 
  'nextToken': "nextToken_example" // String | 
};
apiInstance.searchPreDispatchShipmentGet(opts, (error, data, response) => {
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
 **nextToken** | **String**|  | [optional] 

### Return type

[**SearchShipmentResponse**](SearchShipmentResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchPreDispatchShipmentPost"></a>
# **searchPreDispatchShipmentPost**
> SearchShipmentResponse searchPreDispatchShipmentPost(opts)

Search shipments using filters

This operation returns shipments based on applied filters

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.ShipmentV3Api();
let opts = { 
  'body': new FlipkartMarketplaceApi.SearchShipmentRequest() // SearchShipmentRequest | 
};
apiInstance.searchPreDispatchShipmentPost(opts, (error, data, response) => {
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
 **body** | [**SearchShipmentRequest**](SearchShipmentRequest.md)|  | [optional] 

### Return type

[**SearchShipmentResponse**](SearchShipmentResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json

<a name="submitSelfShipDeliverAttemptRequest"></a>
# **submitSelfShipDeliverAttemptRequest**
> ShipmentsDeliverResponseV2 submitSelfShipDeliverAttemptRequest(opts)

Update delivery attempt for self-ship shipments

This operation is used to update the delivery attempt with failure reason and new delivery date for the self-ship shipments.

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.ShipmentV3Api();
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

<a name="submitSelfShipDeliveryRequest"></a>
# **submitSelfShipDeliveryRequest**
> ShipmentsDeliverResponseV2 submitSelfShipDeliveryRequest(opts)

Update delivery date for self-ship shipments

This operation is used to update the delivery date for self-ship shipments.

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.ShipmentV3Api();
let opts = { 
  'body': new FlipkartMarketplaceApi.ShipmentsDeliverRequestV2() // ShipmentsDeliverRequestV2 | 
};
apiInstance.submitSelfShipDeliveryRequest(opts, (error, data, response) => {
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

<a name="submitSelfShiptDispatchRequest"></a>
# **submitSelfShiptDispatchRequest**
> ShipmentsDispatchResponseV2 submitSelfShiptDispatchRequest(opts)

Mark self-ship shipments dispatched

This operation is used to mark self-ship order items as &#x60;SHIPPED&#x60; from the seller warehouse.

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.ShipmentV3Api();
let opts = { 
  'body': new FlipkartMarketplaceApi.SelfshipDispatchRequestV3() // SelfshipDispatchRequestV3 | 
};
apiInstance.submitSelfShiptDispatchRequest(opts, (error, data, response) => {
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
 **body** | [**SelfshipDispatchRequestV3**](SelfshipDispatchRequestV3.md)|  | [optional] 

### Return type

[**ShipmentsDispatchResponseV2**](ShipmentsDispatchResponseV2.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateTrackingInfo"></a>
# **updateTrackingInfo**
> updateTrackingInfo(shipmentId, opts)

Update Tracking Id of the Shipment

This operation is used to update the Tracking Id for self-ship shipments.

### Example
```javascript
import {FlipkartMarketplaceApi} from 'flipkart_marketplace_api';
let defaultClient = FlipkartMarketplaceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new FlipkartMarketplaceApi.ShipmentV3Api();
let shipmentId = "shipmentId_example"; // String | 
let opts = { 
  'body': new FlipkartMarketplaceApi.UpdateShipmentRequest() // UpdateShipmentRequest | 
};
apiInstance.updateTrackingInfo(shipmentId, opts, (error, data, response) => {
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
 **shipmentId** | **String**|  | 
 **body** | [**UpdateShipmentRequest**](UpdateShipmentRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

