document.addEventListener('DOMContentLoaded', () => {
  // Select all paragraphs or content blocks where hashtags might appear
  const contentBlocks = document.querySelectorAll('.article p, .article .content');

  contentBlocks.forEach(block => {
    // Replace hashtags with anchor links
    block.innerHTML = block.innerHTML.replace(
      /(^|\s)(#[a-z\d-_]+)/gi,
      (match, prefix, hashtag) => {
        const tag = hashtag.substring(1); // remove #
        // Customize this URL to your hashtag/tag search page
        const url = `/tags/${encodeURIComponent(tag)}`;
        return `${prefix}<a href="${url}" class="hashtag-link">${hashtag}</a>`;
      }
    );
  });
});
