import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer text-center">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Đại học CNTT và TT Thái Nguyên</h4>
              <p className="lead mb-0">
              Đường Z 115, Quyết Thắng,
                <br />
                Thành phố Thái Nguyên
              </p>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">liên quan</h4>
              <a className="btn btn-outline-light btn-social mx-1" href="https://www.facebook.com/thethuongmtt">
                <i className="fab fa-fw fa-facebook-f" />
              </a>
              <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/TheThuongg">
              <i class="fab fa-fw fa-github"></i>
              </a>
              <a className="btn btn-outline-light btn-social mx-1" href="#!">
                <i className="fab fa-fw fa-internet-explorer" />
              </a>
            </div>
            <div className="col-lg-4">
              <h4 className="text-uppercase mb-4">đồ án chuyên ngành</h4>
              <p className="lead mb-0">
                GV hướng dẫn: Trần Quang Huy
                <br />
                SV thực hiện: Ma Tiến Thương
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright py-4 text-center text-white">
        <div className="container">
          <small>Copyright © Your Website 2022</small>
        </div>
      </div>
    </>
  );
}

export default Footer;
