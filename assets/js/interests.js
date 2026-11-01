// interests.js
// Renders the Research Interests section as a grid of cards from
// research_interests.json: an icon, a topic title, one sentence, and tags.
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('interest-grid');
  if (!grid) return;

  // Simple stroke icons (stroke = currentColor so they follow the theme).
  const ICONS = {
    surface: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
    antenna: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 12v9"/><circle cx="12" cy="10" r="1.6"/><path d="M8.5 6.5a5 5 0 0 0 0 7M15.5 6.5a5 5 0 0 1 0 7"/><path d="M5.6 3.6a9 9 0 0 0 0 12.8M18.4 3.6a9 9 0 0 1 0 12.8"/></svg>',
    optim: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5c3 0 4 14 9 14s6-14 9-14"/><circle cx="12" cy="19" r="1.4"/></svg>',
    signal: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 20v-3M10 20v-7M15 20v-11M20 20V4"/></svg>',
    radar: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><path d="M12 12l6-6"/></svg>',
    brain: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="5" cy="6" r="1.8"/><circle cx="5" cy="18" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="19" cy="6" r="1.8"/><circle cx="19" cy="18" r="1.8"/><path d="M6.6 7l3.8 4M6.6 17l3.8-4M13.6 11l3.8-4M13.6 13l3.8 4"/></svg>'
  };

  fetch('assets/data/research_interests.json')
    .then(res => res.json())
    .then(items => {
      grid.innerHTML = '';
      items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'interest-card';

        const icon = document.createElement('span');
        icon.className = 'interest-icon';
        icon.innerHTML = ICONS[item.icon] || ICONS.signal;
        card.appendChild(icon);

        const title = document.createElement('h3');
        title.className = 'interest-card-title';
        title.textContent = item.title;
        card.appendChild(title);

        const text = document.createElement('p');
        text.className = 'interest-card-text';
        text.textContent = item.text;
        card.appendChild(text);

        if (item.tags && item.tags.length) {
          const tags = document.createElement('ul');
          tags.className = 'tag-list';
          item.tags.forEach(t => {
            const li = document.createElement('li');
            li.textContent = t;
            tags.appendChild(li);
          });
          card.appendChild(tags);
        }

        grid.appendChild(card);
      });
    })
    .catch(err => console.error('Failed to load research interests:', err));
});
