function Navbar(){
  return(
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">My Books</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="navbar-nav mr-auto mb-2 mb-lg-0">
            <a class="nav-item nav-link" id="signin_link" onclick="loadPage('signin.html')" href="#">Sign In</a>
            <a class="nav-item nav-link" id="books_link"  onclick="loadPage('index.html')"  href="#">Books</a>
          </div>
        </div>
      </div>
    </nav>
  );
}