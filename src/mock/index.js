if (process.env.NODE_ENV !== 'production') {
    const Mock = require('mockjs2')

    require('./services/user')
    require('./services/list')
    Mock.setup({
        timeout: 800 // setter delay time
    })

    console.log('[antd-pro] mock mounted')
}
