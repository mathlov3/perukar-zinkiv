const getMarkup = (videoUrl, pretitle, heading, text) => `
<div class="hero-video-container">
    <video src="${videoUrl}" loop="loop" autoplay="autoplay" muted="muted" playsinline="playsinline"></video>
</div>
<div class="hero-video-content">
    <div class="hero-video-pretitle">${pretitle}</div>
    <div class="hero-video-heading">${heading}</div>
    <div class="hero-video-text">${text}</div>
</div>
`;

export default function decorate(block) {
  const children = [...block.children];
  const pretitle = children[0].outerHTML;
  const videoUrl = children[1].querySelector('a').getAttribute('href');
  const heading = children[2].outerHTML;
  const text = children[3].outerHTML;
  block.innerHTML = getMarkup(videoUrl, pretitle, heading, text);
}
