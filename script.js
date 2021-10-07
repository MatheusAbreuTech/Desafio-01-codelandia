const notices = [
    {
        date: '04 de ago, 2021',
        title: 'Tim Berners-Lee vai leiloar código-fonte da web',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omni possimus veniam similique asperiores expedita totam excepturi nihil, perspiciatis ex velit rem numquam dolor dignissimos eius modi soluta iure ducimus ea.'
    },
    {
        date: '02 de jul, 2021',
        title: 'Tem Firefox novo no pedaço e você vai querer migrar',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omni possimus veniam similique asperiores expedita totam excepturi nihil, perspiciatis ex velit rem numquam dolor dignissimos eius modi soluta iure ducimus ea.'
    },
    {
        date: '11 de jul, 2021',
        title: 'John McAfee, criador do antivírus McAfee, morre',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omni possimus veniam similique asperiores expedita totam excepturi nihil, perspiciatis ex velit rem numquam dolor dignissimos eius modi soluta iure ducimus ea.'
    },
    {
        date: '28 de set, 2021',
        title: 'Agora é oficial: o Windows 11 está vindo',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omni possimus veniam similique asperiores expedita totam excepturi nihil, perspiciatis ex velit rem numquam dolor dignissimos eius modi soluta iure ducimus ea.'
    },
]

const DOM = {
    listNotices: document.querySelector('#notices'),
    addNotice(notice) {
        const li = document.createElement('li')

        li.innerHTML = DOM.NoticeInnerHTML(notice)

        DOM.listNotices.appendChild(li)
    },

    NoticeInnerHTML(notice) {
        const html = `
        <div class="box-notice">
            <div class="header-news">
                <p class="news-date">${notice.date}</p>
                <i class="far fa-heart" data-like></i>
            </div>
            <h3 class="news-title">${notice.title}</h3>
            <p class="news-content">
                ${notice.content}
            </p>
        </div>
        `
        return html
    },

    liked() {
        
        let likes = document.querySelectorAll('[data-like]');

        likes.forEach((like) => {
            like.addEventListener("click", () => likedItem(like));
        });

        function likedItem(item) {
            if (item.classList.contains('far')) {
                item.classList.remove('far');
                item.classList.add('fas')
            } else {
                item.classList.remove('fas');
                item.classList.add('far')
            }
        }
    },
}

const animate = () => {
    const sr = ScrollReveal({
        origin: 'left',
        distance: '100px',
        duration: 2000,
        reset: true
    });

    ScrollReveal().reveal('.box-notice', { delay: 200 });
}

notices.forEach((notice) => {
    DOM.addNotice(notice)
})

animate()
DOM.liked()