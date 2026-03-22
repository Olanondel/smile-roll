import React, { forwardRef, useId } from 'react'
import { AnimatePresence } from 'framer-motion'
import { AnimatedListItem } from '@/components/ui/AnimatedListItem/AnimatedListItem.jsx'

function hasValue(array, value) {
  return Array.isArray(array) && array.includes(value)
}

function getNextMultipleValue(currentValue, optionValue) {
  const safeValue = Array.isArray(currentValue) ? currentValue : []

  if (safeValue.includes(optionValue)) {
    return safeValue.filter((item) => item !== optionValue)
  }

  return [...safeValue, optionValue]
}

const FilterGroup = forwardRef(function FilterGroup(
  {
    type = 'single',
    name,
    legend,
    options,
    value,
    onChange,
    renderItem,
    disabled = false,
    className,
    direction = 'row',
    description,
    describedBy,
    itemClassName,
    ...props
  },
  ref,
) {
  const generatedName = useId()
  const fallbackName = `filter-group-${generatedName}`
  const groupName = name || fallbackName

  const descriptionId = useId()
  const resolvedDescribedBy = describedBy || (description ? descriptionId : undefined)

  const isMultiple = type === 'multiple'

  const isChecked = (optionValue) => {
    if (isMultiple) {
      return hasValue(value, optionValue)
    }

    return value === optionValue
  }

  const handleInputChange = (option) => {
    if (disabled) return

    if (isMultiple) {
      onChange?.(getNextMultipleValue(value, option.value), option)
      return
    }

    if (value !== option.value) {
      onChange?.(option.value, option)
    }
  }

  return (
    <fieldset
      ref={ref}
      className={className}
      aria-describedby={resolvedDescribedBy}
      disabled={disabled}
      {...props}
    >
      {legend ? <legend>{legend}</legend> : null}

      {description ? (
        <div id={descriptionId} style={srOnlyStyles}>
          {description}
        </div>
      ) : null}

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 12,
          flexDirection: direction === 'column' ? 'column' : 'row',
        }}
      >
        <AnimatePresence>
          {options.map((option) => {
            const checked = isChecked(option.value)
            const optionDisabled = disabled || Boolean(option.disabled)
            const inputType = isMultiple ? 'checkbox' : 'radio'
            const optionId = `${groupName}-${String(option.value)}`

            const inputProps = {
              id: optionId,
              type: inputType,
              name: groupName,
              value: String(option.value),
              checked,
              disabled: optionDisabled,
              onChange: () => handleInputChange(option),
              'aria-describedby': option.description ? `${optionId}-description` : undefined,
            }

            return (
              <AnimatedListItem key={option.value}>
                <div className={itemClassName}>
                  {renderItem({
                    option,
                    checked,
                    disabled: optionDisabled,
                    inputProps,
                  })}

                  {option.description ? (
                    <div id={`${optionId}-description`} style={srOnlyStyles}>
                      {option.description}
                    </div>
                  ) : null}
                </div>
              </AnimatedListItem>
            )
          })}
        </AnimatePresence>
      </div>
    </fieldset>
  )
})

const srOnlyStyles = {
  position: 'absolute',
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: 0,
}

export default FilterGroup
