export const http = {
    method: 'get',
    baseURL: 'http://120.78.158.34/',
    // 请求头信息
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    },
    timeout: 6000,
    // 跨域
    withCredentials: true,
    responseType: 'json'
}

export let showCityNum = 0

export const BSConfigX = {
    scrollX: true,
    eventPassthrough: "vertical",
    bounceTime: 400,
    click: true,
}

export const BSConfigY = {
    // eventPassthrough: "vertical",
    bounceTime: 400,
    click: true
}



/**
 * 
 *  SEO---->  title、keywords、description
 * 
 */

if (sessionStorage.getItem('vuex')) {
    var state = JSON.parse(sessionStorage.getItem('vuex')).cityName || '深圳'
} else {
    var state = '深圳'
}

export const SEOConfig = {
    home: {
        title: `【去海外网】${state}海外房产，${state}海外移民，${state}留学_游学，就上去海外网`,
        keywords: `${state}海外移民，${state}海外房产，${state}海外留学，${state}海外游学，${state}海外医疗，${state}24h快讯，海外热点资讯`,
        description: `${state}去海外网，为你提供${state}海外房产、${state}海外移民、${state}海外留学、${state}海外游学、深圳海外旅游、深圳海外医疗、海外热门资讯内容等服务,深圳去海外网为用户打造一个服务全面、智能化的海外房产、移民、留学、游学、医疗、旅游信息平台`,
    },

    house: {
        title: "海外买房_海外房产投资_海外房产移民-就上【去海外网】",
        keywords: '美国房产，英国房产，加拿大房产，泰国房产，澳大利亚房产，美国买房，英国买房，加拿大买房，泰国买房，澳大利亚买房，海外买房费用、买房政策、买房条件、买房流程',
        description: "去海外网，为您提供精选海外房产、实时更新海外房价、海外购房政策、海外房产资讯、海外房产投资等信息",
    },
    immigrant: {
        title: "移民_海外移民_移民公司排名_海外移民-就上【去海外网】",
        keywords: '美国移民，英国移民，加拿大移民，澳大利亚移民，移民项目、移民费用、移民条件、移民政策、移民流程、去海外网',
        description: "去海外网，海外移民首选咨询服务平台，为您提供全方位投资移民,雇主移民,技术移民,购房移民的相关资讯,，想了解更多海外移民资讯就上去海外网",
    },
    study: {
        title: '留学_海外留学_出国留学-就上【去海外网】',
        keywords: '美国留学，英国留学，加拿大留学，澳大利亚留学，国外留学申请、留学条件、留学政策、',
        description: '去海外网，出国留学首选咨询服务平台，为您提供全方位留学，出国留学公司等留学权威资讯，想了解更多出国留学资讯就上去海外网。'
    },
    studytour: {
        title: '游学_海外游学_出国游学-就上【去海外网】',
        keywords: '美国游学，英国游学，加拿大游学，澳大利亚游学，海外游学条件海外、海外政策、海外游学流程、海外游学机构、海外游学机构排名、海外游学条件、海外游学费用、',
        description: '去海外网，出国游学首选咨询服务平台，为您提供全方位游学，出国游学公司等游学权威资讯，想了解更多出国游学资讯就上去海外网。'
    },

}

/** 
 * 
 * hot 模块划分
 * 
 */
export const hotModel = {
    hours: {
        title: "海外移民、房产、留学、游学资讯动态_政策解读_新闻资讯-去海外网",
        keywords: "房产、移民、留学政策,房产、移民、留学民资讯,房产资讯、移民资讯、移民条件、留学条件,,海外房产、移民、游学动态",
        description: "去海外网新闻资讯页面为您提供针对海外房产、海外移民、海外留学所涉及到的如各国政策信息、移民流程、办理入籍、教育医疗福利、海外生活、房产资讯、留学攻略、移民条件等海外出国相关的新闻动态"
    },
    house: {
        title: `海外房产指南，海外房产最新资讯-上去海外网`,
        keywords: `海外房产资讯，美国房产资讯，澳大利亚房产资讯，英国房产资讯，泰国房产资讯，24h海外房产资讯`,
        description: `去海外网，为您提供精选海外房产资讯、实时更新海外房价资讯、海外购房政策资讯、海外房产投资资讯等信息，更多精彩移民资讯，就上去海外网。`
    },
    studytour: {
        title: `海外游学指南，海外游学最新资讯-上去海外网`,
        keywords: `海外游学资讯，美国游学资讯，澳大利亚游学资讯，英国游学资讯，泰国游学资讯，24h海外游学资讯`,
        description: `去海外网，为您提供游学项目介绍资讯，游学申请条件资讯，游学申请流程资讯，游学政策资讯等内容，更多精彩游学资讯，就上去海外网。`
    },
    immig: {
        title: `海外移民指南，海外房产最新资讯-上去海外网`,
        keywords: `海外移民资讯，美国移民资讯，澳大利亚移民资讯，英国移民资讯，泰国移民资讯，24h海外移民资讯`,
        description: `去海外网，为您提供美国移民项目介绍资讯，美国移民申请条件资讯，美国移民申请流程资讯，美国移民政策资讯等内容，更多精彩移民资讯，就上去海外网。`
    },
    study: {
        title: `海外留学指南，海外留学最新资讯-上去海外网`,
        keywords: `海外留学资讯，美国留学资讯，澳大利亚留学资讯，英国留学资讯，泰国留学资讯，24h海外留学资讯`,
        description: `去海外网，为您提供留学项目介绍资讯，留学申请条件资讯，留学申请流程资讯，留学政策资讯等内容，更多精彩留学资讯，就上去海外网。`
    },
    yiliao: {
        title: `海外医疗指南，海外医疗最新资讯-上去海外网`,
        keywords: `海外医疗资讯，美国医疗资讯，澳大利亚医疗资讯，英国医疗资讯，泰国医疗资讯，24h海外医疗资讯`,
        description: `去海外网，为您提供医疗项目介绍资讯，医疗流程资讯，医疗政策资讯等内容，更多精彩医疗资讯，就上去海外网。`
    }
}


/** 
 * 微信分享
 */
export const logo = `http://120.78.158.34/qhw/2019.7.30/1564454959671-853.jpg`