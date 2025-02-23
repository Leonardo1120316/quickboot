import { router } from '@/router'
import NProgress from 'nprogress'

router.beforeEach(async (to, _from, next) => {
    NProgress.start()
    // 未登录
})