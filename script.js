// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Copy citation to clipboard
function copyToClipboard() {
    const citationText = `@article{zou2024d2ppo,
  title={D²PPO: Diffusion Policy Policy Optimization with Dispersive Loss for Enhanced Robotic Learning},
  author={Zou, Guowei and Name, Collaborator},
  journal={arXiv preprint arXiv:2024.xxxxx},
  year={2024}
}`;
    
    navigator.clipboard.writeText(citationText).then(() => {
        const copyBtn = document.querySelector('.copy-btn');
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        copyBtn.style.background = '#28a745';
        
        setTimeout(() => {
            copyBtn.innerHTML = originalText;
            copyBtn.style.background = '#667eea';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy citation: ', err);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = citationText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        const copyBtn = document.querySelector('.copy-btn');
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        copyBtn.style.background = '#28a745';
        
        setTimeout(() => {
            copyBtn.innerHTML = originalText;
            copyBtn.style.background = '#667eea';
        }, 2000);
    });
}





