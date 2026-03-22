import React from 'react'

import { FilterChip, FilterGroup } from '@/features/filters/index.js'
import { CATEGORY_OPTIONS } from '@/shared/config/categories.js'

export default function ProductsFilters({
  category,
  setCategory,
  features,
  setFeatures,
  ingredients,
  setIngredients,
  resetFilters,
  featureOptions = [],
  ingredientOptions = [],
}) {
  const isResetDisabled = category === 'all' && !features.length && !ingredients.length

  return (
    <section aria-labelledby="roll-filters-title" style={{ paddingTop: 45, marginBottom: 45 }}>
      <div style={{ display: 'grid', gap: 20 }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 30,
          }}
        >
          <FilterGroup
            type="single"
            name="roll-category"
            options={Object.values(CATEGORY_OPTIONS)}
            value={category}
            onChange={setCategory}
            renderItem={({ option, checked, disabled, inputProps }) => (
              <FilterChip inputProps={inputProps} checked={checked} disabled={disabled}>
                {option.label}
              </FilterChip>
            )}
          />

          <button
            type="button"
            disabled={isResetDisabled}
            className="button"
            onClick={resetFilters}
          >
            Сбросить фильтры
          </button>
        </div>

        <div
          style={{
            display: 'flex',
            gap: 20,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <FilterGroup
            type="multiple"
            name="roll-features"
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
    </section>
  )
}
