window.addEventListener("load", solve);

function solve() {
    let repairType = document.querySelector("#type-product");
    let description = document.querySelector("#description");
    let clientName = document.querySelector("#client-name");
    let phone = document.querySelector("#client-phone");
    let received = document.getElementById("received-orders");
    let completed = document.getElementById("completed-orders");

    let btn = document.querySelector("form button");
    btn.addEventListener("click", onClickSubmit);

    function onClickSubmit(ev) {
        let descriptionValue = description.value;
        let clientNameValue = clientName.value;
        let phoneValue = phone.value;

        description.value = "";
        clientName.value = "";
        phone.value = "";

        if (descriptionValue != "" && clientNameValue != "" && phoneValue != "") {
            let newField = document.createElement("div");
            newField.className = "container";
            received.appendChild(newField);

            let typeName = createElements(
                "h2",
                {},
                `Product type for repair: ${repairType.value}`);

            let clientInfo = createElements(
                "h3",
                {},
                `Client information: ${clientNameValue}, ${phoneValue}`);

            let descriptionField = createElements(
                "h4",
                {},
                `Description of the problem: ${descriptionValue}`);

            let startButton = createElements(
                "button",
                { className: "start-btn" },
                "Start repair");

            let finishButton = createElements(
                "button",
                { className: "finish-btn", disabled: true },
                "Finish repair");

            function createElements(type, attributes, content) {
                let newElement = document.createElement(type);
                newElement.textContent = content;

                for (let atr in attributes) {
                    newElement[atr] = attributes[atr];
                }

                newField.appendChild(newElement);

                return newElement;
            }

            startButton.addEventListener("click", onClickStart);

            function onClickStart(e) {
                startButton.disabled = true;
                finishButton.disabled = false;

                finishButton.addEventListener("click", onClickFinish);

                function onClickFinish(event) {
                    let newDiv = document.createElement("div");
                    newDiv.className = "container";
                    completed.appendChild(newDiv);

                    newDiv.appendChild(typeName);
                    newDiv.appendChild(clientInfo);
                    newDiv.appendChild(descriptionField);

                    newField.remove();

                    let clearBtn = document.querySelector(".clear-btn");
                    clearBtn.addEventListener("click", clear);

                    function clear(ev2) {
                        newDiv.remove();
                    }
                }
            }
        }
    }
}