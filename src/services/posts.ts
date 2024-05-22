const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const getAllPosts = async () => {
  const response = await fetch(`${BASE_URL}/posts`)
  const data = await response.json()
  return data
}

export const deletePost = async (id: number) => {
  const response = await fetch(`${BASE_URL}/posts/${id}`, {
    method: 'DELETE',
  })
  const data = await response.json()
  return data
}

export const createPost = async (post: PartialPost) => {
  const response = await fetch(`${BASE_URL}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })
  const data = await response.json()
  return data
}