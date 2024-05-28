import { contactInfo, socialMedia } from "@/Data/contactData";
import ContactForm from "@/components/ContactForm";
import PageBanner from "@/components/PageBanner";
import Link from "next/link";

export const metadata = {
  title: "Contact -  Sultan Ahmed Portfolio Website",
};

const page = () => {
  return (
    <main>
      <PageBanner pageName={"Contact Us"} />
      {/* Contact Page Area start */}
      <section className="contact-page pt-40 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="contact-page-content rmb-55 wow fadeInUp delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title mb-15">Get In Touch</span>
                  <h2>
                    Let’s Talk For your <span>Next Projects</span>
                  </h2>
                  <p>
                    Hi, if you have any project or have any question please feel
                    free and contact with me
                  </p>
                </div>
                <h6>Contact info</h6>
                <div className="widget_contact_info mb-35">
                  <ul>
                    <li>
                      <i className="far fa-map-marker-alt" />{" "}
                      {contactInfo?.address}
                    </li>
                    <li>
                      <i className="far fa-envelope" />{" "}
                      <Link href={`mailto:${contactInfo?.email}`}>
                        {contactInfo?.email}
                      </Link>
                    </li>
                    <li>
                      <i className="far fa-phone" />{" "}
                      <Link href={`callto:${contactInfo?.phone}`}>
                        {contactInfo?.phone}
                      </Link>
                    </li>
                  </ul>
                </div>
                <h5>Follow Me</h5>
                <div className="social-style-one mt-10">
                  <Link target="_blank" href={socialMedia?.linkedin}>
                    <i className="fab fa-linkedin-in" />
                  </Link>
                  <Link target="_blank" href={socialMedia?.whatsapp}>
                    <i className="fab fa-whatsapp" />
                  </Link>
                  <Link target="_blank" href={socialMedia?.x}>
                    <i className="fab fa-twitter" />
                  </Link>

                  <Link target="_blank" href={socialMedia?.github}>
                    <i className="fab fa-instagram" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="contact-page-form contact-form form-style-one wow fadeInUp delay-0-2s">
                <ContactForm />
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
      {/* Contact Page Area end */}
      {/* Location Map Area Start */}
      <div className="contact-page-map pb-120 rpb-90 wow fadeInUp delay-0-2s d-none">
        <div className="container">
          <div className="our-location">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m12!1m10!1m3!1d142190.2862584524!2d-74.01298319978558!3d40.721725351435126!2m1!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1663473911885!5m2!1sen!2sbd"
              style={{ border: 0, width: "100%" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </main>
  );
};
export default page;
