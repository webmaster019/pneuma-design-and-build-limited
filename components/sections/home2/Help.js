export default function Help() {
    return (
        <>
        {/* help-section */}
        <section
            className="help__section p_relative"
            style={{ backgroundImage: "url(assets/images/shape/shape-28.png)" }}
        >
            <div className="help__content">
            <div className="auto_container">
                <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="help__left">
                    <div className="help__one">
                        <span className="icon-47" />
                    </div>
                    <div className="help__two">
                        <h2>Need Any Roofing Help?</h2>
                        <span>
                        Call us: <a href="tel:+21359281237">+21-359-28-1237</a>
                        </span>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div
                    className="help__right  wow zoomIn animated"
                    data-wow-delay="100ms"
                    data-wow-duration="1500ms"
                    >
                    <figure className="image">
                        <img src="assets/images/resource/need.png" alt="" />
                    </figure>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/* help-section-end */}
        </>
    )
}

