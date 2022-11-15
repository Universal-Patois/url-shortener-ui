export const getUrls = async () => {
  return await fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
      .then(data => data.urls)
}

export const postUrl = async (url, title) => {
    const response = await fetch('http://localhost:3001/api/v1/urls', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        long_url: url,
        title: title,
      }),
    })
    console.log(response)
    return response.json()
  }
