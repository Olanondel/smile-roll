import { forwardRef, useId } from 'react'
import { useFormContext } from 'react-hook-form'
import clsx from 'clsx'
import styles from './Input.module.css'

function getErrorMessage(error) {
  if (!error || typeof error !== 'object') return undefined

  if ('message' in error && typeof error.message === 'string') {
    return error.message
  }

  return undefined
}

function InputInner(props, ref) {
  const {
    name,
    label,
    hint,
    required,
    type = 'text',
    containerClassName,
    inputClassName,
    id,
    ...rest
  } = props

  const generatedId = useId()
  const inputId = id ?? generatedId

  const {
    register,
    formState: { errors },
  } = useFormContext()

  const fieldError = errors[name]
  const errorMessage = getErrorMessage(fieldError)

  const describedBy =
    [hint ? `${inputId}-hint` : null, errorMessage ? `${inputId}-error` : null]
      .filter(Boolean)
      .join(' ') || undefined

  const registration = register(name)

  return (
    <div className={clsx(styles.field, containerClassName)}>
      {label ? (
        <label htmlFor={inputId} className={styles.label}>
          <span>{label}</span>
          {required ? <span className={styles.requiredMark}>*</span> : null}
        </label>
      ) : null}

      <input
        id={inputId}
        type={type}
        aria-invalid={Boolean(errorMessage)}
        aria-describedby={describedBy}
        className={clsx(
          styles.input,
          errorMessage && styles.inputError,
          rest.disabled && styles.inputDisabled,
          inputClassName,
        )}
        {...registration}
        {...rest}
        ref={(node) => {
          registration.ref(node)

          if (typeof ref === 'function') {
            ref(node)
          } else if (ref) {
            ref.current = node
          }
        }}
      />

      {hint && !errorMessage ? (
        <p id={`${inputId}-hint`} className={styles.hint}>
          {hint}
        </p>
      ) : null}

      {errorMessage ? (
        <p id={`${inputId}-error`} className={styles.error}>
          {errorMessage}
        </p>
      ) : null}
    </div>
  )
}

export const Input = forwardRef(InputInner)
