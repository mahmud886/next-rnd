


export async function getItem() {
  const res = await fetch('http://localhost:3000/api/data', { cache: 'force-cache' })
  return res.json()
}

export async function getJokes() {
  const res = await fetch('https://api.chucknorris.io/jokes/random', { next: { revalidate: 5 } })
  return res.json()
}