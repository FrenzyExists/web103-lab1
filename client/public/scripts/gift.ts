const renderGift = async () => {
  let link = window.location.href.split("/").pop() || "-1";
  const reqID = parseInt(link);

  try {
    const response = await fetch("/gifts");
    const data = await response.json();

    const giftContent = document.getElementById("gift-content");

    let g = data?.find((gift) => gift.id === reqID);
    console.log(g);

    if (g) {
      // I have no idea why this is taking javascript over typescript
      document.getElementById("image").src = g.image ?? "";
      document.getElementById("name").textContent = g.name ?? "Unknown Gift";
      document.getElementById("submittedBy").textContent =
        "Submitted by: " + (g.submittedBy ?? "Anonymous");
      document.getElementById("pricePoint").textContent =
        "Price: " + (g.pricePoint ?? "Not available");
      document.getElementById("audience").textContent =
        "Great For: " + (g.audience ?? "Everyone");
      document.getElementById("description").textContent =
        g.description ?? "No description available";
      document.title = `UnEarthed - ${g.name ?? "Gift"}`;
    } else {
      const message = document.createElement("h2");
      message.textContent = "No Gifts Available 😞";
      giftContent?.appendChild(message);
    }
  } catch (error) {
    console.error("Error fetching gift data:", error);
  }
};

const requestedUrl = parseInt(window.location.href.split("/").pop() || "-1");

if (!requestedUrl || requestedUrl == -1) {
  window.location.href = "../404.html";
} else {
  renderGift();
}
