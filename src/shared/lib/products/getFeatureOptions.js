export function getFeatureOptions(products, featureDictionary) {
  const ids = new Set()

  products.forEach((product) => {
    product.features?.forEach((feature) => {
      if (feature?.id) ids.add(feature.id)
    })
  })

  return Array.from(ids)
    .map((id) => featureDictionary[id])
    .filter(Boolean)
    .map((item) => ({
      value: item.id,
      label: item.label,
      icon: item.icon,
    }))
}
