import { Section } from '../../../../components/Section/Section.jsx'

export const PersonalInfoSection = ({ form }) => {
  const { register, formState } = form
  const { errors } = formState

  return (
    <Section title="Личные данные">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div>
          <input placeholder="Имя" {...register('firstName')} />
          {errors.firstName ? <span>{errors.firstName.message}</span> : null}
        </div>

        <div>
          <input placeholder="Телефон" {...register('phone')} />
          {errors.phone ? <span>{errors.phone.message}</span> : null}
        </div>
      </div>
    </Section>
  )
}
