import { useState } from "react";

function OrderForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cakeId, setCakeId] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderDetails = {
      name,
      email,
      cakeId,
      quantity,
      message,
    };

    // Send order details to Telegram
    const telegramChatId = "YOUR_TELEGRAM_CHAT_ID"; // Replace with your chat ID
    const telegramBotToken = "YOUR_TELEGRAM_BOT_TOKEN"; // Replace with your bot token

    const telegramMessage = `
      New Order:
      Name: ${orderDetails.name}
      Email: ${orderDetails.email}
      Cake ID: ${orderDetails.cakeId}
      Quantity: ${orderDetails.quantity}
      Message: ${orderDetails.message}
    `;

    const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${telegramChatId}&text=${encodeURIComponent(
      telegramMessage
    )}`;

    try {
      const response = await fetch(url);
      if (response.ok) {
        alert("Order sent successfully!");
        // Reset form fields
        setName("");
        setEmail("");
        setCakeId("");
        setQuantity(1);
        setMessage("");
      } else {
        alert("Failed to send order. Please try again.");
      }
    } catch (error) {
      console.error("Error sending order:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">Order Your Cake</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Cake ID
        </label>
        <input
          type="text"
          value={cakeId}
          onChange={(e) => setCakeId(e.target.value)}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Quantity
        </label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min="1"
          required
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Message (optional)
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 bg-gold text-white rounded-md hover:bg-brown transition-colors"
      >
        Place Order
      </button>
    </form>
  );
}

export default OrderForm;
