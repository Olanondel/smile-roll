import { Section } from '../../../../components/Section/Section.jsx'
import { MIN_ORDER_PRICE } from '../../../../constants/status.js'
import { DeliveryTypeTabs } from '../../components/DeliveryTypeTabs.jsx'
import { PickupInfo } from '../../components/PickupInfo.jsx'
import { AddressList } from '../../components/AddressList/AddressList.jsx'
import { FieldError } from '../../../../components/ui/FieldError/FieldError.jsx'

export const DeliverySection = ({ form, addresses, onAddAddress, onDeleteAddress, addressRef }) => {
  const { register, watch, setValue } = form

  const deliveryType = watch('deliveryType')
  const selectedAddressId = watch('addressId')

  const handleSelectAddress = (addressId) => {
    setValue('addressId', addressId, {
      shouldDirty: true,
      shouldValidate: true,
    })
  }

  const handleDeliveryTypeChange = (value) => {
    setValue('deliveryType', value, {
      shouldDirty: true,
      shouldValidate: true,
    })

    if (value === 'pickup') {
      setValue('addressId', null, {
        shouldDirty: true,
        shouldValidate: true,
      })
    }
  }

  return (
    <Section title="Доставка" description="Зона бесплатной доставки уточняется у оператора">
      <div ref={addressRef} style={{ display: 'grid', gap: 20 }}>
        <DeliveryTypeTabs value={deliveryType} onChange={handleDeliveryTypeChange} />

        {deliveryType === 'delivery' ? (
          <>
            <AddressList
              addresses={addresses}
              selectedAddressId={selectedAddressId}
              onSelect={handleSelectAddress}
              onDeleteAddress={onDeleteAddress}
            />

            <FieldError name="addressId" />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 12,
              }}
            >
              <button type="button" onClick={onAddAddress}>
                Добавить новый адрес
              </button>

              <button
                type="button"
                disabled={!selectedAddressId}
                onClick={() => {
                  if (!selectedAddressId || !onDeleteAddress) return
                  onDeleteAddress(selectedAddressId)
                }}
              >
                Удалить адрес
              </button>
            </div>
          </>
        ) : (
          <PickupInfo />
        )}

        <div style={{ display: 'grid', gap: 12 }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <input type="checkbox" {...register('doNotCall')} />
            <span>Не звонить в дверь</span>
          </label>

          <label style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <input type="checkbox" {...register('leaveAtDoor')} />
            <span>Оставить под дверью</span>
          </label>
        </div>
      </div>
    </Section>
  )
}
