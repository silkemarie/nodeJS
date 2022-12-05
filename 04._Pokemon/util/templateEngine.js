import fs from "fs";
//et tungt modul, så tag det kun hvis du skal bruge det. "fs" = filesystem. 
//kan bruge filsystemet til at læse filer

const navComponent = fs.readFileSync("./public/components/navbar/navbar.html").toString();
const footerComponent = fs.readFileSync("./public/components/footer/footer.html").toString();

export function renderPage(path, options = {}) {
    const page = fs.readFileSync("./public/pages"+path).toString();

    return navComponent
                .replace("%%TAB_TITLE%%", options.tabTitle || "Pokemon")
                .replace("%%PAGE_CSS_LINK%%",
                    options.cssLink || ""
                    )
                + page
                + footerComponent;
}
//en funktion, der skal tage imod en path, der prøver at replace den, og giver en path tilbage


export function injectData(pageString, data) {
    const brokenUpHTML = pageString.split("</body>");
    const variableName = Object.keys(data)[0];
    return brokenUpHTML[0] + 
        `<script>const ${variableName} = ${JSON.stringify(data[variableName])}</script></body>` + 
        brokenUpHTML[1];
}


/*
const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();

export const frontpagePage = navComponent
                        .replace("%%TAB_TITLE%%", "Pokemon")
                        .replace("%%PAGE_CSS_LINK%%",
                        `<link rel="stylesheet" href="./pages/frontpage/frontpage.css">`
                        )
                        + frontpage + footerComponent;

const battle = fs.readFileSync("./public/pages/battle/battle.html").toString();
export const battlePage = navComponent
                        .replace("%%TAB_TITLE%%", "Pokemon battle")
                        .replace("%%PAGE_CSS_LINK%%",
                        `<link rel="stylesheet" href="./pages/battle/battle.css">`
                        )
                        + battle + footerComponent;

const contact = fs.readFileSync("./public/pages/contact/contact.html").toString();
export const contactPage = navComponent
                        .replace("%%TAB_TITLE%%", "Contact")
                        .replace("%%PAGE_CSS_LINK%%",
                        `<link rel="stylesheet" href="./pages/contact/contact.css">`
                        )
                        + contact + footerComponent;
*/