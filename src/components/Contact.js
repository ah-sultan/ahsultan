import Link from "next/link";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section
      id="contact"
      className="contact-area pt-95 pb-130 rpt-70 rpb-100 rel z-1"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="contact-content-part pt-5 rpt-0 rmb-55 wow fadeInUp delay-0-2s">
              <div className="section-title mb-40">
                <span className="sub-title mb-15">Get In Touch</span>
                <h2>
                  Let&apos;s talk about <span>next projects</span>
                </h2>
                <p>
                  If you have any questions or would like to collaborate on this
                  project, please feel free to contact me.
                </p>
                <h6>
                  <b>You can talk about:</b>
                </h6>
              </div>
              <ul className="list-style-two mb-4">
                <li>Website design or Development</li>
                <li>UI/UX Design</li>
                <li>Fix bug or add features</li>
              </ul>
              <hr />
              <p>
                <b>
                  Or, if you have any questions, feel free to contact me. I&apos;m
                  ready to help!
                </b>
              </p>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="contact-form contact-form-wrap form-style-one wow fadeInUp delay-0-4s">
              <ContactForm/>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lines">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
};
export default Contact;


