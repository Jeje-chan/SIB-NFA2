export default function LoginForm(){
    return(
        <>
        

      {/*form*/}
      <section id="contact" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4"></h2>
          <p className="text-center mb-5">Punya pertanyaan? Kirimkan pesanmu melalui form di bawah!</p>

          <div className="row justify-content-center">
            <div className="col-md-8">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label"> Nama </label>
                  <inpu type="text className="form-control id="name" placeholder="Nama lengkap"/>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="nama@email.com" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Pesan</label>
                  <textarea className="form-control" id="message" rows="5" placeholder="Tulis pesan di sini" ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  <i className="fa-solid fa-paper-plane me-2"></i> Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}