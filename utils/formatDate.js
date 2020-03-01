const formatDate = (pubDate) => {
  if (!pubDate) return ''
  const date = new Date(pubDate)
  const prettyDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }).format(date)

  return prettyDate
}

export default formatDate
