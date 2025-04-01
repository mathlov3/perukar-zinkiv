export default function decorate(block) {
  const children = [...block.children];
  const url = children[0].innerText;
  const width = children[1].innerText;
  const height = children[2].innerText;

  block.innerHTML = `<iframe src="${url}" 
    width="${width}" 
    height="${height}" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
}
