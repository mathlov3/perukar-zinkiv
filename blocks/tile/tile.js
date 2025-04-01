const getMarkup = (picture, heading, subtitle, text, quoteText) => `
<div class="tile-image">
    ${picture}
</div>
<div class="tile-content">
    <div class="tile-heading">${heading}</div>
    <div class="tile-sub-heading">${subtitle}</div>
    <div class="tile-text">${text}</div>
    <div class="tile-quote">${quoteText}</div>
</div>
`;

export default function decorate(block) {
  const children = [...block.children];
  const picture = children[0].querySelector('picture').outerHTML;
  const heading = children[1].outerHTML;
  const subtitle = children[2].outerHTML;
  const text = children[3].outerHTML;
  const quoteText = children[4].outerHTML;
  block.innerHTML = getMarkup(picture, heading, subtitle, text, quoteText);
}
