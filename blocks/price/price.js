import { createOptimizedPicture } from '../../scripts/aem.js';

const getNewPriceTemplate = (serviceName, servicePrice) => `<p>${serviceName}</p><span class="spacer"></span><p class="service-price">${servicePrice}</p>`;

const splitPrices = (elements) => {
  const prices = [];
  elements.forEach((element) => {
    if (element.innerText.includes('=')) {
      prices.push(element);
    }
  });
  prices.forEach((priceElement) => {
    let targetElement = priceElement;
    const servicePriceEntry = priceElement.innerText.split('=');
    const serviceName = servicePriceEntry[0].trim();
    const servicePrice = servicePriceEntry[1].trim();
    if (priceElement.tagName === 'P') {
      targetElement = priceElement.parentElement;
    }
    targetElement.innerHTML = getNewPriceTemplate(serviceName, servicePrice);
  });
};

const optimizePicture = (block) => {
  const img = block.querySelector('img');
  const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '1024' }]);
  block.querySelector('picture').replaceWith(optimizedPic);
};

export default async function decorate(block) {
  splitPrices(block.querySelectorAll('p'));
  splitPrices(block.querySelectorAll('ul > li > ul > li'));
  optimizePicture(block);
}
