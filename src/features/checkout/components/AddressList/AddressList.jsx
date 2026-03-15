import { AddressCard } from '../AddressCard/AddressCard.jsx'

export const AddressList = ({ addresses, selectedAddressId, onSelect }) => {
  if (addresses.length === 0) {
    return <div>Нет сохраненных адресов</div>
  }

  return (
    <div style={{ display: 'grid', gap: 12 }}>
      {addresses.map((address) => (
        <AddressCard
          key={address.id}
          address={address}
          isSelected={selectedAddressId === address.id}
          onSelect={() => onSelect(address.id)}
        />
      ))}
    </div>
  )
}
