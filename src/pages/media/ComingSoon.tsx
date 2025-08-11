import '../../styles/media.css'

export default function MediaComingSoon() {
  return (
    <div className="media-page">
      <h1>ZUP! Media is coming soon.</h1>
      <p>But we're already working with bold brands. Get in touch below.</p>
      <form
        className="media-form"
        action="https://formsubmit.co/contact@zup.digital"
        method="POST"
      >
        <input type="text" name="name" placeholder="Your full name" required />
        <input type="text" name="subject" placeholder="Project topic or idea" required />
        <textarea
          name="message"
          placeholder="Tell us what you need..."
          rows={5}
          required
        ></textarea>
        <button type="submit">Send message</button>
      </form>
    </div>
  )
}
