import request from "@/utils/request"

export const getTypes = () => {
    return request({
        method:"get",
        url:"/types",
    })
}

export const getArticleById = (data) => {
    return request({
        method:"get",
        url:"/article/"+data.id,
    })
}