export default function Member(){
    return(
        <>
        <section id="team" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4 fw-bold">Tim Kami</h2>
          <p className="text-center mb-5 text-muted">Inilah manusia-manusia di balik layar!!!</p>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {/* Card 1 */}
            <div className="col">
              <div className="card h-100 text-center shadow-sm border-0">
                <img src="https://media.licdn.com/dms/image/v2/D5603AQHtSA6EYweD1w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730456775268?e=1750291200&v=beta&t=blGxnXR89yCjf-xIKgpZU9Ij6UC_0rsb1sREmeRGyiY"
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
                <img src="https://media.licdn.com/dms/image/v2/D5603AQEWsuj2tC7cnw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730535757470?e=1750291200&v=beta&t=BZSomU_nzUqefO3wSPL09j_6KLk6M9H1Mwumk6sghi4"
                 className="rounded-circle mx-auto mt-4" alt="Sharma Azzahrah"
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
                <img src="https://media.licdn.com/dms/image/v2/D5603AQFs3ay2d0hGhQ/profile-displayphoto-shrink_400_400/B56ZSx4j.5HwAg-/0/1738151184063?e=1750291200&v=beta&t=I1vAjbWi3O_v66OPti4qj7naNbUwtcGI8hwcAmxT5-k" className="rounded-circle mx-auto mt-4" alt="Akmal Maulana" style={{width: "100px",height: "100px",objectFit: "cover", }} />
                <div className="card-body">
                  <h5 className="card-title fw-semibold">Maulana Lutfhan</h5>
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
        </>
    )
}