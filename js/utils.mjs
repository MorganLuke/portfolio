// utility functions

// this loads the partial header and footer partials and renders it to the browser
export async function loadHeaderFooter() {
    let header = "./public/partials/header.html";
    let footer = "./public/partials/footer.html";
    let hTemplate = await loadTemplate(header);
    let fTemplate = await loadTemplate(footer);
    let headerE1 = document.querySelector("#mainHeader");
    let footerE1 = document.querySelector("#mainFooter");
    renderWithTemplate(hTemplate, headerE1);
    renderWithTemplate(fTemplate, footerE1);
}


// fetch the html from the file using the file path
export async function loadTemplate(path)  {
    let response = await fetch(path);
    response = await response.text();
    return response;
}

// renders html into page
export async function renderWithTemplate(template, parentElement, data, position = "afterbegin", callback) {
    parentElement.insertAdjacentHTML(position, template);
    if (callback) {
        callback(data);
    }
}


