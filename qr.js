function generateQR() {
  const input = document.getElementById("qrText").value;
  const qrImage = document.getElementById("qrImage");

  if (!input.trim()) {
    alert("Please enter text or a link!");
    return;
  }

  const qrAPI = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(input)}`;
  qrImage.src = qrAPI;
}
