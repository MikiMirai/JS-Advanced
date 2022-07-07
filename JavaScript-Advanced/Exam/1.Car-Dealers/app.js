window.addEventListener("load", solve);

function solve() {
    const makeInput = document.getElementById("make");
    const modelInput = document.getElementById("model");
    const yearInput = document.getElementById("year");
    const fuelInput = document.getElementById("fuel");
    const originalCostInput = document.getElementById("original-cost");
    const sellingPriceInput = document.getElementById("selling-price");
    const offersTable = document.getElementById("table-body");
    const soldList = document.getElementById("cars-list");
    const profilEl = document.getElementById("profit");
    const publishButton = document.getElementById("publish")
        .addEventListener("click", (publishEv) => {
            if (makeInput.value != ""
                && modelInput.value != ""
                && yearInput.value != ""
                && fuelInput.value != ""
                && originalCostInput.value != ""
                && sellingPriceInput.value != ""
                && originalCostInput.value < sellingPriceInput.value) {
                publishOffer(
                    publishEv,
                    makeInput.value,
                    modelInput.value,
                    yearInput.value,
                    fuelInput.value,
                    originalCostInput.value,
                    sellingPriceInput.value)

                makeInput.value = "";
                modelInput.value = "";
                yearInput.value = "";
                fuelInput.value = "";
                originalCostInput.value = "";
                sellingPriceInput.value = "";
            }
        });

    function publishOffer(event, makeInput, modelInput, yearInput, fuelInput, originalCostInput, sellingPriceInput) {
        event.preventDefault();

        const table = elementCreator("tr");
        table.setAttribute("class", "row");
        elementCreator("td", `${makeInput}`, table);
        elementCreator("td", `${modelInput}`, table);
        elementCreator("td", `${yearInput}`, table);
        elementCreator("td", `${fuelInput}`, table);
        elementCreator("td", `${originalCostInput}`, table);
        elementCreator("td", `${sellingPriceInput}`, table);
        const buttonTd = elementCreator("td", "", table);

        const editButton = elementCreator("button", "Edit", buttonTd);
        editButton.setAttribute("class", "action-btn edit");
        const sellButton = elementCreator("button", "Sell", buttonTd);
        sellButton.setAttribute("class", "action-btn sell");

        offersTable.appendChild(table);

        editButton.addEventListener("click", (editEv) =>
            editOffer(table, makeInput, modelInput, yearInput, fuelInput, originalCostInput, sellingPriceInput));
        sellButton.addEventListener("click", (sellEv) =>
            sellOffer(table, makeInput, modelInput, yearInput, originalCostInput, sellingPriceInput));
    }

    function editOffer(child, _makeInput, _modelInput, _yearInput, _fuelInput, _originalCostInput, _sellingPriceInput) {
        offersTable.removeChild(child);

        makeInput.value = _makeInput;
        modelInput.value = _modelInput;
        yearInput.value = _yearInput;
        fuelInput.value = _fuelInput;
        originalCostInput.value = _originalCostInput;
        sellingPriceInput.value = _sellingPriceInput;
    }

    function sellOffer(child, _makeInput, _modelInput, _yearInput, _originalCostInput, _sellingPriceInput) {
        offersTable.removeChild(child);

        const li = elementCreator("li");
        li.setAttribute("class", "each-list");
        elementCreator("span", `${_makeInput} ${_modelInput}`, li);
        elementCreator("span", `${_yearInput}`, li);
        elementCreator("span", `${_sellingPriceInput - _originalCostInput}`, li);

        soldList.appendChild(li);

        let currProfit = Number(profilEl.textContent);
        let newProfit = currProfit += (_sellingPriceInput - _originalCostInput)
        profilEl.textContent = `${newProfit.toFixed(2)}`;
    }

    function elementCreator(type, content, parent) {
        const element = document.createElement(type);
        element.textContent = content;

        if (parent) {
            parent.appendChild(element);
        }
        return element;
    }
}