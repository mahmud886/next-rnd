

export async function getItem() {
  const res = await fetch('http://localhost:3000/api/data', { cache: 'force-cache' })
  return res.json()
}