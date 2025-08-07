import Link from "next/link";
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";
export default function Header4({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  isSidebar,
  handlePopup,
  handleSidebar,
}) {
  return (
    <>
      {/* main header */}
      <header
        className={`main-header style-four ${scroll ? "fixed-header" : ""}`}
      >
        {/* header-lower */}
        <div className="header-lower">
          <div className="container">
            <div className="header__four__left col-12">
              <div className="logo-box">
                <div
                  className="logo"
                >
                  <Link href="/">
                    <img src="assets/images/logo.png" alt="" />
                  </Link>
                </div>
              </div>
              <div className="menu-area">
                {/*Mobile Navigation Toggler*/}
                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                  <i className="icon-bar" />
                  <i className="icon-bar" />
                  <i className="icon-bar" />
                </div>
                <nav className="main-menu navbar-expand-md navbar-light">
                  <div
                    className="collapse navbar-collapse show clearfix"
                    id="navbarSupportedContent"
                  >
                    <Menu />
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/*sticky Header*/}
        <div
          className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}
        >
          <div className="auto_container">
            <div className="outer-box">
              <div className="logo-box">
                <figure className="logo">
                  <Link href="/">
                    <img src="assets/images/logo.png" alt="" />
                  </Link>
                </figure>
              </div>
              <div className="menu-area">
                <nav className="main-menu clearfix">
                  <Menu />
                  {/*Keep This Empty / Menu will come through Javascript*/}
                </nav>
              </div>
            </div>
          </div>
        </div>
        <MobileMenu
          handleMobileMenu={handleMobileMenu}
          isSidebar={isSidebar}
          handleSidebar={handleSidebar}
        />
      </header>
      {/* main-header end */}
    </>
  );
}
