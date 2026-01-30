export const getMessages = async () => {
  const response = await fetch('http://localhost:8080/messages', {
    headers: {
      'X-ID': 'action',
    },
    next:{
      revalidate:5
    }
  });
  return response.json();
}