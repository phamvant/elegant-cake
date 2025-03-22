function Contact() {
  return (
    <section className="py-10 bg-blush text-center">
      <h2 className="text-4xl mb-6">Contact Us</h2>
      <form className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          placeholder="Name"
          required
          className="w-full p-3 border border-gold rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
        />
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full p-3 border border-gold rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
        />
        <textarea
          placeholder="Your Message"
          required
          className="w-full p-3 border border-gold rounded-md focus:outline-none focus:ring-2 focus:ring-gold h-32"
        ></textarea>
        <button
          type="submit"
          className="bg-gold text-white py-2 px-6 rounded-md hover:bg-opacity-80 transition-colors"
        >
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;
