import { useState } from "react";
import toast from "react-hot-toast";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const loadingToast = toast.loading("Sending message...");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      toast.dismiss(loadingToast);

      if (response.ok) {
        toast.success("Message sent successfully! ✓");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error(data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Contact error:", error);

      toast.dismiss(loadingToast);

      toast.error("Unable to connect to server!");
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        {/* HEADING */}

        <div className="contact-heading">
          <span>GET IN TOUCH</span>

          <h2>
            Let's <strong>Connect</strong>
          </h2>

          <p>
            Have a project idea, opportunity, or just want to say hello? Feel
            free to get in touch with me.
          </p>
        </div>

        <div className="contact-content">
          {/* CONTACT INFORMATION */}

          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">@</div>

              <div>
                <span>Email</span>
                <h3>siluvaisiprin2604@gmail.com</h3>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">☎</div>

              <div>
                <span>Phone</span>
                <h3>+91 97902 87313</h3>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">⌖</div>

              <div>
                <span>Location</span>
                <h3>Tamil Nadu, India</h3>
              </div>
            </div>

            {/* SOCIAL LINKS */}

            <div className="contact-socials">
              <a
                href="https://github.com/LSiluvaiSiprin"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/siluvaisiprin"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* CONTACT FORM */}

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Your Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Your Email</label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Subject</label>

              <input
                type="text"
                name="subject"
                placeholder="Enter subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>

              <textarea
                name="message"
                rows="6"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit">Send Message →</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
