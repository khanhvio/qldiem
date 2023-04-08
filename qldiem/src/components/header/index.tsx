import { CustomInput } from "../common/inputs/CustomInput"

export const HeaderCommon = () => {
    const onChange = (value: string) => {

    }
    return (
        <div className="h-20 bg-white w-10/12 flex justify-around">
            <div className="flex justify-between w-4/12 pl-4">
                <div className="leading-loose text-base text-slate-500 font-sans pt-6">
                    Dashboard overview
                </div>
                <div className="mt-2">
                    <CustomInput onChange={onChange} placeholder="Search all"/>
                </div>
            </div>
            <div className="flex w-8/12 justify-end mt-3 mr-3">
                <div className="cursor-pointer">
                    <img src="./images/avatar.png"/>
                </div>
            </div>
        </div>
    )
}