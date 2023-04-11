import { CustomButton } from "@/src/components/common/buttons/CutomButton"
import { CustomInput } from "@/src/components/common/inputs/CustomInput"

export const MatkScore = () => {
    const onChangeValue = (score: string, id: string) => {

    }

    return (
        <div className="bg-white w-full" style={{ padding: "21px 14px 0 14px" }}>
            <div className="">
                <div className="flex font-normal flex-start">
                    <div className="w-3/12">NHẬP ĐIỂM</div>
                    <div className="w-6/12">
                        HỌC KỲ: <span className="text-red-600">Học kỳ 1</span>
                    </div>
                    <div className="w-3/12 flex justify-around">
                        <div className="w-5/12">
                            <CustomButton label="Xác nhận" />
                        </div>
                        <div className="w-5/12">
                            <CustomButton label="Nhập lại" />
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-3/12">Lớp học: <span className="text-red-600">Lớp 1</span>
                    </div>
                    <div>Môn học: <span className="text-red-600">Môn Toán</span></div>
                </div>
                <table className="w-full border mt-7">
                    <tbody>
                        <tr className="bg-slate-300" style={{ backgroundColor: "#EDF2F7;" }}>
                            <th>#</th>
                            <th>Tên học sinh</th>
                            <th>Mã học sinh</th>
                            <th>Điểm số</th>
                        </tr>
                        <tr className="text-center">
                            <td className="py-2 border-e border-b">
                                01
                            </td>
                            <td className="py-2 border-e border-b">
                                SV 01
                            </td>
                            <td className="py-2 border-e border-b">
                                SV 01
                            </td>
                            <td className="py-2 border-e border-b w-4/12 px-4">
                                <CustomInput placeholder="" onChange={onChangeValue} tabIndex={0}/>
                            </td>
                        </tr>
                        <tr className="text-center">
                            <td className="py-2 border-e border-b">
                                01
                            </td>
                            <td className="py-2 border-e border-b">
                                SV 01
                            </td>
                            <td className="py-2 border-e border-b">
                                SV 01
                            </td>
                            <td className="py-2 border-e border-b w-4/12 px-4">
                                <CustomInput placeholder="" onChange={onChangeValue} />
                            </td>
                        </tr>
                        <tr className="text-center">
                            <td className="py-2 border-e border-b">
                                01
                            </td>
                            <td className="py-2 border-e border-b">
                                SV 01
                            </td>
                            <td className="py-2 border-e border-b">
                                SV 01
                            </td>
                            <td className="py-2 border-e border-b w-4/12 px-4">
                                <CustomInput placeholder="" onChange={onChangeValue} />
                            </td>
                        </tr>
                        <tr className="text-center">
                            <td className="py-2 border-e border-b">
                                01
                            </td>
                            <td className="py-2 border-e border-b">
                                SV 01
                            </td>
                            <td className="py-2 border-e border-b">
                                SV 01
                            </td>
                            <td className="py-2 border-e border-b w-4/12 px-4">
                                <CustomInput placeholder="" onChange={onChangeValue} />
                            </td>
                        </tr>
                        <tr className="text-center">
                            <td className="py-2 border-e border-b">
                                01
                            </td>
                            <td className="py-2 border-e border-b">
                                SV 01
                            </td>
                            <td className="py-2 border-e border-b">
                                SV 01
                            </td>
                            <td className="py-2 border-e border-b w-4/12 px-4">
                                <CustomInput placeholder="" onChange={onChangeValue} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}