export default function Hero(){
    return(
        <>
            <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
              Perpustakaan dalam genggaman
            </h1>
            <p className="lead">
            ePerpus adalah layanan perpustakaan digital dengan konsep B2B (business-to-business). 
            Kami hadir untuk memudahkan pengelolaan perpustakaan digital Anda.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
              >
                Jelajahi Buku
              </button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4"
              >
                Cara Pinjam
              </button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img
              className="rounded-lg-3" src="https://images.unsplash.com/photo-1512820790803-83ca734da794" alt="Tumpukan Buku" width="720" style={{ objectFit: "cover", height: "100%" }}
            />
          </div>
        </div>
      </div>
        </>
    );
}