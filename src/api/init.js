import request from "@/utils/request"

export const getTypes = () => {
    return request({
        method:"get",
        url:"/types",
    })
}