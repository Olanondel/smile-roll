export const AddressCard = ({ address, isSelected, onSelect }) => {
  const addressLine = `${address.city}, ${address.street}, ${address.house}`
  const details = [
    address.entrance ? `Подъезд ${address.entrance}` : null,
    address.floor ? `этаж ${address.floor}` : null,
    address.apartment ? `квартира ${address.apartment}` : null,
  ]
    .filter(Boolean)
    .join(', ')

  return (
    <button
      type="button"
      onClick={onSelect}
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        padding: '16px',
        borderRadius: 14,
        border: isSelected ? '1px solid #ff6b3d' : '1px solid #e7e7e7',
        background: '#fff',
        cursor: 'pointer',
        textAlign: 'left',
      }}
    >
      <div style={{ display: 'grid', gap: 6 }}>
        <div style={{ fontWeight: 500 }}>{addressLine}</div>
        {details ? <div style={{ fontSize: 13, color: '#8e8e8e' }}>{details}</div> : null}
      </div>

      <div
        style={{
          width: 22,
          height: 22,
          borderRadius: '50%',
          border: isSelected ? '6px solid #ff6b3d' : '1px solid #cfcfcf',
          flexShrink: 0,
        }}
      />
    </button>
  )
}
