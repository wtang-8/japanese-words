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

      li.addEventListener('mouseenter', (e) => showTooltip(e.currentTarget, item));
      li.addEventListener('mousemove', positionTooltip);
      li.addEventListener('mouseleave', hideTooltip);

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
    positionTooltip();
  }

  function hideTooltip(){
    tooltip.classList.remove('visible');
    tooltip.setAttribute('aria-hidden', 'true');
  }

  function positionTooltip(ev){
    const e = ev || window.event;
    const x = e && e.clientX ? e.clientX : (window.innerWidth / 2);
    const y = e && e.clientY ? e.clientY : (window.innerHeight / 2);
    const padding = 12;
    const width = tooltip.offsetWidth;
    const height = tooltip.offsetHeight;

    let left = x + padding;
    let top = y + padding;

    if (left + width > window.innerWidth - padding) {
      left = x - width - padding;
    }
    if (top + height > window.innerHeight - padding) {
      top = y - height - padding;
    }

    tooltip.style.left = left + 'px';
    tooltip.style.top = top + 'px';
  }

  renderWords();
})();
