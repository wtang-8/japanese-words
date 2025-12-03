/* Tooltip hover interactions for words */
(function(){
  const list = document.getElementById('word-list');
  const tooltip = document.getElementById('tooltip');
  const searchInput = document.getElementById('search-input');
  const onomatopeToggle = document.getElementById('onomatope-toggle');
  let allWordElements = [];

  function renderWords(){
    list.innerHTML = '';
    allWordElements = [];
    
    WORDS.forEach((item) => {
      const li = document.createElement('li');
      li.className = 'word-item';
      li.innerHTML = `
        <div class="word" aria-label="${item.reading}">${item.word}</div>
        <div class="definition">${item.definition}</div>
      `;

      li.addEventListener('click', (e) => toggleWordReveal(e.currentTarget, item));

      li.dataset.wordData = JSON.stringify(item);
      list.appendChild(li);
      allWordElements.push({element: li, data: item});
    });
  }

  function applyFilters(){
    const searchQuery = searchInput.value.toLowerCase().trim();
    const onomatopeOnly = onomatopeToggle.checked;
    
    allWordElements.forEach(({element, data}) => {
      let visible = true;
      
      // Category filter
      if (onomatopeOnly && data.category !== 'onomatope') {
        visible = false;
      }
      
      // Search filter
      if (visible && searchQuery) {
        const matchesExamples = data.examples.some(ex => 
          ex.jp.toLowerCase().includes(searchQuery) || 
          ex.en.toLowerCase().includes(searchQuery)
        );
        
        const matchesWord = data.word.toLowerCase().includes(searchQuery) ||
                           data.reading.toLowerCase().includes(searchQuery) ||
                           data.definition.toLowerCase().includes(searchQuery);
        
        visible = matchesExamples || matchesWord;
      }
      
      element.style.display = visible ? '' : 'none';
    });
  }

  searchInput.addEventListener('input', applyFilters);
  onomatopeToggle.addEventListener('change', applyFilters);

  let activeElement = null;

  function toggleWordReveal(target, item){
    // Close previously active card
    if (activeElement && activeElement !== target) {
      activeElement.classList.remove('active');
      hideTooltip();
    }

    // Toggle current card
    const isActive = target.classList.toggle('active');
    
    if (isActive) {
      activeElement = target;
      showTooltip(target, item);
    } else {
      activeElement = null;
      hideTooltip();
    }
  }

  function showTooltip(target, item){
    tooltip.innerHTML = `
      <h3>${item.word} ・ ${item.reading}</h3>
      <p class="def">${item.definition}</p>
      <div class="ex"><span class="jp">${item.examples[0].jp}</span><br><span class="en">${item.examples[0].en}</span></div>
      <div class="ex"><span class="jp">${item.examples[1].jp}</span><br><span class="en">${item.examples[1].en}</span></div>
      <div class="ex"><span class="jp">${item.examples[2].jp}</span><br><span class="en">${item.examples[2].en}</span></div>
    `;
    tooltip.classList.add('visible');
    tooltip.setAttribute('aria-hidden', 'false');
    positionTooltip(target);
  }

  function hideTooltip(){
    tooltip.classList.remove('visible');
    tooltip.setAttribute('aria-hidden', 'true');
  }

  function positionTooltip(target){
    const rect = target.getBoundingClientRect();
    const padding = 12;
    const width = tooltip.offsetWidth;
    const height = tooltip.offsetHeight;

    let left = rect.right + padding;
    let top = rect.top;

    // If tooltip goes off right edge, position to left of card
    if (left + width > window.innerWidth - padding) {
      left = rect.left - width - padding;
    }

    // If tooltip goes off bottom, adjust up
    if (top + height > window.innerHeight - padding) {
      top = window.innerHeight - height - padding;
    }

    // If tooltip goes off left, position to right of card
    if (left < padding) {
      left = rect.right + padding;
    }

    tooltip.style.left = left + 'px';
    tooltip.style.top = top + 'px';
  }

  // Close tooltip when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.word-item') && !e.target.closest('.tooltip')) {
      if (activeElement) {
        activeElement.classList.remove('active');
        activeElement = null;
        hideTooltip();
      }
    }
  });

  renderWords();
})();
