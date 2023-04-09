import { Pagination } from "@/src/components/common/Pagination"
import { CustomButton } from "@/src/components/common/buttons/CutomButton"
import { useRouter } from "next/router"
import { useState } from "react"

export const ListClass = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const router = useRouter()

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
                            <th>Khối</th>
                        </tr>
                        <tr className="text-center">
                            <td className="py-4 border-e border-b">
                                01
                            </td>
                            <td className="py-4 border-e border-b">
                                SV 01
                            </td>
                            <td className="py-4 border-e border-b">
                                Nam bc
                            </td>
                            <td className="py-4 border-e border-b">
                                0387264736473
                            </td>
                            <td className="py-4 border-e border-b">
                                nambc@gmail.com
                            </td>
                        </tr>
                        <tr className="text-center">
                            <td className="py-4 border-e border-b">
                                01
                            </td>
                            <td className="py-4 border-e border-b">
                                SV 01
                            </td>
                            <td className="py-4 border-e border-b">
                                Nam bc
                            </td>
                            <td className="py-4 border-e border-b">
                                0387264736473
                            </td>
                            <td className="py-4 border-e border-b">
                                nambc@gmail.com
                            </td>
                        </tr>
                        <tr className="text-center">
                            <td className="py-4 border-e border-b">
                                01
                            </td>
                            <td className="py-4 border-e border-b">
                                SV 01
                            </td>
                            <td className="py-4 border-e border-b">
                                Nam bc
                            </td>
                            <td className="py-4 border-e border-b">
                                0387264736473
                            </td>
                            <td className="py-4 border-e border-b">
                                nambc@gmail.com
                            </td>
                        </tr>
                        <tr className="text-center">
                            <td className="py-4 border-e border-b">
                                01
                            </td>
                            <td className="py-4 border-e border-b">
                                SV 01
                            </td>
                            <td className="py-4 border-e border-b">
                                Nam bc
                            </td>
                            <td className="py-4 border-e border-b">
                                0387264736473
                            </td>
                            <td className="py-4 border-e border-b">
                                nambc@gmail.com
                            </td>
                        </tr>
                        <tr className="text-center">
                            <td className="py-4 border-e border-b">
                                01
                            </td>
                            <td className="py-4 border-e border-b">
                                SV 01
                            </td>
                            <td className="py-4 border-e border-b">
                                Nam bc
                            </td>
                            <td className="py-4 border-e border-b">
                                0387264736473
                            </td>
                            <td className="py-4 border-e border-b">
                                nambc@gmail.com
                            </td>
                        </tr>
                        <tr className="text-center">
                            <td className="py-4 border-e border-b">
                                01
                            </td>
                            <td className="py-4 border-e border-b">
                                SV 01
                            </td>
                            <td className="py-4 border-e border-b">
                                Nam bc
                            </td>
                            <td className="py-4 border-e border-b">
                                0387264736473
                            </td>
                            <td className="py-4 border-e border-b">
                                nambc@gmail.com
                            </td>
                        </tr>
                        <tr className="text-center">
                            <td className="py-4 border-e border-b">
                                01
                            </td>
                            <td className="py-4 border-e border-b">
                                SV 01
                            </td>
                            <td className="py-4 border-e border-b">
                                Nam bc
                            </td>
                            <td className="py-4 border-e border-b">
                                0387264736473
                            </td>
                            <td className="py-4 border-e border-b">
                                nambc@gmail.com
                            </td>
                        </tr>
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