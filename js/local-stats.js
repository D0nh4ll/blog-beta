// 加载本地统计数据
async function loadLocalStats() {
    try {
        const response = await fetch('/data/stats.json');
        const stats = await response.json();
        
        // 更新 UV
        const uvElement = document.getElementById('local-site-uv');
        if (uvElement) {
            uvElement.textContent = stats.site_uv;
        }
        
        // 更新 PV
        const pvElement = document.getElementById('local-site-pv');
        if (pvElement) {
            pvElement.textContent = stats.site_pv;
        }
        
        // 更新页面 PV
        const pagePvElement = document.getElementById('local-page-pv');
        if (pagePvElement) {
            pagePvElement.textContent = stats.page_pv;
        }
    } catch (error) {
        console.error('加载统计数据失败:', error);
    }
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', loadLocalStats); 