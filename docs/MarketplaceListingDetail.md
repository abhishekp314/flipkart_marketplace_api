# FlipkartMarketplaceApi.MarketplaceListingDetail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**listingId** | **String** |  | 
**productId** | **String** |  | 
**price** | [**Price**](Price.md) |  | 
**tax** | [**Tax**](Tax.md) |  | [optional] 
**listingStatus** | **String** |  | 
**shippingFees** | [**ShippingFees**](ShippingFees.md) |  | [optional] 
**fulfillmentProfile** | **String** |  | 
**packages** | [**[ModelPackage]**](ModelPackage.md) |  | [optional] 
**locations** | [**[Location]**](Location.md) |  | [optional] 
**archivedStatus** | **String** |  | [optional] 

<a name="ListingStatusEnum"></a>
## Enum: ListingStatusEnum

* `ACTIVE` (value: `"ACTIVE"`)
* `INACTIVE` (value: `"INACTIVE"`)


<a name="FulfillmentProfileEnum"></a>
## Enum: FulfillmentProfileEnum

* `NON_FBF` (value: `"NON_FBF"`)
* `FBF_LITE` (value: `"FBF_LITE"`)
* `FBF` (value: `"FBF"`)


<a name="ArchivedStatusEnum"></a>
## Enum: ArchivedStatusEnum

* `ARCHIVED` (value: `"ARCHIVED"`)
* `NONE` (value: `"NONE"`)

