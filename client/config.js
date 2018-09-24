module.exports = {
  api:
    process.env.REACT_STATIC_ENV === 'production'
      ? 'http://xxx'
      : 'http://localhost:3001',
  docRepo: 'ncourse'
}
