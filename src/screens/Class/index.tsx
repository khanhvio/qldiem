import { Pagination } from "@/src/components/common/Pagination"
import { CustomButton } from "@/src/components/common/buttons/CutomButton"
import { Classes, getClassesById } from "@/src/https/connect_server"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import axios from "axios"

export const ListClass = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const router = useRouter()
    const [classes, setClasses] = useState<[Classes]>()
    

    useEffect(() => {
        getClassesById('GV01').then( (response) => {
            setClasses(response.data)
        })
    }, [])
    

    return (
        <div className="bg-white w-full" style={{ padding: "21px 14px 0 14px" }}>
            <div className="">
                <div className="flex justify-around">
                    <div className="font-normal flex-start w-6/12">
                        LỚP HỌC
                    </div>
                    <div className="justify-end flex-end w-6/12 flex">
                        <div className="w-6/12 flex justify-around">
                            <CustomButton label="Nhập điểm" onClick={() => router.push('/mark-score')} variant="background"/>
                            <CustomButton label="Đánh giá hạnh kiểm" onClick={() => router.push('/mark-score')} variant="background"/>
                        </div>
                    </div>
                </div>
                <table className="w-full border mt-7">
                    <tbody>
                        <tr className="bg-slate-300" style={{ backgroundColor: "#EDF2F7;" }}>
                            <th>#</th>
                            <th>Mã lớp học</th>
                            <th>Tên lớp học</th>
                            <th>Năm học</th>
                            <th>Sĩ số</th>
                            <th>Tên giáo viên chủ nhiệm</th>
                            <th>Chức năng </th>
                        </tr>
                        {
                            classes != null && classes != undefined? 
                            classes!.map((e, index) => {
                                return <tr className="text-center" key={index}>
                                <td className="py-4 border-e border-b">
                                    {index + 1}
                                </td>
                                <td className="py-4 border-e border-b">
                                    {e.malop}
                                </td>
                                <td className="py-4 border-e border-b">
                                    {e.tenLop}
                                </td>
                                <td className="py-4 border-e border-b">
                                    {e.namHoc}
                                </td>
                                <td className="py-4 border-e border-b">
                                    {e.siSo?.toString()}
                                </td>
                                <td className="py-4 border-e border-b">
                                    {e.tenGiaoVien}
                                </td>
                               <td className="w-1/12 px-3">
                               <td className="w-6/12 px-1">
                                    <CustomButton label="Nhập điểm" onClick={() => router.push('/mark-score')} variant="background"/>
                                </td>
                                <td className="w-6/12 px-1">
                                    <CustomButton label="Danh sách" onClick={() => router.push('/class-list')} variant="background"/>
                                </td>
                               </td>
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