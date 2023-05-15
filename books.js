class Book extends HTMLElement {
  constructor(){
    super();
  }

  connectedCallback() {
    const title   = this.getAttribute('title');
    const author   = this.getAttribute('author');
    const description   = this.getAttribute('description');

    this.innerHTML = `
      <div class="card">
        <h5 class="card-header">${title}</h5>
        <div class="card-body">
          <p class="card-text">
          <table class="table">
            <tr>
              <td class="text-success font-weight-bold">Author:</td>
              <td>${author}</td>
            </tr>
            <tr>
            <td class="text-success font-weight-bold">Description:</td>
              <td>${description}</td>
            </tr>
          </table>
        </div>
      </div>
    `;
  }
}

// Define the new element
customElements.define('mit-book', Book);