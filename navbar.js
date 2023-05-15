function Navbar({page}){

  async function loadPage() {
    // get the requested page 
    let page = location.hash.replace('#','');
    // fetch the page, use await
    const res = await fetch(page);
    // get text from res, use await
    const content = await res.text();
    // get the element with id 'content'
    const element = document.getElementById('content');
    // set innerHTML of the element
    element.innerHTML = content;
  }

  window.addEventListener('hashchange', loadPage);

  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="">My Books</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav mr-auto mb-2 mb-lg-0">
            <a className="nav-item nav-link" id="signin_link" href="#signin">Sign In</a>
          </div>
        </div>
      </div>
    </nav>
  );
}