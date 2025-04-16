import books from "../../../Utils/books";
export default function ProductList() {


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
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <p>{book.author}</p>
                      </div>
                    </div>
                    <small className="text-muted">{book.year}</small>
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