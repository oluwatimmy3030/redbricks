const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xbgoppae';

export async function sendToFormspree(data) {
  const formData = new FormData();
  Object.keys(data).forEach(key => {
    const value = data[key];
    if (value !== '' && value !== null && value !== undefined && value !== false) {
      formData.append(key, value);
    }
  });

  // Add honeypot field to prevent bots
  formData.append('submit_time', Date.now().toString());

  // Tell Formspree to send an auto-confirmation back to the user
  if (data.email) {
    formData.append('_reply_to', data.email);
  }

  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || error.error || 'Submission failed');
  }

  return await response.json();
}

export default sendToFormspree;