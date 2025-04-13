function App() {
  return (
    <>
      {/* header */}
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a href="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
              <i className="fa-solid fa-book fa-2xl" style={{ color: "#74C0FC" }}></i>
              <span className="ms-2 fs-4">bookstore</span>
            </a>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" className="nav-link px-2 link-secondary">Home</a>
            </li>
            <li>
              <a href="#main" className="nav-link px-2">Book</a>
            </li>
            <li>
              <a href="#team" className="nav-link px-2">Team</a>
            </li>
            <li>
              <a href="#contact" className="nav-link px-2">Kontak</a>
            </li>
          </ul>
          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">Login</button>
            <button type="button" className="btn btn-primary">Register</button>
          </div>
        </header>
      </div>

      {/* hero */}
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

      {/* main konten */}
      <section id="album" className="album py-5 bg-light">
  <div className="container">
    <h2 className="text-center mb-4 text-primary">Koleksi Buku Pilihan</h2>
    <p className="text-center mb-5 text-muted">
      Temukan buku favoritmu dan pilih untuk dipinjam
    </p>

    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
      {[
        {
          title: "Bumi",
          description: "Buku ke-1 dari series BUMI",
          img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1383884931i/18759843.jpg",
        },
        {
          title: "Bulan",
          description: "Buku ke-2 dari series BUMI",
          img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1424060873i/24946146.jpg",
        },
        {
          title: "Matahari",
          description: "Buku ke-3 dari series BUMI",
          img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1467429925i/30827710.jpg",
        },
        {
          title: "Bintang",
          description: "Buku ke-4 dari series BUMI",
          img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1496315625i/35278713.jpg",
        },
        {
          title: "Ceros & Batozar",
          description: "Buku kelima dari series BUMI",
          img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1531141587i/40093229.jpg",
        },
        {
          title: "Komet",
          description: "Buku keenam dari series BUMI",
          img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1531141646i/40093223.jpg",
        },
        {
          title: "Komet Minor",
          description: "Buku ketujuh dari series BUMI",
          img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1547772157i/43604105.jpg",
        },
        {
          title: "Selena",
          description: "Buku kedelapan dari series BUMI",
          img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1584353767i/52416700.jpg",
        },
        {
          title: "Nebula",
          description: "Buku kesembilan dari series BUMI",
          img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1584354079i/52416779.jpg",
        },
        {
          title: "Lumpu",
          description: "Buku ke-10 dari series BUMI",
          img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1617605075i/57630650.jpg",
        },
        {
          title: "Si Putih",
          description: "Buku ketiga dari series BUMI",
          img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1617605426i/57630678.jpg",
        },
        {
          title: "Bibi Gil",
          description: "Buku ketiga dari series BUMI",
          img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1645071288i/60433729.jpg",
        },
        {
          title: "SagaraS",
          description: "Buku ketiga dari series BUMI",
          img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1645071633i/60433747.jpg",
        },
        {
          title: "Matahari Minor",
          description: "Buku ketiga dari series BUMI",
          img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1671447826i/63284537.jpg",
        },
        {
          title: "ILY",
          description: "Buku ketiga dari series BUMI",
          img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1703904631i/204506972.jpg",
        },
        {
          title: "ILY",
          description: "Buku ketiga dari series BUMI",
          img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1733117060i/222141705.jpg",
        },
      ].map((book, index) => (
        <div key={index} className="col">
          <div
            className="card h-100 border-0"
            style={{
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.2s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow =
                "0 10px 20px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 4px 10px rgba(0, 0, 0, 0.1)";
            }}
          >
            {/* Gambar dalam wrapper dengan bayangan */}
            <div
              style={{
                background: "#ffffff",
                padding: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={book.img}
                alt={`Cover ${book.title}`}
                style={{
                  width: "150px",
                  height: "auto",
                  borderRadius: "8px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                }}
              />
            </div>

            <div className="card-body d-flex flex-column text-center">
              <h5 className="card-title text-primary">{book.title}</h5>
              <p className="card-text text-muted">{book.description}</p>
              <div className="mt-auto d-flex justify-content-between align-items-center">
              <div className="d-flex">
              <button className="btn btn-sm btn-primary me-2">Detail</button>
              <button className="btn btn-sm btn-success">Pinjam</button>
              </div>
              <small className="text-muted">Tersedia</small>
            </div>

            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>




      {/* team */}
      <section id="team" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4 fw-bold">Tim Kami</h2>
          <p className="text-center mb-5 text-muted">Inilah manusia-manusia di balik layar!!!</p>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {/* Card 1 */}
            <div className="col">
              <div className="card h-100 text-center shadow-sm border-0">
                <img src="https://i.pinimg.com/736x/3d/07/8c/3d078c4b317d55fde720379d25cdd0e9.jpg"
                  className="rounded-circle mx-auto mt-4" alt="Iffatul Ammar"
                   style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-semibold">Iffatul Ammar</h5>
                  <p className="card-text text-muted">Frontend Developer</p>
                  <p className="small">Salah satu cowok kece di tim kami</p>
                  <div>
                    <a href="#" className="text-secondary mx-2"><i className="bi bi-github"></i></a>
                    <a href="#" className="text-primary mx-2"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col">
              <div className="card h-100 text-center shadow-sm border-0">
                <img src="https://i.pinimg.com/736x/06/ad/5e/06ad5e43ed9b9f239ac3e887d4f4e64a.jpg" className="rounded-circle mx-auto mt-4" alt="Sharma Azzahrah"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-semibold">Sharma Azzahrah</h5>
                  <p className="card-text text-muted">UI/UX Designer</p>
                  <p className="small">Satu-satunya cewek di tim kami</p>
                  <div>
                    <a href="#" className="text-secondary mx-2"><i className="bi bi-github"></i></a>
                    <a href="#" className="text-primary mx-2"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col">
              <div className="card h-100 text-center shadow-sm border-0">
                <img src="https://i.pinimg.com/736x/c3/64/6d/c3646d3d6d5a2cfa56feb70c736e19a3.jpg" className="rounded-circle mx-auto mt-4" alt="Akmal Maulana" style={{width: "100px",height: "100px",objectFit: "cover", }} />
                <div className="card-body">
                  <h5 className="card-title fw-semibold">Akmal Maulana</h5>
                  <p className="card-text text-muted">Backend Developer</p>
                  <p className="small">Another cowok kece di tim kami </p>
                  <div>
                    <a href="#" className="text-secondary mx-2"> <i className="bi bi-github"></i> </a>
                    <a href="#" className="text-primary mx-2"> <i className="bi bi-linkedin"></i> </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* kontak */}
      <section id="contact" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4"></h2>
          <p className="text-center mb-5">Punya pertanyaan? Kirimkan pesanmu melalui form di bawah!</p>

          <div className="row justify-content-center">
            <div className="col-md-8">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Nama
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Nama lengkap"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="nama@email.com"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Pesan
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    placeholder="Tulis pesanmu di sini..."
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  <i className="fa-solid fa-paper-plane me-2"></i> Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <div className="container">
        <footer className="py-5">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5>Explore</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Resources</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Documentation
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Tutorials
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Blog
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Community
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Company</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    About Us
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Careers
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Press
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>Stay in the Loop</h5>
                <p>
                  Get exclusive updates, tips, and insights delivered straight
                  to your inbox. No spam, we promise!
                </p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="email"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button className="btn btn-primary" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>&copy; 2025. Web by Sharma Azzahrah.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;