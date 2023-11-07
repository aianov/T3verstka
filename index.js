const title = document.querySelector(".title")
const pricetext = document.querySelector(".pricetext")
const price = document.querySelector(".priceprice")
const footertext = document.querySelector(".bottom-text")

const titleText = (e) => {
    if (e == '') return title.innerHTML = 'Fruits and vegetables are packed with essential vitamins, minerals, and nutrients that are essential for maintaining a healthy body and mind'
    title.innerHTML = e
}

const priceText = (e) => {
    if (e == '') return pricetext.innerHTML = 'Fruits and vegetables'
    pricetext.innerHTML = e
}

const priceValue = (e) => {
    if (!/^[0-9.\s]*$/.test(e)) return
    if (e == '') return price.innerHTML = '$ 3.90'
    price.innerHTML = `$ ${e}`
}

const footerText = (e) => {
    if (e == '') return footertext.innerHTML = 'Newport Beach, CA, USA'
    footertext.innerHTML = e
}

let validate = false
let tagtext = ''

const tagText = (e) => {
    if (e == '') validate = false
    tagtext = e
}

const addTag = () => {
    const tagsContainer = document.querySelector(".tags");
    const newTag = document.createElement("div");
    newTag.className = "added df";
    newTag.innerHTML = `
      <div class="h100 dot df jcc aic">
        <div></div>
      </div>
      <span>Healthy food</span>
    `;
    tagsContainer.appendChild(newTag);
  };
  
  const removeTag = () => {
    const tagsContainer = document.querySelector(".tags");
    const addedElements = tagsContainer.querySelectorAll(".added");
    if (addedElements.length > 0) {
      const lastAddedElement = addedElements[addedElements.length - 1];
      tagsContainer.removeChild(lastAddedElement);
    }
  };