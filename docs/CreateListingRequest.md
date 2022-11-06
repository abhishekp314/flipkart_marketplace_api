# FlipkartMarketplaceApi.CreateListingRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**productId** | **String** |  | 
**price** | [**Price**](Price.md) |  | 
**tax** | [**Tax**](Tax.md) |  | 
**listingStatus** | **String** |  | 
**shippingFees** | [**ShippingFees**](ShippingFees.md) |  | [optional] 
**subsidizedShipping** | **Boolean** |  | [optional] 
**fulfillmentProfile** | **String** |  | 
**fulfillment** | [**Fulfillment**](Fulfillment.md) |  | [optional] 
**packages** | [**[ModelPackage]**](ModelPackage.md) |  | 
**locations** | [**[Location]**](Location.md) |  | 
**addressLabel** | [**AddressLabel**](AddressLabel.md) |  | [optional] 
**datingLabel** | [**DatingLabel**](DatingLabel.md) |  | [optional] 

<a name="ListingStatusEnum"></a>
## Enum: ListingStatusEnum

* `ACTIVE` (value: `"ACTIVE"`)
* `INACTIVE` (value: `"INACTIVE"`)


<a name="FulfillmentProfileEnum"></a>
## Enum: FulfillmentProfileEnum

* `NON_FBF` (value: `"NON_FBF"`)
* `FBF_LITE` (value: `"FBF_LITE"`)
* `FBF` (value: `"FBF"`)

