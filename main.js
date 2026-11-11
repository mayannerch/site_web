/**
 * Charlotte Doceria - Scripts Oficiais (Identidade Floral Romântica)
 * Interatividades, cálculo de horário em tempo real, seletor de categorias com cardápio de preços e utilitários
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Menu Mobile Drawer
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
      
      if (menuIcon && closeIcon) {
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
      }
    });

    // Fechar ao clicar fora
    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target) && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        if (menuIcon && closeIcon) {
          menuIcon.classList.remove('hidden');
          closeIcon.classList.add('hidden');
        }
      }
    });
  }

  // 2. Status de Funcionamento em Tempo Real (Segunda a Sábado, 14h às 19h)
  const statusBadgeContainers = document.querySelectorAll('.store-status-badge');
  if (statusBadgeContainers.length > 0) {
    const updateStoreStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
      const hour = now.getHours();
      const minute = now.getMinutes();
      const timeInMinutes = hour * 60 + minute;
      
      const isOpenDay = day >= 1 && day <= 6; // Segunda a Sábado
      const isOpenTime = timeInMinutes >= (14 * 60) && timeInMinutes < (19 * 60); // 14h às 19h

      let badgeHtml = '';

      if (isOpenDay && isOpenTime) {
        badgeHtml = `
          <span class="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-sm">
            <span class="w-2 h-2 mr-2 bg-emerald-500 rounded-full animate-ping"></span>
            <span class="w-2 h-2 mr-2 bg-emerald-500 rounded-full -ml-4"></span>
            Aberto agora • Atendendo até 19h
          </span>
        `;
      } else {
        let message = 'Fechado agora • Abre hoje às 14h';
        if (day === 0) {
          message = 'Fechado hoje • Abre segunda às 14h';
        } else if (timeInMinutes >= (19 * 60)) {
          if (day === 6) {
            message = 'Fechado agora • Abre segunda às 14h';
          } else {
            message = 'Fechado agora • Abre amanhã às 14h';
          }
        }
        badgeHtml = `
          <span class="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#FDE8EF] text-[#C5283D] border border-[#F6D3DE]">
            <span class="w-2 h-2 mr-2 bg-[#C5283D] rounded-full opacity-60"></span>
            ${message}
          </span>
        `;
      }

      statusBadgeContainers.forEach(container => {
        container.innerHTML = badgeHtml;
      });
    };

    updateStoreStatus();
    // Atualiza a cada 60 segundos
    setInterval(updateStoreStatus, 60000);
  }

  // 3. Seletor de Categorias e Exibição de Produtos & Preços (produtos.html)
  const categoryTabs = document.querySelectorAll('.category-tab-btn');
  const productCards = document.querySelectorAll('.product-item');
  const priceBoards = document.querySelectorAll('.category-price-board');

  if (categoryTabs.length > 0) {
    categoryTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const selectedCategory = tab.getAttribute('data-category');

        // Atualizar estado visual das abas
        categoryTabs.forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');

        // Exibir/Ocultar elemento decorativo com os preços correspondentes
        if (priceBoards.length > 0) {
          priceBoards.forEach(board => {
            const boardCategory = board.getAttribute('data-category');
            if (selectedCategory === 'all' || boardCategory === selectedCategory) {
              board.classList.remove('hidden');
              setTimeout(() => {
                board.style.opacity = '1';
                board.style.transform = 'translateY(0)';
              }, 40);
            } else {
              board.style.opacity = '0';
              board.style.transform = 'translateY(6px)';
              setTimeout(() => {
                board.classList.add('hidden');
              }, 200);
            }
          });
        }

        // Filtrar cards individuais de produtos
        if (productCards.length > 0) {
          productCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            if (selectedCategory === 'all' || cardCategory === selectedCategory) {
              card.style.display = 'flex';
              setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0) scale(1)';
              }, 50);
            } else {
              card.style.opacity = '0';
              card.style.transform = 'translateY(12px) scale(0.98)';
              setTimeout(() => {
                card.style.display = 'none';
              }, 250);
            }
          });
        }
      });
    });
  }

  // 4. Botão "Copiar Endereço" com Toast Feedback
  const copyAddressBtns = document.querySelectorAll('.btn-copy-address');
  const toastNotification = document.getElementById('copy-toast');

  if (copyAddressBtns.length > 0) {
    copyAddressBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const addressText = "Av. Rui Barbosa, 27 - térreo - Centro, em frente à Onofre Materiais de construção";
        navigator.clipboard.writeText(addressText).then(() => {
          if (toastNotification) {
            toastNotification.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
            toastNotification.classList.add('opacity-100', 'translate-y-0');
            
            setTimeout(() => {
              toastNotification.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
              toastNotification.classList.remove('opacity-100', 'translate-y-0');
            }, 3000);
          } else {
            alert('Endereço copiado para a área de transferência!');
          }
        }).catch(err => {
          console.error('Erro ao copiar endereço:', err);
        });
      });
    });
  }
});
