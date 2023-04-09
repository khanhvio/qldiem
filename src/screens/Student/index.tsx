import { Pagination } from "@/src/components/common/Pagination"
import { CustomButton } from "@/src/components/common/buttons/CutomButton"
import { CustomInput } from "@/src/components/common/inputs/CustomInput"
import { useState } from "react"

export const ListStudent = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const onChange = () => {

    }

    return (
        <div className="bg-white w-full" style={{ padding: "21px 14px 0 14px" }}>
            <div className="">
                <div className="flex">
                    <div className="w-8/12">
                        SINH VIÊN
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
                            <th>Mã sinh viên</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Class</th>
                            <th>Chức năng</th>
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
                            <td className="py-4 border-e border-b">
                                class 1
                            </td>
                            <td className="py-4 border-e border-b">
                                Nhập điểm
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
                            <td className="py-4 border-e border-b">
                                class 1
                            </td>
                            <td className="py-4 border-e border-b">
                                Nhập điểm
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
                            <td className="py-4 border-e border-b">
                                class 1
                            </td>
                            <td className="py-4 border-e border-b">
                                Nhập điểm
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
                            <td className="py-4 border-e border-b">
                                class 1
                            </td>
                            <td className="py-4 border-e border-b">
                                Nhập điểm
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
                            <td className="py-4 border-e border-b">
                                class 1
                            </td>
                            <td className="py-4 border-e border-b">
                                Nhập điểm
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