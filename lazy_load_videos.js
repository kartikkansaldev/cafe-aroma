function initVideoLazyLoad() {
    const premiumVideos = document.querySelectorAll('.premium-video-bg');

    if ('IntersectionObserver' in window) {
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const video = entry.target;
                if (entry.isIntersecting) {
                    if (!video.src && video.dataset.src) {
                        video.src = video.dataset.src;
                        video.muted = true;
                        video.load();
                    }
                    const playPromise = video.play();
                    if (playPromise !== undefined) {
                        playPromise.catch(e => console.log('Autoplay prevented:', e));
                    }
                } else {
                    if (video.src) {
                        video.pause();
                    }
                }
            });
        }, {
            rootMargin: "200px 0px 200px 0px",
            threshold: 0
        });

        premiumVideos.forEach(video => {
            videoObserver.observe(video);
        });
    } else {
        premiumVideos.forEach(video => {
            if (!video.src && video.dataset.src) {
                video.src = video.dataset.src;
                video.muted = true;
                video.play();
            }
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initVideoLazyLoad);
} else {
    initVideoLazyLoad();
}
