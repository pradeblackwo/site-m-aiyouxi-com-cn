const config = {
  siteUrl: 'https://site-m-aiyouxi.com.cn',
  keyword: '爱游戏',
  cardTitle: '站点说明',
  cardContent: '欢迎来到爱游戏内容展示页，您可以通过关键词徽章快速了解本站的主题方向。',
  badgeText: ['爱游戏', '互动娱乐', '玩家社区', '攻略分享'],
  instructions: '访问站点时请保持网络畅通，推荐使用最新版浏览器以获得最佳体验。'
};

function createCard() {
  const card = document.createElement('div');
  card.className = 'site-helper-card';
  card.style.cssText = 'background: #f0f4f8; border: 1px solid #d0d7de; border-radius: 12px; padding: 20px; margin: 16px 0; box-shadow: 0 2px 6px rgba(0,0,0,0.08);';
  const title = document.createElement('h3');
  title.textContent = config.cardTitle;
  title.style.cssText = 'margin: 0 0 8px; font-size: 1.2em; color: #1f2937;';
  const content = document.createElement('p');
  content.textContent = config.cardContent;
  content.style.cssText = 'margin: 0 0 12px; color: #374151; line-height: 1.5;';
  card.appendChild(title);
  card.appendChild(content);
  return card;
}

function createBadge(text) {
  const badge = document.createElement('span');
  badge.className = 'keyword-badge';
  badge.textContent = text;
  badge.style.cssText = 'display: inline-block; background: #e0e7ff; color: #3730a3; padding: 4px 12px; margin: 4px 6px 4px 0; border-radius: 16px; font-size: 0.85em; font-weight: 500;';
  return badge;
}

function createBadgeContainer() {
  const container = document.createElement('div');
  container.className = 'badge-container';
  container.style.cssText = 'margin: 12px 0;';
  config.badgeText.forEach(function(badgeText) {
    const badge = createBadge(badgeText);
    container.appendChild(badge);
  });
  return container;
}

function createInstruction() {
  const instruction = document.createElement('p');
  instruction.className = 'access-instruction';
  instruction.textContent = config.instructions;
  instruction.style.cssText = 'margin: 12px 0; color: #4b5563; font-size: 0.9em; border-left: 4px solid #6366f1; padding-left: 10px; background: #f9fafb; border-radius: 4px; line-height: 1.6;';
  return instruction;
}

function createLinkHint() {
  const linkHint = document.createElement('p');
  linkHint.className = 'site-link-hint';
  const link = document.createElement('a');
  link.href = config.siteUrl;
  link.textContent = '访问 ' + config.siteUrl;
  link.target = '_blank';
  link.style.cssText = 'color: #2563eb; text-decoration: underline; font-weight: 500;';
  linkHint.appendChild(link);
  linkHint.style.cssText = 'margin: 8px 0; font-size: 0.9em;';
  return linkHint;
}

function initSiteHelper() {
  const container = document.getElementById('site-helper-root');
  if (!container) {
    console.warn('未找到挂载元素 #site-helper-root，跳过渲染');
    return;
  }
  const wrapper = document.createElement('div');
  wrapper.className = 'site-helper-wrapper';
  wrapper.style.cssText = 'max-width: 600px; margin: 0 auto;';
  const card = createCard();
  const badgeContainer = createBadgeContainer();
  const instruction = createInstruction();
  const linkHint = createLinkHint();
  wrapper.appendChild(card);
  wrapper.appendChild(badgeContainer);
  wrapper.appendChild(instruction);
  wrapper.appendChild(linkHint);
  container.appendChild(wrapper);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSiteHelper);
} else {
  initSiteHelper();
}