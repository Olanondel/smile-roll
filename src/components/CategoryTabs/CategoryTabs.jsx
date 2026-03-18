import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import './CategoryTabs.css'
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../routes/routes.js'
import { CATEGORIES, CATEGORIES_SLUGS } from '../../constants/categories.js'

function RollsIcon({ active = false }) {
  return (
    <svg viewBox="0 0 64 64" className="catIconSvg" aria-hidden="true">
      <rect
        x="10"
        y="10"
        width="44"
        height="44"
        rx="14"
        fill={active ? '#F5F5F5' : '#F3F3F3'}
        stroke="#8F8F8F"
        strokeWidth="2.5"
      />
      <ellipse cx="32" cy="31" rx="15" ry="10.5" fill="#D9D9D9" stroke="#8F8F8F" strokeWidth="2" />
      <ellipse cx="32" cy="31" rx="9.5" ry="6.2" fill="#FF6A2A" />
    </svg>
  )
}

function SushiIcon() {
  return (
    <svg viewBox="0 0 64 64" className="catIconSvg" aria-hidden="true">
      <path
        d="M12 36c6-10 16-16 27-16 7 0 12 1 17 4-3 9-8 16-16 20-10 5-20 4-28-8Z"
        fill="#BDBDBD"
        stroke="#8F8F8F"
        strokeWidth="2.5"
      />
      <path d="M16 33c7-8 16-12 26-12 5 0 9 1 13 3-3 6-8 11-14 15-8 4-16 4-25-6Z" fill="#D8D8D8" />
    </svg>
  )
}

function SetIcon() {
  return (
    <svg viewBox="0 0 64 64" className="catIconSvg" aria-hidden="true">
      <path
        d="M11 39c7-11 17-17 28-17 6 0 11 1 15 4-2 8-7 15-15 19-10 5-19 4-28-6Z"
        fill="#BDBDBD"
        stroke="#8F8F8F"
        strokeWidth="2.5"
      />
      <path
        d="M23 15h18c4 0 7 3 7 7v13H30c-4 0-7-3-7-7V15Z"
        fill="#E6E6E6"
        stroke="#8F8F8F"
        strokeWidth="2.5"
      />
      <circle cx="39" cy="22" r="5.5" fill="#FFFFFF" stroke="#8F8F8F" strokeWidth="2" />
    </svg>
  )
}

function BowlIcon() {
  return (
    <svg viewBox="0 0 64 64" className="catIconSvg" aria-hidden="true">
      <path
        d="M13 29c3-8 12-13 19-13s16 5 19 13"
        fill="none"
        stroke="#8F8F8F"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M12 31h40c0 12-9 21-20 21s-20-9-20-21Z"
        fill="#E7E7E7"
        stroke="#8F8F8F"
        strokeWidth="2.5"
      />
      <circle cx="23" cy="25" r="2.2" fill="#8F8F8F" />
      <circle cx="32" cy="22" r="2.2" fill="#8F8F8F" />
      <circle cx="41" cy="25" r="2.2" fill="#8F8F8F" />
    </svg>
  )
}

function DrinkIcon() {
  return (
    <svg viewBox="0 0 64 64" className="catIconSvg" aria-hidden="true">
      <path
        d="M22 15h20l-2 31a6 6 0 0 1-6 5h-4a6 6 0 0 1-6-5l-2-31Z"
        fill="#E7E7E7"
        stroke="#8F8F8F"
        strokeWidth="2.5"
      />
      <path d="M24 22h16" stroke="#8F8F8F" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M37 14l7-5" stroke="#8F8F8F" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

function SauceIcon() {
  return (
    <svg viewBox="0 0 64 64" className="catIconSvg" aria-hidden="true">
      <ellipse cx="32" cy="42" rx="15" ry="9" fill="#E7E7E7" stroke="#8F8F8F" strokeWidth="2.5" />
      <path
        d="M17 42V32c0-6 5-11 11-11h8c6 0 11 5 11 11v10"
        fill="none"
        stroke="#8F8F8F"
        strokeWidth="2.5"
      />
      <path
        d="M43 20c0-5 4-9 9-9"
        fill="none"
        stroke="#8F8F8F"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M45 25c2-2 5-3 8-3"
        fill="none"
        stroke="#8F8F8F"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

const categoryIcons = {
  [CATEGORIES_SLUGS.rolls]: RollsIcon,
  [CATEGORIES_SLUGS.sushi]: SushiIcon,
  [CATEGORIES_SLUGS.sets]: SetIcon,
  [CATEGORIES_SLUGS.bowls]: BowlIcon,
  [CATEGORIES_SLUGS.drinks]: DrinkIcon,
  [CATEGORIES_SLUGS.sauces]: SauceIcon,
}

function CategoryItem({ item, activeId, onChange }) {
  const active = item.id === activeId
  const Icon = categoryIcons[item.slug]

  return (
    <NavLink
      to={`${ROUTES.CATEGORY}/${item.slug}`}
      className={[
        'categoryTab',
        active ? 'is-active' : '',
        item.disabled ? 'is-disabled' : '',
      ].join(' ')}
      onClick={() => !item.disabled && onChange(item.id)}
    >
      <span className="categoryTab__iconWrap">
        <Icon active={active} />
      </span>

      <span className="categoryTab__label">{item.title}</span>
    </NavLink>
  )
}

export default function CategoryTabs({ activeId = 'rolls', onChange = () => {}, ...props }) {
  return (
    <section className="categoryTabsSection" {...props}>
      <div className="categoryTabsContainer desktopOnly">
        <div className="categoryTabsRow">
          {CATEGORIES?.map((item) => (
            <CategoryItem key={item.id} item={item} activeId={activeId} onChange={onChange} />
          ))}
        </div>
      </div>

      <div className="mobileOnly">
        <Swiper
          slidesPerView="auto"
          spaceBetween={8}
          freeMode={true}
          className="categoryTabsSwiper"
        >
          {CATEGORIES?.map((item) => (
            <SwiperSlide key={item.id} className="categoryTabsSlide">
              <CategoryItem item={item} activeId={activeId} onChange={onChange} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
