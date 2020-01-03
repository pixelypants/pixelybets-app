export function prefix(location, ...prefixes) {
  return prefixes.some(
    prefix => (
      location.href.indexOf(`${location.origin}/${prefix}`) !== -1
    )
  )
}

export function navbar(location) {
  return true
}

export function betslip(location) {
  return true
}

export function sports(location) {
  return prefix(location, 'sports')
}

export function racing(location) {
  return prefix(location, 'racing')
}
