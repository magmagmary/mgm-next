export const getMessages = async () => {
  const response = await fetch('http://localhost:8080/messages', {
    headers: {
      'X-ID': 'action',
    },
    cache:'force-cache'
  });
  return response.json();
}