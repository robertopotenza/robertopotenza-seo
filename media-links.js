// LinkedIn posts and article links
const mediaLinks = [
  {
    title: "The Future of Sustainable Manufacturing",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7141103133237125120/",
    type: "article"
  },
  {
    title: "Leadership in Manufacturing Operations",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7186746280948207616/",
    type: "podcast"
  },
  {
    title: "Psychological Safety in Manufacturing",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7127680119892037632/",
    type: "presentation"
  },
  {
    title: "Thermal Technology Company Expansion",
    url: "https://www.ksl.com/article/50763318/thermal-technology-company-breaks-ground-on-58m-expansion-of-ogden-facility",
    type: "news"
  }
];

// Update media links when document is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Update Read Article link
  const readArticleLinks = document.querySelectorAll('a[href="#"].project-link, a[href="#"]:contains("Read Article")');
  if (readArticleLinks.length > 0) {
    readArticleLinks[0].href = mediaLinks[0].url;
    readArticleLinks[0].target = "_blank";
    readArticleLinks[0].rel = "noopener";
  }
  
  // Update Listen to Podcast link
  const podcastLinks = document.querySelectorAll('a[href="#"]:contains("Listen to Podcast")');
  if (podcastLinks.length > 0) {
    podcastLinks[0].href = mediaLinks[1].url;
    podcastLinks[0].target = "_blank";
    podcastLinks[0].rel = "noopener";
  }
  
  // Update View Presentation link
  const presentationLinks = document.querySelectorAll('a[href="#"]:contains("View Presentation")');
  if (presentationLinks.length > 0) {
    presentationLinks[0].href = mediaLinks[2].url;
    presentationLinks[0].target = "_blank";
    presentationLinks[0].rel = "noopener";
  }
  
  // Add KSL article to media section if possible
  const mediaSection = document.querySelector('#media .media-grid');
  if (mediaSection && mediaLinks[3]) {
    const newsArticleHTML = `
      <div class="media-item scroll-animation">
        <div class="media-image">
          <img src="images/news-article.jpg" alt="News Article" class="lazy-load">
        </div>
        <div class="media-content">
          <h3 class="media-title">Thermal Technology Company Expansion</h3>
          <div class="media-source">KSL News, 2023</div>
          <p class="media-description">Featured article about the groundbreaking of a $58M expansion of a thermal technology facility, highlighting leadership in manufacturing growth and innovation.</p>
          <a href="${mediaLinks[3].url}" class="media-link" target="_blank" rel="noopener">Read News Article <i class="fas fa-arrow-right"></i></a>
        </div>
      </div>
    `;
    
    // Try to append the new article
    try {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = newsArticleHTML;
      mediaSection.appendChild(tempDiv.firstElementChild);
    } catch (e) {
      console.log('Could not add new media item dynamically');
    }
  }
  
  // Update LinkedIn profile link
  const linkedinLinks = document.querySelectorAll('a[href*="linkedin.com/in/roberto-potenza"]');
  linkedinLinks.forEach(link => {
    link.href = "https://www.linkedin.com/in/roberto-potenza";
    link.target = "_blank";
    link.rel = "noopener";
  });
});
