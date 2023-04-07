import Image from "next/image"
import { useState } from "react"

interface Props {
    isShowPassword?: boolean
    isPassword?: boolean
    isError?: boolean
    name?: string
    value?: string
    placeholder: string
    customClassName?: string
    onChange: any
    changeStatusPassword?: () => void
  }

  export const CustomInput = ({
    isShowPassword = true,
    isError = false,
    isPassword = false,
    name,
    value,
    customClassName,
    placeholder,
    onChange,
    changeStatusPassword,
    ...props
  }: Props) => {
    const [isFocused, setIsFocused] = useState(false)
  
    const handleFocus = () => {
      setIsFocused(true)
    }
  
    const handleBlur = () => {
      setIsFocused(false)
    }
  
    return (
      <div
        className={`flex mt-2 justify-between items-center border-[0.5px] px-4 py-2.5 w-[full]
        rounded
        ${customClassName ?? ''} ${isFocused ? (isError ? 'border-red-600' : 'border-blue-600') : 'border-[#B3B8C2]'}`}
      >
        <input
          type={isShowPassword ? 'text' : 'password'}
          className="w-full border-none outline-none bg-transparent mr-2.5"
          placeholder={placeholder}
          onFocus={handleFocus}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={handleBlur}
          {...props}
        />
        {isPassword && (
          <div className="cursor-pointer" onClick={changeStatusPassword}>
            <Image
              width={24}
              height={24}
              src={`/images/icon/${isShowPassword ? 'icon_eye_open' : 'icon_eye_close'}.svg`}
              alt="Eye Open"
            />
          </div>
        )}
      </div>
    )
  }