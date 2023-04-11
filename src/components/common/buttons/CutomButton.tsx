import { LoadingSquareEffect } from "../loading_square"

type Props = {
    label: string
    img?: string
    imgAfter?: string
    altImage?: string
    fontSize?: string
    disabled?: boolean
    loading?: boolean
    loadingLabel?: string
    wrapperClassName?: string
    buttonClassName?: string
    textClassName?: string
    variant?: string
    type?: 'submit' | 'button'
    onClick?: () => any
  }

export const CustomButton = ({
    label,
    img,
    imgAfter,
    altImage,
    fontSize,
    disabled = false,
    loading = false,
    loadingLabel = '',
    wrapperClassName = '',
    buttonClassName = '',
    type = 'button',
    textClassName = '',
    variant = 'background',
    onClick,
  }: Props) => {
    return (
        <div
      className={`${disabled || loading ? 'cursor-not-allowed opacity-80' : 'opacity-100'} ${
        variant === 'no-background'
          ? `text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:bg-gradient-to-bl
          focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium
          text-sm p-[1.5px] text-center`
          : ''
      } ${wrapperClassName}`}
    >
      <button tabIndex={-1}
        className={`w-full h-full btn-bg relative ${
          variant === 'background'
            ? `text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:bg-gradient-to-bl
            focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800
            font-medium rounded-lg text-sm text-center`
            : `bg-black hover:bg-gradient-to-r active:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500
          active:from-purple-600 active:to-blue-500 group`
        }
        px-3 py-3  text-[${fontSize ? fontSize : '14'}px] uppercase flex justify-center items-center gap-3
        ${disabled || loading ? 'pointer-events-none' : 'pointer-events-auto'} ${buttonClassName}`}
        disabled={disabled || loading}
        onClick={onClick}
        type={type}
      >
        {loading ? (
          <>
            <LoadingSquareEffect />
            {loadingLabel ? loadingLabel : label}
          </>
        ) : (
          <>
            {img && (
              <img
                width={30}
                height={30}
                className="h-[30px] w-[30px] object-contain object-center"
                src={img}
                alt={altImage}
              />
            )}
            <span
              className={`${
                variant === 'no-background'
                  ? 'bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500'
                  : ''
              } group-hover:text-white ${textClassName}`}
            >
              {label}
            </span>
            {imgAfter && <img className="object-contain object-center" src={imgAfter} alt={altImage} />}
          </>
        )}
      </button>
    </div>
    )
}