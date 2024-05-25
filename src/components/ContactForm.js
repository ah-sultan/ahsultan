
"use client"
const ContactForm = () => {
  return (
    <form
      id="contactForm"
      className="contactForm"
      name="contactForm"
      action="assets/php/form-process.php"
      method="post"
    >
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              defaultValue=""
              placeholder="Richard D. Hammond"
              required=""
              data-error="Please enter your Name"
            />
            <label htmlFor="name" className="for-icon">
              <i className="far fa-user" />
            </label>
            <div className="help-block with-errors" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              defaultValue=""
              placeholder="support@gmail.com"
              required=""
              data-error="Please enter your Email"
            />
            <label htmlFor="email" className="for-icon">
              <i className="far fa-envelope" />
            </label>
            <div className="help-block with-errors" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="phone_number">Phone Number</label>
            <input
              type="text"
              id="phone_number"
              name="phone_number"
              className="form-control"
              defaultValue=""
              placeholder="+880 (123) 456 88"
              required=""
              data-error="Please enter your Phone Number"
            />
            <label htmlFor="phone_number" className="for-icon">
              <i className="far fa-phone" />
            </label>
            <div className="help-block with-errors" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="form-control"
              defaultValue=""
              placeholder="Subject"
              required=""
              data-error="Please enter your Subject"
            />
            <label htmlFor="subject" className="for-icon">
              <i className="far fa-text" />
            </label>
            <div className="help-block with-errors" />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              className="form-control"
              rows={4}
              placeholder="write message"
              required=""
              data-error="Please enter your Message"
              defaultValue={""}
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group mb-0">
            <button type="submit" className="theme-btn">
              Send Us Message <i className="far fa-angle-right" />
            </button>
            <div id="msgSubmit" className="hidden" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
