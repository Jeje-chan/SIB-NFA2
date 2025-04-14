export default function ProductList() {
  const books = [
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
  ];

  return (
    <section id="album" className="album py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 text-primary">Koleksi Series dari Tere Liye yang Tersedia</h2>
        <p className="text-center mb-5 text-muted">
          Temukan buku favoritmu dan pilih untuk dipinjam
        </p>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {books.map((book, index) => (
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
                      <button className="btn btn-sm btn-primary me-2">
                        Detail
                      </button>
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
  );
}