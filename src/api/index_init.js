import request from "@/utils/request"

export const getChannel = () => {
    return request({
        method:"get",
        url:"/index/channel",
    })
}

export const getLastArticle = () => {
    return request({
        method:"get",
        url:"/index/lastArticle",
    })
}
