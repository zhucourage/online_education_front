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


export const getHotArticle = pageNum => {
    return request({
        method:"get",
        url:"/index/hotArticle?pageNum=" + pageNum + "&pageSize=1",
    })
}
