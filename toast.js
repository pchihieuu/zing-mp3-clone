// Toast function
function toast ({
    title = ' ', 
    message = ' ', 
    type = 'info', 
    duration = 3000
}) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');

        const autoRemoveId = setTimeout (function () {
            main.removeChild(toast);
        }, duration + 1500)

        toast.onclick = function(e) {
            if(e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        }

        const icons = {
            notification: 'bi bi-bell-fill',
            success: 'bi bi-check-circle-fill',
            info: 'bi bi-info-circle-fill',
            warning: 'bi bi-exclamation-circle-fill',
            error: 'bi bi-exclamation-circle-fill'
        };

        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);
        
        toast.classList.add('toast',`toast--${type}`);
        toast.style.animation = `slideInleft ease 0.3s, fadeOut 1.5s ${delay}s forwards`
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="bi bi-x-lg"></i>        
            </div>
            `;
        main.appendChild(toast);
    }
}




function showNotificationToast(message) {
    toast({
        title: 'Thông báo',
        message: message,
        type: 'notification',
        duration: 3000
    })
}
