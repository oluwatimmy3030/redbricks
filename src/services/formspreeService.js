export function sendViaMailto(data) {
  const subject = encodeURIComponent('Redbricks Contact Form Submission');
  const body = Object.keys(data)
    .filter(key => data[key] !== '' && data[key] !== null && data[key] !== undefined && data[key] !== false)
    .map(key => `${key}: ${data[key]}`)
    .join('\n');

  const mailto = `mailto:yemipedro@yahoo.com?subject=${subject}&body=${body}`;
  window.location.href = mailto;
  return { ok: true };
}

export default sendViaMailto;