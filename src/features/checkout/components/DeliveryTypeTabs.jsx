export const DeliveryTypeTabs = ({ value, onChange }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 8,
      }}
    >
      <button
        type="button"
        onClick={() => onChange('delivery')}
        style={{
          padding: '14px 16px',
          borderRadius: 12,
          border: '1px solid #e5e5e5',
          background: value === 'delivery' ? '#ff6b3d' : '#f3f3f3',
          color: value === 'delivery' ? '#fff' : '#222',
        }}
      >
        Доставка
      </button>

      <button
        type="button"
        onClick={() => onChange('pickup')}
        style={{
          padding: '14px 16px',
          borderRadius: 12,
          border: '1px solid #e5e5e5',
          background: value === 'pickup' ? '#ff6b3d' : '#f3f3f3',
          color: value === 'pickup' ? '#fff' : '#222',
        }}
      >
        Самовывоз
      </button>
    </div>
  )
}
