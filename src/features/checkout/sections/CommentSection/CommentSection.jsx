import { Section } from '../../../../components/Section/Section.jsx'

export const CommentSection = ({ form }) => {
  const {
    register,
    formState: { errors },
  } = form

  return (
    <Section title="Комментарий к заказу">
      <div style={{ display: 'grid', gap: 20 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 16,
          }}
        >
          <div style={{ display: 'grid', gap: 10 }}>
            <label htmlFor="chopsticks" style={{ fontWeight: 500 }}>
              Обычные палочки
            </label>

            <input
              id="chopsticks"
              type="number"
              min={0}
              {...register('chopsticks', { valueAsNumber: true })}
              style={{
                height: 48,
                borderRadius: 14,
                border: '1px solid #e7e7e7',
                padding: '0 14px',
              }}
            />

            {errors.chopsticks ? (
              <span style={{ color: 'red', fontSize: 14 }}>{errors.chopsticks.message}</span>
            ) : null}
          </div>

          <div style={{ display: 'grid', gap: 10 }}>
            <label htmlFor="trainingChopsticks" style={{ fontWeight: 500 }}>
              Учебные палочки
            </label>

            <input
              id="trainingChopsticks"
              type="number"
              min={0}
              {...register('trainingChopsticks', { valueAsNumber: true })}
              style={{
                height: 48,
                borderRadius: 14,
                border: '1px solid #e7e7e7',
                padding: '0 14px',
              }}
            />

            {errors.trainingChopsticks ? (
              <span style={{ color: 'red', fontSize: 14 }}>
                {errors.trainingChopsticks.message}
              </span>
            ) : null}
          </div>
        </div>

        <div style={{ display: 'grid', gap: 10 }}>
          <label htmlFor="comment" style={{ fontWeight: 500 }}>
            Комментарий
          </label>

          <textarea
            id="comment"
            placeholder="Укажите пожелания к заказу"
            {...register('comment')}
            rows={5}
            style={{
              borderRadius: 14,
              border: '1px solid #e7e7e7',
              padding: '14px',
              resize: 'vertical',
            }}
          />

          {errors.comment ? (
            <span style={{ color: 'red', fontSize: 14 }}>{errors.comment.message}</span>
          ) : null}
        </div>

        <div style={{ display: 'grid', gap: 12 }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <input type="checkbox" {...register('hasCat')} />
            <span>У меня есть котик</span>
          </label>

          <label style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <input type="checkbox" {...register('hasDog')} />
            <span>У меня есть собачка</span>
          </label>
        </div>
      </div>
    </Section>
  )
}
