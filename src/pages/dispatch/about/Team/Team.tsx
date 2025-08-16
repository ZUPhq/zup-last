import './Team.css';

const teamMembers = [
  {
    name: "Ciobotariu Iustin",
    role: "Founder & UI/UX Designer",
    description: "Student at National College of Informatics",
    image: "/team-iustin.jpg",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Arion Matei Gabriel",
    role: "Founder & Sales Manager",
    description: "Student at National College of Informatics",
    image: "/team-matei.jpg",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Vrinceanu Andrei",
    role: "Founder & UI/UX Designer",
    description: "Student at National College of Informatics",
    image: "/team-andrei.jpg",
    linkedin: "#",
    instagram: "#",
  },
];

export default function Team() {
  return (
    <section className="team-section">
      <div className="section-container">
        <div className="team-title-wrapper">
          <h2 className="team-heading">Meet our team</h2>
          <p className="team-intro">
            S.C. ZUP TRANSPORT S.R.L. was founded by three lifelong friends — <strong>Ciobotariu Iustin, Arion Matei, and Vrinceanu Andrei</strong> — united by a shared vision and years of collaboration. Their journey began in early school days and grew stronger through joint volunteer work in Interact Camena and Rotary District 2241. This foundation of trust, innovation, and community spirit led them to create <strong>ZUP!</strong>, a modern taxi dispatch platform built entirely in-house. <strong>ZUP!</strong> merges cutting-edge technology with high service standards, aiming to deliver a taxi experience that is transparent, safe, and efficient — both for passengers and drivers.
          </p>
        </div>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <img src={member.image} alt={member.name} className="team-photo" />
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-description">{member.description}</p>
              <div className="team-socials">
                <a href={member.linkedin}><img src="/icon-linkedin.svg" alt="LinkedIn" /></a>
                <a href={member.instagram}><img src="/icon-instagram.svg" alt="Instagram" /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}