import React, { useMemo, useState } from 'react'
import { FilterGroup, FilterChip } from '@/features/filters/index.js'

const categoryOptions = [
  { value: 'all', label: 'Все' },
  { value: 'classic', label: 'Классические' },
  { value: 'maki', label: 'Маки' },
  { value: 'dragon', label: 'Драконы' },
  { value: 'baked', label: 'Запеченные' },
  { value: 'philadelphia', label: 'Феликсы' },
  { value: 'sweet', label: 'Сладкие' },
]

const featureOptions = [
  { value: 'spicy', label: 'Острые', icon: '🌶' },
  { value: 'vegetarian', label: 'Вегетарианские', icon: '🌱' },
  { value: 'lactose-free', label: 'Безлактозные', icon: '🥛' },
]

const ingredientOptions = [
  { value: 'salmon', label: 'Лосось', icon: '🐟' },
  { value: 'eel', label: 'Угорь', icon: '🐠' },
  { value: 'tuna', label: 'Тунец', icon: '🍣' },
  { value: 'chicken', label: 'Куриное филе', icon: '🍗' },
]

export default function ProductsFilters() {
  const [category, setCategory] = useState('all')
  const [features, setFeatures] = useState([])
  const [ingredients, setIngredients] = useState([])

  const filtersState = useMemo(
    () => ({
      category,
      features,
      ingredients,
    }),
    [category, features, ingredients],
  )

  const isDev = import.meta.env.DEV

  return (
    <section aria-labelledby="roll-filters-title">
      <h2 id="roll-filters-title">Фильтры</h2>

      <div style={{ display: 'grid', gap: 20 }}>
        <FilterGroup
          type="single"
          name="roll-category"
          legend="Категории"
          options={categoryOptions}
          value={category}
          onChange={setCategory}
          renderItem={({ option, checked, disabled, inputProps }) => (
            <FilterChip inputProps={inputProps} checked={checked} disabled={disabled}>
              {option.label}
            </FilterChip>
          )}
        />

        <div style={{ display: 'flex', gap: 20, justifyContent: 'space-between' }}>
          <FilterGroup
            type="multiple"
            name="roll-features"
            legend="Особенности"
            options={featureOptions}
            value={features}
            onChange={setFeatures}
            renderItem={({ option, checked, disabled, inputProps }) => (
              <FilterChip inputProps={inputProps} checked={checked} disabled={disabled}>
                <span aria-hidden="true">{option.icon}</span>
                <span>{option.label}</span>
              </FilterChip>
            )}
          />

          <FilterGroup
            type="multiple"
            name="roll-ingredients"
            legend="Ингредиенты"
            options={ingredientOptions}
            value={ingredients}
            onChange={setIngredients}
            renderItem={({ option, checked, disabled, inputProps }) => (
              <FilterChip inputProps={inputProps} checked={checked} disabled={disabled}>
                <span aria-hidden="true">{option.icon}</span>
                <span>{option.label}</span>
              </FilterChip>
            )}
          />
        </div>
      </div>

      {isDev && <pre>{JSON.stringify(filtersState, null, 2)}</pre>}
    </section>
  )
}
