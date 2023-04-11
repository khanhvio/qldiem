import axios from "axios"

export interface Classes {
    malop?: string,
    tenLop?: string
    siSo?: number,
    tenGiaoVien?: string,
    namHoc?: string
}

export const getClassesById = async (id: string) => {
    return await axios.get(`https://localhost:7222/api/teacher/${id}`).then ( (response) => {
        return {
            status: response.status,
            data: response.data
        }
    }).catch((error) =>{
        console.log(error)
        return {
            status: error.status,
            data: error.response
        }
    })
}

export interface Student {
    id?: string,
    name?: string,
    gioitinh?: string,
    diachi?: string,
    dantoc?: string,
    tongiao?: string,
    ngaysinh?: number
}
export const getStudentById = async (id: string) => {
    return await axios.get(`https://localhost:7222/api/student/${id}`).then ( (response) => {
        return {
            status: response.status,
            data: response.data
        }
    }).catch((error) =>{
        console.log(error)
        return {
            status: error.status,
            data: error.response
        }
    })
}