import { useMemo, useState } from 'react'
import styles from './OrdersHistory.module.css'

const ORDER_STATUS = {
  all: 'all',
  new: 'new',
  confirmed: 'confirmed',
  cooking: 'cooking',
  ready: 'ready',
  completed: 'completed',
  cancelled: 'cancelled',
}

const ORDER_STATUS_LABELS = {
  all: 'Все',
  new: 'Новые',
  confirmed: 'Подтвержденные',
  cooking: 'Готовятся',
  ready: 'Готовы',
  completed: 'Завершенные',
  cancelled: 'Отмененные',
}

const ORDER_STATUS_BADGE_LABELS = {
  new: 'Новый',
  confirmed: 'Подтвержден',
  cooking: 'Готовится',
  ready: 'Готов',
  completed: 'Завершен',
  cancelled: 'Отменен',
}

const ORDER_STATUS_CLASSES = {
  new: styles.statusNew,
  confirmed: styles.statusConfirmed,
  cooking: styles.statusCooking,
  ready: styles.statusReady,
  completed: styles.statusCompleted,
  cancelled: styles.statusCancelled,
}

const PAYMENT_METHOD_LABELS = {
  cash: 'Наличными',
  card: 'Картой',
}

const DELIVERY_TYPE_LABELS = {
  pickup: 'Самовывоз',
  delivery: 'Доставка',
}

const DELIVERY_DAY_LABELS = {
  today: 'Сегодня',
  tomorrow: 'Завтра',
}

const formatFirestoreDate = (timestamp) => {
  if (!timestamp?.seconds) return '—'

  const date = new Date(timestamp.seconds * 1000)

  return new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}

const getItemsCount = (items = []) => items.reduce((total, item) => total + (item.quantity || 0), 0)

export const OrdersHistory = ({ orders = [], onRepeatOrder }) => {
  const [activeStatus, setActiveStatus] = useState(ORDER_STATUS.all)
  const [openedOrderIds, setOpenedOrderIds] = useState([])

  const filteredOrders = useMemo(() => {
    if (activeStatus === ORDER_STATUS.all) return orders
    return orders.filter((order) => order.status === activeStatus)
  }, [orders, activeStatus])

  const toggleOrder = (orderId) => {
    setOpenedOrderIds((prev) =>
      prev.includes(orderId) ? prev.filter((id) => id !== orderId) : [...prev, orderId],
    )
  }

  const handleRepeatOrder = (order) => {
    if (!onRepeatOrder) return
    onRepeatOrder(order)
  }

  if (!orders.length) {
    return (
      <div className={styles.empty}>
        <div className={styles.emptyTitle}>История заказов пуста</div>
        <div className={styles.emptyText}>Здесь будут отображаться все оформленные заказы</div>
      </div>
    )
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.filters}>
        {Object.entries(ORDER_STATUS_LABELS).map(([value, label]) => (
          <button
            key={value}
            type="button"
            className={[styles.filterButton, activeStatus === value && styles.filterButtonActive]
              .filter(Boolean)
              .join(' ')}
            onClick={() => setActiveStatus(value)}
          >
            {label}
          </button>
        ))}
      </div>

      {!filteredOrders.length ? (
        <div className={styles.emptyFiltered}>По выбранному фильтру заказов нет</div>
      ) : (
        <div className={styles.list}>
          {filteredOrders.map((order) => {
            const isOpened = openedOrderIds.includes(order.id)
            const statusLabel = ORDER_STATUS_BADGE_LABELS[order.status] || order.status || '—'
            const statusClass = ORDER_STATUS_CLASSES[order.status] || ''
            const itemsCount = getItemsCount(order.items)

            return (
              <article key={order.id} className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.cardTopLeft}>
                    <div className={styles.orderTitleRow}>
                      <h3 className={styles.orderTitle}>Заказ #{order.id.slice(0, 8)}</h3>

                      <span className={`${styles.status} ${statusClass}`}>{statusLabel}</span>
                    </div>

                    <div className={styles.orderDate}>{formatFirestoreDate(order.createdAt)}</div>
                  </div>

                  <div className={styles.cardTopRight}>
                    <div className={styles.totalBox}>
                      <span className={styles.totalLabel}>Итого</span>
                      <strong className={styles.totalValue}>{order.total} грн</strong>
                    </div>
                  </div>
                </div>

                <div className={styles.summaryGrid}>
                  <div className={styles.summaryItem}>
                    <span className={styles.summaryLabel}>Клиент</span>
                    <span className={styles.summaryValue}>{order.customer?.firstName || '—'}</span>
                  </div>

                  <div className={styles.summaryItem}>
                    <span className={styles.summaryLabel}>Телефон</span>
                    <span className={styles.summaryValue}>{order.customer?.phone || '—'}</span>
                  </div>

                  <div className={styles.summaryItem}>
                    <span className={styles.summaryLabel}>Доставка</span>
                    <span className={styles.summaryValue}>
                      {DELIVERY_TYPE_LABELS[order.delivery?.type] || '—'}
                    </span>
                  </div>

                  <div className={styles.summaryItem}>
                    <span className={styles.summaryLabel}>Время</span>
                    <span className={styles.summaryValue}>
                      {DELIVERY_DAY_LABELS[order.delivery?.day] || order.delivery?.day || '—'}
                      {' · '}
                      {order.delivery?.time || '—'}
                    </span>
                  </div>

                  <div className={styles.summaryItem}>
                    <span className={styles.summaryLabel}>Оплата</span>
                    <span className={styles.summaryValue}>
                      {PAYMENT_METHOD_LABELS[order.payment?.method] || '—'}
                    </span>
                  </div>

                  <div className={styles.summaryItem}>
                    <span className={styles.summaryLabel}>Товаров</span>
                    <span className={styles.summaryValue}>{itemsCount}</span>
                  </div>
                </div>

                <div className={styles.previewProducts}>
                  {(order.items || []).slice(0, 2).map((item) => (
                    <div key={`${order.id}-${item.id}`} className={styles.previewProduct}>
                      <img className={styles.previewImage} src={item.image} alt={item.title} />

                      <div className={styles.previewInfo}>
                        <div className={styles.previewTitle}>{item.title}</div>
                        <div className={styles.previewMeta}>
                          {item.quantity} × {item.price} грн
                        </div>
                      </div>
                    </div>
                  ))}

                  {order.items?.length > 2 ? (
                    <div className={styles.moreProducts}>+ ещё {order.items.length - 2}</div>
                  ) : null}
                </div>

                <div className={styles.actions}>
                  <button
                    type="button"
                    className={styles.secondaryButton}
                    onClick={() => toggleOrder(order.id)}
                  >
                    {isOpened ? 'Скрыть детали' : 'Подробнее'}
                  </button>

                  <button
                    type="button"
                    className={styles.primaryButton}
                    onClick={() => handleRepeatOrder(order)}
                  >
                    Повторить заказ
                  </button>
                </div>

                {isOpened ? (
                  <div className={styles.details}>
                    <div className={styles.section}>
                      <div className={styles.sectionTitle}>Состав заказа</div>

                      <div className={styles.productsList}>
                        {order.items?.map((item) => (
                          <div key={`${order.id}-${item.id}-details`} className={styles.productRow}>
                            <div className={styles.productMain}>
                              <img
                                className={styles.productImage}
                                src={item.image}
                                alt={item.title}
                              />

                              <div className={styles.productInfo}>
                                <div className={styles.productTitle}>{item.title}</div>
                                <div className={styles.productSub}>
                                  {item.weight ? `${item.weight} · ` : ''}
                                  {item.price} грн
                                </div>
                              </div>
                            </div>

                            <div className={styles.productQty}>× {item.quantity}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className={styles.detailsGrid}>
                      <div className={styles.infoBox}>
                        <div className={styles.infoTitle}>Дополнительно</div>
                        <div className={styles.infoList}>
                          <div>
                            <span className={styles.infoLabel}>Палочки:</span>{' '}
                            {order.extras?.chopsticks ?? 0}
                          </div>
                          <div>
                            <span className={styles.infoLabel}>Учебные палочки:</span>{' '}
                            {order.extras?.trainingChopsticks ?? 0}
                          </div>
                          <div>
                            <span className={styles.infoLabel}>Не звонить:</span>{' '}
                            {order.delivery?.doNotCall ? 'Да' : 'Нет'}
                          </div>
                          <div>
                            <span className={styles.infoLabel}>Оставить у двери:</span>{' '}
                            {order.delivery?.leaveAtDoor ? 'Да' : 'Нет'}
                          </div>
                        </div>
                      </div>

                      <div className={styles.infoBox}>
                        <div className={styles.infoTitle}>Информация для курьера</div>
                        <div className={styles.infoList}>
                          <div>
                            <span className={styles.infoLabel}>Кот:</span>{' '}
                            {order.pets?.hasCat ? 'Да' : 'Нет'}
                          </div>
                          <div>
                            <span className={styles.infoLabel}>Собака:</span>{' '}
                            {order.pets?.hasDog ? 'Да' : 'Нет'}
                          </div>
                          <div>
                            <span className={styles.infoLabel}>Комментарий:</span>{' '}
                            {order.comment || '—'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </article>
            )
          })}
        </div>
      )}
    </div>
  )
}
