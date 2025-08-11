import '../../styles/dispatch.css'

export default function DispatchPrivacy() {
  return (
    <div className="dispatch-page">
      <h1>Privacy Policy</h1>
      <section>
        <p>
          We value your privacy and collect only the data necessary to operate the ZUP! Dispatch platform.
        </p>
        <ul className="dispatch-list">
          <li><strong>Data collected:</strong> phone, email, ride route and payment details.</li>
          <li><strong>Use:</strong> scheduling rides, billing, and aggregated analytics.</li>
          <li><strong>Legal compliance:</strong> integration with ANAF taxation systems and full GDPR adherence.</li>
          <li><strong>Retention:</strong> information is kept only as long as required for legal or operational purposes and can be deleted upon request.</li>
          <li><strong>Third‑party integrations:</strong> mapping, analytics and payment gateways process data under their own policies.</li>
        </ul>
      </section>
    </div>
  )
}
