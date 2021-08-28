const addList = document.querySelector(".add");
const title = document.querySelector(".title");
const discp = document.querySelector(".discp");

addList.addEventListener("click", addtoLocalStorage);

function addtoLocalStorage() {
    console.log("updating value");
    if (window.localStorage.getItem("itemsJson")==null) {
        itemJsonArray = [];
        itemJsonArray.push([title.value, discp.value])
        localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray))
    }
}