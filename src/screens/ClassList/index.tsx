import { Pagination } from "@/src/components/common/Pagination"
import { CustomButton } from "@/src/components/common/buttons/CutomButton"
import { Student, getStudentById } from "@/src/https/connect_server"
import router, { useRouter } from "next/router"
import { useEffect, useState } from "react"
import axios from "axios"
import { CustomInput } from "@/src/components/common/inputs/CustomInput"

export const Classlist= () => {
    const [currentPage, setCurrentPage] = useState(1)
    const onChange = () => {

    }
    const router = useRouter()
    const [student, setStudent] = useState<[Student]>()

    
    // const getData = async () => {
    //     return await axios.get(`https://localhost:7222/api/student/L6A`).then ( (response) => {
    //         return {
    //             status: response.status,
    //             data: response.data
    //         }
    //     }).catch((error) =>{
    //         console.log(error)
    //         return {
    //             status: error.status,
    //             data: error.response
    //         }
    //     })
    // }
    useEffect(() => {
        getStudentById('L6A').then( (response) => {
            setStudent(response.data)
        })
    }, [])
    

    return (
        <div className="bg-white w-full" style={{ padding: "21px 14px 0 14px" }}>
            <div className="">
                <div className="flex">
                    <div className="w-8/12">
                        Danh Sách Học Sinh
                    </div>
                    <div className="w-4/12 flex">
                        <div className="w-7/12">
                            <CustomInput onChange={onChange} placeholder="Tìm kiếm" />
                        </div>
                        <div className="w-4/12 ml-2 mt-2">
                            <CustomButton label="Tìm kiếm" onClick={() => {}} variant="background"/>
                        </div>
                    </div>
                </div>
                <table className="w-full border mt-7">
                    <tbody>
                        <tr className="bg-slate-300" style={{ backgroundColor: "#EDF2F7;" }}>
                            <th>#</th>
                            <th>Mã học sinh</th>
                            <th>Name</th>
                            <th>Giới Tính</th>
                            <th>Địa Chỉ</th>
                            <th>Dân Tộc</th>
                            <th>Tôn Giáo</th>
                            <th>Ngày Sinh</th>
                        </tr>
                        {
                            student != null && student != undefined? 
                            student!.map((e, index) => {
                                return <tr className="text-center" key={index}>
                                <td className="py-4 border-e border-b">
                                    {index + 1}
                                </td>
                                <td className="py-4 border-e border-b">
                                    {e.id}
                                </td>
                                <td className="py-4 border-e border-b">
                                    {e.name}
                                </td>
                                <td className="py-4 border-e border-b">
                                    {e.gioitinh}
                                </td>
                                <td className="py-4 border-e border-b">
                                    {e.diachi}
                                </td>
                                <td className="py-4 border-e border-b">
                                    {e.dantoc}
                                </td>
                                <td className="py-4 border-e border-b">
                                    {e.tongiao}
                                </td>
                                <td className="py-4 border-e border-b">
                                    {e.ngaysinh?.toString()}
                                </td>
                               
                               {/* <td className="w-6/12 px-1">
                                    <CustomButton label="Nhập điểm" onClick={() => router.push('/mark-score')} variant="background"/>
                                </td> */}
                            </tr>
                            }): null
                        }
                    </tbody>
                </table>
            </div>
            <div className="mt-5">
                <Pagination
                    currentPage={currentPage}
                    persistOnUrl={false}
                    totalRecords={1000}
                    pageSize={10}
                    onChangePage={(page) => {
                        setCurrentPage(page)
                    }}
                />
            </div>
        </div>
    )
}

function setStudent(data: any) {
    throw new Error("Function not implemented.")
}
