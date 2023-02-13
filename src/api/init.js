import request from "@/utils/request"


export const getArticleById = (data) => {
    return request({
        method:"get",
        url:"/article/"+data.id,
    })
}