import "./App.css";

function App() {
  return (
    <>
      <main>
        <nav className="text-center text-3xl font-semibold italic border-b-2  mb-12">
          {" "}
          <h4>Ahad Saim Ui</h4>{" "}
        </nav>
        <header>
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co/QKqMcBF/digital-laptop-working-global-business-concept.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co/8YLPBYc/flat-lay-desk-concept-with-smartphone-template.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co/QKqMcBF/digital-laptop-working-global-business-concept.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co/8YLPBYc/flat-lay-desk-concept-with-smartphone-template.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </header>
        <section className="my-10 ">
          <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": 15 }}></span>
              </span>
              days
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": 10 }}></span>
              </span>
              hours
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": 24 }}></span>
              </span>
              min
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": 20 }}></span>
              </span>
              sec
            </div>
          </div>
        </section>
        <div className="my-10">
          <div className="flex justify-center gap-1 my-1 w-full">
            <kbd className="kbd">q</kbd>
            <kbd className="kbd">w</kbd>
            <kbd className="kbd">e</kbd>
            <kbd className="kbd">r</kbd>
            <kbd className="kbd">t</kbd>
            <kbd className="kbd">y</kbd>
            <kbd className="kbd">u</kbd>
            <kbd className="kbd">i</kbd>
            <kbd className="kbd">o</kbd>
            <kbd className="kbd">p</kbd>
          </div>
          <div className="flex justify-center gap-1 my-1 w-full">
            <kbd className="kbd">a</kbd>
            <kbd className="kbd">s</kbd>
            <kbd className="kbd">d</kbd>
            <kbd className="kbd">f</kbd>
            <kbd className="kbd">g</kbd>
            <kbd className="kbd">h</kbd>
            <kbd className="kbd">j</kbd>
            <kbd className="kbd">k</kbd>
            <kbd className="kbd">l</kbd>
          </div>
          <div className="flex justify-center gap-1 my-1 w-full">
            <kbd className="kbd">z</kbd>
            <kbd className="kbd">x</kbd>
            <kbd className="kbd">c</kbd>
            <kbd className="kbd">v</kbd>
            <kbd className="kbd">b</kbd>
            <kbd className="kbd">n</kbd>
            <kbd className="kbd">m</kbd>
            <kbd className="kbd">/</kbd>
          </div>
        </div>
        <section className="flex justify-center mt-6 items-center">
          <span className="loading loading-ring loading-lg"></span>
        </section>
        <div className="flex justify-center mt-6 items-center">
          <progress className="progress w-56"></progress>
        </div>
        <section className="flex items-center justify-center my-8">
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-figure text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Total Likes</div>
              <div className="stat-value text-primary">25.6K</div>
              <div className="stat-desc">21% more than last month</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Page Views</div>
              <div className="stat-value text-secondary">2.6M</div>
              <div className="stat-desc">21% more than last month</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <div className="avatar online">
                  <div className="w-16 rounded-full">
                    <img src="https://i.ibb.co/xYqx1GQ/39086616-1.jpg" />
                  </div>
                </div>
              </div>
              <div className="stat-value">86%</div>
              <div className="stat-title">Tasks done</div>
              <div className="stat-desc text-secondary">31 tasks remaining</div>
            </div>
          </div>
        </section>
        <div className="flex items-center justify-center mb-8">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src="https://i.ibb.co/xYqx1GQ/39086616-1.jpg"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Ahad Saim</div>
                        <div className="text-sm opacity-50">Bangladesh</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Dhaka,Mirpur,Dhaka.
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Web Developer
                    </span>
                  </td>
                  <td>Navy Blue</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src="https://i.ibb.co/WKtBMRd/73619209.jpg"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Abdullah Al Kutub</div>
                        <div className="text-sm opacity-50">Uganda</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Carroll, Gana, Carroll.
                    <br />
                    <span className="badge badge-ghost badge-sm">Engineer</span>
                  </td>
                  <td>Dark Chocolate</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <section className="flex items-center justify-center mb-8">
          <div>
            <input
              type="file"
              className="file-input file-input-bordered file-input-success w-full max-w-xs"
            />
          </div>
        </section>
        <div className="flex items-center justify-center mb-8 gap-2">
          <input
            type="radio"
            name="radio-4"
            className="radio radio-accent"
            checked
          />
          <input type="radio" name="radio-4" className="radio radio-accent" />
          <input
            type="radio"
            name="radio-6"
            className="radio radio-warning"
            checked
          />
          <input type="radio" name="radio-6" className="radio radio-warning" />
          <input
            type="radio"
            name="radio-8"
            className="radio radio-error"
            checked
          />
          <input type="radio" name="radio-8" className="radio radio-error" />
          <input
            type="radio"
            name="radio-2"
            className="radio radio-primary"
            checked
          />
          <input type="radio" name="radio-2" className="radio radio-primary" />
        </div>

        <section className="flex items-center justify-center mb-8 gap-2">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co/wBXjHDy/top-view-yellow-paper-sheet-with-colorful-paper-clips-with-purple-color-statice-flowers-laptop-with.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Table</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Placeat, veniam?
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full mx-auto">
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-200"
          >
            <div className="collapse-title text-xl font-medium">
              Focus me to see content
            </div>
            <div className="collapse-content">
              <p>
                tabIndex={0} Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Neque ullam iste velit dicta nemo aliquid reiciendis?
                Earum, in numquam aliquam quia molestias laborum esse incidunt
                ab nisi sint eius sit tempore, atque hic, fugiat nesciunt
                asperiores. Exercitationem deleniti sed autem corporis fugiat
                obcaecati quas nemo, qui maxime nihil unde sapiente veritatis
                odit adipisci nulla enim. Necessitatibus repellendus odio fuga
                quia temporibus praesentium, delectus facere voluptas a tempora
                doloremque? Sit ab exercitationem molestiae natus. Vero fugit,
                ut aliquid illum enim cum accusamus deserunt at recusandae
                architecto. Quisquam est porro consequatur, necessitatibus,
                repellendus cum temporibus culpa libero harum natus, eius modi
                facilis?
              </p>
            </div>
          </div>
        </div>
        <section className="flex items-center justify-center my-8 gap-2">
          <div className="rating gap-1">
            <input
              type="radio"
              name="rating-3"
              className="mask mask-heart bg-red-400"
            />
            <input
              type="radio"
              name="rating-3"
              className="mask mask-heart bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-3"
              className="mask mask-heart bg-yellow-400"
            />
            <input
              type="radio"
              name="rating-3"
              className="mask mask-heart bg-lime-400"
            />
            <input
              type="radio"
              name="rating-3"
              className="mask mask-heart bg-green-400"
            />
          </div>
        </section>
        <div className="flex items-center justify-center mb-8 gap-2"></div>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <img
                className="mask mask-heart "
                src="https://i.ibb.co/WKtBMRd/73619209.jpg"
              />
              <h1 className="mb-5 text-5xl font-bold">Abdullah All Kutub</h1>
              <p className="mb-5">
                যেদিন মনের দিক থেকে তুমি হেরে যেতে শুরু করবে সেদিন শুধু একটা কথা
                মনে করবে, তুমি আরম্ভ কেনো করেছিলে?
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <footer className="footer footer-center p-10 bg-slate-950 text-white text-base-content rounded">
          <nav className="grid grid-flow-col gap-4">
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <div className="grid grid-flow-col gap-4">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </nav>
          <aside>
            <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
          </aside>
        </footer>
      </footer>
    </>
  );
}

export default App;
