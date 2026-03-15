import { Section } from '../../../../components/Section/Section.jsx'
import { Input } from '../../../../components/ui/Input/Input.jsx'

export const PersonalInfoSection = () => {
  return (
    <Section title="Личные данные">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 16,
        }}
      >
        <div>
          <Input name="firstName" />
        </div>

        <div>
          <Input type="tel" name="phone" />
        </div>
      </div>
    </Section>
  )
}
