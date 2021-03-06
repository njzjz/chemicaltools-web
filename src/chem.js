export function chemicalname (name) {
  name = name.replace(/[\d]/g, function (num) {
    return '<sub>' + num + '</sub>'
  })
  name = name.replace(/(\+|-)/g, function (num) {
    return '<sup>' + num + '</sup>'
  })
  name = name.replace(/<sub>[\d]<\/sub><sup>(\+|-)<\/sup>/g, function (num) {
    return '<sup>' + num.replace(/<\/?su(b|p)>/g, '') + '</sup>'
  })
  return name
}

export function scicount (value, num) {
  if (value === 0) return value
  const p = Math.floor(Math.log(Math.abs(value)) / Math.LN10)
  const n = value * Math.pow(10, -p)
  return n.toFixed(num) + (p === 0 ? '' : `×10<sup>${p}</sup>`)
}
