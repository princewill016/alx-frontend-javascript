export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string') return '';
  const parts = [];
  for (const val of set) {
    if (typeof val === 'string' && val.startsWith(startString)) {
      parts.push(val.slice(startString.length));
    }
  }
  return parts.join('-');
}

