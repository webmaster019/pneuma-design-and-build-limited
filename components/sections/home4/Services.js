import Link from "next/link";

export default function Services() {
  return (
    <>
      {/* service-from */}
      <section className="service__from four">
        <div className="auto_container">
          <div className="from__one">
            <div className="from__left">
              <h3>Leave a message</h3>
            </div>
            <div className="from__logo">
              <figure className="image">
                <img src="assets/images/resource/from-logo.jpg" alt="" />
              </figure>
            </div>
            <div className="from__content">
              <form method="post" action="sendemail.php" id="contact-form">
                <div className="from__inner">
                  <div className="form-group">
                    <input
                      type="text"
                      name="username"
                      placeholder="Name"
                      required=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email"
                      required=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="number"
                      placeholder="Phone number"
                      required=""
                    />
                  </div>
                  <div className="message-btn">
                    <div className="service__btn btn-one two">
                      <em>
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                      </em>
                      <button
                        className="btn__submit"
                        type="submit"
                        name="submit-form"
                      >
                        <span>Submit Now</span>{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* service-from-end */}
    </>
  );
}
