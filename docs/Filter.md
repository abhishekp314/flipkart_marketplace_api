# FlipkartMarketplaceApi.Filter

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** |  | 
**states** | **[String]** |  | [optional] 
**locationId** | **String** |  | [optional] 
**sku** | **[String]** |  | [optional] 
**orderDate** | [**DateFilter**](DateFilter.md) |  | [optional] 
**dispatchAfterDate** | [**DateFilter**](DateFilter.md) |  | [optional] 
**dispatchByDate** | [**DateFilter**](DateFilter.md) |  | [optional] 
**modifiedDate** | [**DateFilter**](DateFilter.md) |  | [optional] 
**shipmentTypes** | **[String]** |  | [optional] 
**serviceProfiles** | **[String]** |  | [optional] 
**dispatchServiceTiers** | **[String]** |  | [optional] 
**cancellationDate** | [**DateFilter**](DateFilter.md) |  | [optional] 
**cancellationType** | **String** |  | [optional] 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `preDispatch` (value: `"preDispatch"`)
* `postDispatch` (value: `"postDispatch"`)
* `cancelled` (value: `"cancelled"`)


<a name="[StatesEnum]"></a>
## Enum: [StatesEnum]

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


<a name="[ShipmentTypesEnum]"></a>
## Enum: [ShipmentTypesEnum]

* `EXPRESS` (value: `"EXPRESS"`)
* `NORMAL` (value: `"NORMAL"`)
* `SELF` (value: `"SELF"`)


<a name="[ServiceProfilesEnum]"></a>
## Enum: [ServiceProfilesEnum]

* `FBF` (value: `"FBF"`)
* `NON_FBF` (value: `"NON_FBF"`)
* `FBF_LITE` (value: `"FBF_LITE"`)


<a name="[DispatchServiceTiersEnum]"></a>
## Enum: [DispatchServiceTiersEnum]

* `EXPRESS` (value: `"EXPRESS"`)
* `REGULAR` (value: `"REGULAR"`)


<a name="CancellationTypeEnum"></a>
## Enum: CancellationTypeEnum

* `sellerCancellation` (value: `"sellerCancellation"`)
* `buyerCancellation` (value: `"buyerCancellation"`)
* `marketplaceCancellation` (value: `"marketplaceCancellation"`)

