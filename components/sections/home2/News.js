import Link from "next/link"


export default function News() {
    return (
        <>
        {/* news-letter */}
        <section className="news_letter two">
            <div className="auto_container">
            <div
                className="news_letter_content"
                style={{ backgroundImage: "url(assets/images/shape/shape-27.png)" }}
            >
                <div className="news_letter_left p_relative">
                <h3>
                    Subscribe <br />
                    To Our Newsletter
                </h3>
                <div className="form-inner p_relative">
                    <form action="/" method="post" className="subscribe-form">
                    <div className="form-group">
                        <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        required=""
                        />
                        <button type="submit" className="btn-two">
                        Subscribe Now
                        </button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/* news-letter-end */}
        </>

    )
}
