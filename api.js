async function handleBugSend(chatId, selectedBug) {
  const res = await fetch(`http://206.189.102.230/kipopapi?chatId=${encodeURIComponent(chatId)}&type=${selectedBug}`);
  if (!res.ok) throw new Error("Gagal menghubungi server");
  return await res.json();
}

