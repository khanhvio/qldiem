import { CustomButton } from "@/src/components/common/buttons/CutomButton"
import { CustomInput } from "@/src/components/common/inputs/CustomInput"
import { useLoginFormValidator } from "@/src/hooks/useLoginFormValidator"
import { FormLoginType } from "@/src/utils/type"
import { useRouter } from "next/router"
import { ChangeEvent, useState } from "react"

export const LoginPage = () => {
    const router = useRouter()
    const [formInput, setFormInput] = useState<FormLoginType>({
        email: '',
        password: '',
    })
    const { errors, validateForm, onBlurField } = useLoginFormValidator(formInput)

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const field = e.target.name
        const nextFormState = {
            ...formInput,
            [field]: e.target.value,
        }
        setFormInput(nextFormState)
        if (errors[field].dirty) {
            validateForm({
                form: nextFormState,
                errors,
                field,
            })
        }
    }


    return (
        <>
            <div className="h-full w-12/12">
                <div className="text-center pt-10">
                    <div className="text-4xl font-semibold">
                        Sign in
                    </div>
                </div>
                <div className="text-center mt-10 text-xl">
                    Sign in and start managing your candidates!
                </div>
                <div className="mx-auto mt-10 w-3/12">
                    <div className="">
                        <div>username</div>
                        <div>
                            <CustomInput onChange={onChangeInput} placeholder="Login" />
                        </div>
                    </div>
                    <div className="mt-5">
                        <div>
                            password
                        </div>
                        <div>
                            <CustomInput onChange={onChangeInput} placeholder="Password" />
                        </div>
                    </div>
                    <div className="mt-5">
                        <CustomButton label="Login" />
                    </div>
                </div>
                {/* <div className="w-12/12">
                    <Image
                        src="/images/Vectors.png"
                        alt="13"
                        width={40}
                        height={31}
                        priority
                    />
                </div> */}
                <div style={{
                    backgroundImage: `url(./images/Vectors.png)`,
                    width: '100%',
                    height: '100%',
                }}></div>
            </div>
        </>
    )
}