module.exports = {
    title: '开发文档doc',  // 文档标题，左上角显示
    description: '文档描述',
    base: './', // 这里写你的仓库名称
    head: [
        ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `/3213.ico` }]
    ], //这里配置你的网页头部信息等
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '官网', items: [
              { text: '官网', link: 'https://tocode.store' },
              { text: '博客', link: 'https://skymee.top' },
            ] }
          ],
        /**
         * 设置侧边栏最大深度
         * 一般是以单个md文件中的 # ## ### #### 这几个标题文字为锚点自动生成导航
         * **/
        sidebarDepth: 100,
        // 设置侧边栏内容
        sidebar: [
            {
                title: 'wordpress相关',
                collapsable: true,  // 是否具有展开收起功能
                children: ['/firstslde/']  // 这个是根据自己的需求来订，对应自己在docs下的文件夹名，默认首页是README.md
            },
            {
                title: '快速上手',
                collapsable: true,
                children: ['/two/','/two/hjdj']
            }
        ]
    }
}