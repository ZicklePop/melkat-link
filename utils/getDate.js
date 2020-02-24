const getDate = (pubDate) => {
  if (!pubDate) return { isoDate: '', prettyDate: '' }
  const date = new Date(pubDate)
  const isoDate = date.toISOString()
  const prettyDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }).format(date)

  return { isoDate, prettyDate }
}

export default getDate
