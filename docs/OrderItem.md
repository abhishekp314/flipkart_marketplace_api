# FlipkartMarketplaceApi.OrderItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderItemId** | **String** |  | [optional] 
**orderId** | **String** |  | [optional] 
**cancellationGroupId** | **String** |  | [optional] 
**orderDate** | **Date** |  | [optional] 
**cancellationDate** | **Date** |  | [optional] 
**paymentType** | **String** |  | [optional] 
**status** | **String** |  | [optional] 
**cancellationReason** | **String** |  | [optional] 
**cancellationSubReason** | **String** |  | [optional] 
**courierReturn** | **Boolean** |  | [optional] 
**quantity** | **Number** |  | [optional] 
**fsn** | **String** |  | [optional] 
**sku** | **String** |  | [optional] 
**listingId** | **String** |  | [optional] 
**hsn** | **String** |  | [optional] 
**title** | **String** |  | [optional] 
**packageIds** | **[String]** |  | [optional] 
**priceComponents** | [**PriceComponent**](PriceComponent.md) |  | [optional] 
**serviceProfile** | **String** |  | [optional] 
**isReplacement** | **Boolean** |  | [optional] 

<a name="PaymentTypeEnum"></a>
## Enum: PaymentTypeEnum

* `COD` (value: `"COD"`)
* `PREPAID` (value: `"PREPAID"`)


<a name="StatusEnum"></a>
## Enum: StatusEnum

* `APPROVED` (value: `"APPROVED"`)
* `PACKING_IN_PROGRESS` (value: `"PACKING_IN_PROGRESS"`)
* `FORM_FAILED` (value: `"FORM_FAILED"`)
* `PACKED` (value: `"PACKED"`)
* `READY_TO_DISPATCH` (value: `"READY_TO_DISPATCH"`)
* `PICKUP_COMPLETE` (value: `"PICKUP_COMPLETE"`)
* `CANCELLED` (value: `"CANCELLED"`)
* `RETURN_REQUESTED` (value: `"RETURN_REQUESTED"`)
* `RETURNED` (value: `"RETURNED"`)
* `SHIPPED` (value: `"SHIPPED"`)
* `DELIVERED` (value: `"DELIVERED"`)
* `COMPLETED` (value: `"COMPLETED"`)


<a name="ServiceProfileEnum"></a>
## Enum: ServiceProfileEnum

* `flipkartFulfilment` (value: `"Flipkart_Fulfilment"`)
* `sellerFulfilment` (value: `"Seller_Fulfilment"`)
* `smartFulfilment` (value: `"Smart_Fulfilment"`)
* `FBF` (value: `"FBF"`)
* `NON_FBF` (value: `"NON_FBF"`)
* `FBF_LITE` (value: `"FBF_LITE"`)

