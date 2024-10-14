document.addEventListener('DOMContentLoaded', function (event) {
    const body = document.getElementsByTagName("body")[0];
    body.style.display = "flex";
    body.style.height = "100vh";
    body.style.margin = '0';
    body.style.padding = '0';

    const navSection = document.createElement("section");
    navSection.className = "nav-section";
    body.appendChild(navSection);
    navSection.style.width = "270px";

    const divContainer = document.createElement("div");
    divContainer.className = "nav-section__container";
    navSection.appendChild(divContainer);
    //divContainer.style.padding = "10px 15px";

    const divTopPanel = document.createElement("div");
    divTopPanel.className = "nav-section__top-panel";
    divContainer.appendChild(divTopPanel);
    divTopPanel.style.margin = "15px"

    const svgSidePanel = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" 
viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M19 4.001H5a2 
2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-12a2 2 0 0 0-2-2Zm-15 2a1 1 0 0 1 
1-1h4v14H5a1 1 0 0 1-1-1v-12Zm6 13h9a1 1 0 0 0 1-1v-12a1 
1 0 0 0-1-1h-9v14Z" clip-rule="evenodd">
</path>
</svg>`;
    divTopPanel.innerHTML = svgSidePanel;
    divTopPanel.style.display = "flex";
    divTopPanel.style.justifyContent = "right";
    divTopPanel.style.cursor = "pointer";

    const divNavigation = document.createElement("div");
    divNavigation.className = "nav-section__navigation";
    divContainer.appendChild(divNavigation);
    divNavigation.style.padding = "0 12px";

    const svgAdd = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
<path fill="#6495ED" fill-rule="evenodd" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 
11 11 11Zm-.711-16.5a.75.75 0 1 1 1.5 0v4.789H17.5a.75.75 0 0 1 0 1.5h-4.711V17.5a.75.75 0 0 1-1.5 0V12.79H6.5a.75
.75 0 1 1 0-1.5h4.789V6.5Z" clip-rule="evenodd"></path>
</svg>`;

    const addButton = document.createElement("button");
    addButton.className = "nav-section__add-button";
    divNavigation.appendChild(addButton);

    const svgButton = document.createElement("div");
    svgButton.className = "nav-section__add-button-svg";
    svgButton.innerHTML = svgAdd;
    addButton.appendChild(svgButton);
    svgButton.style.height = "24px";

    const textButton = document.createElement("p");
    textButton.className = "nav-section__add-button-text";
    textButton.innerText = "Додати завдання";
    addButton.appendChild(textButton);

    addButton.style.display = "flex";
    addButton.style.alignItems = "center";
    textButton.style.paddingLeft = "10px";
    addButton.style.border = "0";
    addButton.style.background = "none"
    addButton.style.cursor = "pointer";
    addButton.style.padding = "0";
    navSection.style.backgroundColor = "#fcfaf8";
    textButton.style.fontFamily = "Segoe UI, sans-serif";
    textButton.style.fontSize = "14px";
    textButton.style.fontWeight = "600";
    textButton.style.lineHeight = "34px";
    textButton.style.color = "#6495ED";
    textButton.style.margin = "0";
    addButton.style.padding = "5px";

    const list = document.createElement("ul");
    list.className = "nav-section__navigation-list";
    divNavigation.appendChild(list);
    list.style.padding = "4px 0";
    list.style.margin = "0";


    function createList(elements, svgList) {
        const items = elements.map((element, index) => {
            return createItem(element, svgList[index]);
        });
        items.forEach((item) => {
            list.appendChild(item);
        });
        return list;
    }

    function createItem(text, svg) {
        const item = document.createElement("li");
        item.className = "nav-section__navigation-list-item";
        const svgEl = document.createElement("div");
        svgEl.className = "nav-section__navigation-list-item-svg";
        svgEl.innerHTML = svg;
        item.appendChild(svgEl);
        const p = document.createElement("p");
        p.className = "nav-section__navigation-list-item-text";
        p.innerText = text;
        item.appendChild(p);
        item.style.listStyleType = "none";
        item.style.display = "flex";
        item.style.alignItems = "center";
        p.style.paddingLeft = "10px";
        p.style.fontFamily = "Segoe UI, sans-serif";
        p.style.fontSize = "14px";
        p.style.lineHeight = "34px";
        p.style.margin = "0";
        //p.style.padding = "5px";
        item.style.padding = "0 5px";
        svgEl.style.height = "24px";
        return item;
    }

    const svgSearch = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
<path fill="currentColor" fill-rule="evenodd" d="M16.29 15.584a7 7 0 1 0-.707.707l3.563 3.563a.5.5 0 0 0 .708
-.707l-3.563-3.563ZM11 17a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" clip-rule="evenodd"></path>
</svg>`;

    const svgTask = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
<path fill="currentColor" fill-rule="evenodd" d="M8.062 4h7.876a2 2 0 0 1 1.94 1.515l2.062 8.246c.04.159.06.322.06.486V18a2 
2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3.754a2 2 0 0 1 .06-.485L6.12 5.515A2 2 0 0 1 8.061 4Zm0 1a1 1 0 0 0-.97.758L5.03 14.004a1 
1 0 0 0-.03.242V18a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.754a.997.997 0 0 0-.03-.242L16.91 5.758a1 1 0 0 0-.97-.758H8.061Zm6.643 
10a2.75 2.75 0 0 1-5.41 0H7a.5.5 0 1 1 0-1h2.75a.5.5 0 0 1 .5.5 1.75 1.75 0 1 0 3.5 0 .5.5 0 0 1 .5-.5H17a.5.5 0 0 1 0 
1h-2.295Z" clip-rule="evenodd"></path>
</svg>`;

    const svgCompleted = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
<path fill="currentColor" fill-rule="evenodd" d="M17.5 6.001h-3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 
.5-.5v-3a.5.5 0 0 0-.5-.5Zm-3-1a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 
1.5 0 0 0-1.5-1.5h-3Zm-8 9h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5Zm-1.5.5a1.5 
1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5v-3Zm9.5-.5h3a.5.5 0 0 1 
.5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5Zm-1.5.5a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 
1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5v-3Zm-6.5-8.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 
1-.5-.5v-3a.5.5 0 0 1 .5-.5Zm-1.5.5a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 
1.5 0 0 1-1.5-1.5v-3Z" clip-rule="evenodd"></path>
</svg>`;

    const listEl = createList(["Пошук", "Завдання", "Виконані"], [svgSearch, svgTask, svgCompleted]);

    const addWindow = document.createElement("div");
    addWindow.className = "nav-section__add-window";
    addWindow.id = "add-window";
    divContainer.appendChild(addWindow);

    const inputName = document.createElement("input");
    inputName.className = "nav-section__add-window-input-name";
    inputName.type = "text";
    inputName.placeholder = "Назва завдання";
    addWindow.appendChild(inputName);

    const inputDescription = document.createElement("input");
    inputDescription.className = "nav-section__add-window-input-description";
    inputDescription.type = "text";
    inputDescription.placeholder = "Опис завдання";
    addWindow.appendChild(inputDescription);

    const windowButtonContainer = document.createElement("div");
    windowButtonContainer.className = "nav-section__add-window-button-container";
    addWindow.appendChild(windowButtonContainer);

    const saveButton = document.createElement("button");
    saveButton.className = "nav-section__add-window-button-container-save-button";
    saveButton.innerText = "Зберегти";
    windowButtonContainer.appendChild(saveButton);

    const cancelButton = document.createElement("button");
    cancelButton.className = "nav-section__add-window-button-container-cancel-button";
    cancelButton.innerText = "Скасувати";
    windowButtonContainer.appendChild(cancelButton);

    addWindow.style.display = "none";
    addWindow.style.position = "fixed";
    addWindow.style.top = "10px";
    addWindow.style.left = "500px";
    addWindow.style.width = "30%";
    addWindow.style.height = "15%";
    addWindow.style.zIndex = "1000";
    addWindow.style.backgroundColor = "white";
    addWindow.style.boxShadow = "0 4px 12px 0 rgba(0, 0, 0, 0.2)";
    addWindow.style.padding = "20px";
    addWindow.style.margin = "100px auto";
    addWindow.style.borderRadius = "15px";

    inputName.style.fontSize = "20px";
    inputName.style.border = "0";
    inputName.style.outline = "none";
    inputName.style.width = "100%";
    inputName.style.marginBottom = "5px";

    inputDescription.style.fontSize = "13px";
    inputDescription.style.border = "0";
    inputDescription.style.outline = "none";
    inputDescription.style.width = "100%";
    inputDescription.style.marginBottom = "5px";
    inputDescription.style.paddingBottom = "20px";
    inputDescription.style.borderBottom = "1px solid #ccc";

    windowButtonContainer.style.display = "flex";
    windowButtonContainer.style.justifyContent = "flex-end";
    windowButtonContainer.style.gap = "10px";
    windowButtonContainer.style.marginTop = "10px";

    saveButton.style.border = "0";
    saveButton.style.backgroundColor = "#6495ED";
    saveButton.style.color = "white";
    saveButton.style.padding = "5px 20px";
    saveButton.style.cursor = "pointer";
    saveButton.style.borderRadius = "5px";
    saveButton.style.order = "1";
    saveButton.style.fontFamily = "Segoe UI, sans-serif";
    saveButton.style.fontSize = "13px";
    saveButton.style.fontWeight = "600";

    cancelButton.style.border = "0";
    cancelButton.style.backgroundColor = "#f5f5f5";
    cancelButton.style.color = "white";
    cancelButton.style.padding = "8px 20px";
    cancelButton.style.cursor = "pointer";
    cancelButton.style.borderRadius = "5px";
    cancelButton.style.color = "#5d5d5d";
    cancelButton.style.fontFamily = "Segoe UI, sans-serif";
    cancelButton.style.fontSize = "13px";
    cancelButton.style.fontWeight = "600";

    function openModalWindow() {
        document.getElementById("add-window").style.display = "block";
    }

    function closeModalWindow() {
        document.getElementById("add-window").style.display = "none";
    }

    document.querySelector(".nav-section__add-button").addEventListener("click", openModalWindow);
    document.querySelector(".nav-section__add-window-button-container-save-button").addEventListener("click", closeModalWindow);
    document.querySelector(".nav-section__add-window-button-container-cancel-button").addEventListener("click", closeModalWindow);

});



