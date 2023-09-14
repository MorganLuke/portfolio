// utility functions

// this loads the partial header and footer partials and renders it to the browser
export async function loadhHeaderFooter() {
    let header = ".public/partials/header.html";
    let footer = ".public/partials/footer.html";
    let hTemplate = await loadTemplate(header);
    let fTemplate = await loadTemplate(footer);
    let headerE1 = document.querySelector("#mainHeader");
    let footerE1 = document.querySelector("#mainFooter");
    renderWithTemplate(hTemplate, headerE1);
    renderWithTemplate(fTemplate, footerE1);
}


