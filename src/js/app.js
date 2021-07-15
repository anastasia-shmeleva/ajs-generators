export default function canIterate(data) {
  if (data === null || data === undefined) {
    return false;
  }
  return typeof data[Symbol.iterator] === 'function';
}

console.log(canIterate(null));
