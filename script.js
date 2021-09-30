const notices = [
    {
        date: '04 de ago, 2021',
        title: 'Agora é oficial: o Windows 11 está vindo',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omni possimus veniam similique asperiores expedita totam excepturi nihil, perspiciatis ex velit rem numquam dolor dignissimos eius modi soluta iure ducimus ea.'
    },
    {
        date: '02 de jul, 2021',
        title: 'Agora é oficial: o Windows 11 está vindo',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omni possimus veniam similique asperiores expedita totam excepturi nihil, perspiciatis ex velit rem numquam dolor dignissimos eius modi soluta iure ducimus ea.'
    },
    {
        date: '11 de jul, 2021',
        title: 'Agora é oficial: o Windows 11 está vindo',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omni possimus veniam similique asperiores expedita totam excepturi nihil, perspiciatis ex velit rem numquam dolor dignissimos eius modi soluta iure ducimus ea.'
    },
    {
        date: '28 de set, 2021',
        title: 'Agora é oficial: o Windows 11 está vindo',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omni possimus veniam similique asperiores expedita totam excepturi nihil, perspiciatis ex velit rem numquam dolor dignissimos eius modi soluta iure ducimus ea.'
    },
]

const DOM = {
    addNotice(notice) {
        const ul = document.querySelector('#notices')
        const li = document.createElement('li')

        li.innerHTML = DOM.NoticeInnerHTML(notice)

        ul.appendChild(li)
    },

    NoticeInnerHTML(notice) {
        const html = `
        <div class="box-notice">
            <div class="header-news">
                <p class="news-date">${notice.date}</p>
                <img
                    class="icon-favorite"
                    src="./assets/icon-favorite.svg"
                    alt=""
                />
            </div>
            <h3 class="news-title">${notice.title}</h3>
            <p class="news-content">
                ${notice.content}
            </p>
        </div>
        `
        return html
    }
}

notices.forEach((notice) => {
    DOM.addNotice(notice)
})

