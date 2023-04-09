import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { DOTS, usePagination } from '@/src/hooks/usePagination'

export type Props = {
    persistOnUrl?: boolean
    totalRecords: number
    pageSize?: number
    currentPage: number
    scrollToView?: () => void
    onChangePage: (page: number) => void
}

export const Pagination = React.memo(
    ({ persistOnUrl = true, currentPage: page, totalRecords, pageSize = 9, onChangePage, scrollToView }: Props) => {
        const { pathname, query } = useRouter()
        const currentPage = page ? page : 1
        const totalPage = Math.ceil(totalRecords / pageSize)
        const paginationRange = usePagination(totalRecords, pageSize, 1, currentPage ? currentPage : 1)

        return (
            <div className="flex justify-center items-center select-none gap-[30px]">
                <div className="mx-3 items-center md:hidden flex">
                    <span className="text-shadow-2 px-4 text-[#808080] flex items-center justify-center gap-4 font-medium">
                        <span className="text-[from-purple-600]">{currentPage.toString().padStart(2, '0')}</span>
                        <span>/</span>
                        <span className="text-white">{totalPage.toString().padStart(2, '0')}</span>
                    </span>
                </div>
                <div className="flex gap-4">
                    <button
                        aria-label="Previous Page"
                        className="w-12 h-12 flex justify-center items-center border border-solid border-[#B3B8C2] rounded-full
        hover:border-[#F75F4D] disabled:hover:border-[#B3B8C2] disabled:border-[#B3B8C2] disabled:opacity-70
        disabled:cursor-not-allowed transition-all duration-200 ease-linear"
                        disabled={currentPage === 1}
                        onClick={() => currentPage > 1 && onChangePage(currentPage - 1)}
                    >
                        <img src={'./images/arrow-left.png'} alt="arrow_left" width={24} height={24} />
                    </button>
                    <div className="items-center justify-center hidden md:flex gap-4">
                        {persistOnUrl
                            ? paginationRange?.map((element, index) => (
                                <Link
                                    key={index}
                                    href={{
                                        pathname,
                                        query: { ...query, page: element },
                                    }}
                                    scroll={false}
                                >
                                    <span
                                        className={`flex py-[3px] px-[9px] justify-center items-center transition-all duration-200 ease-linear

              ${currentPage === element ? 'text-white bg-[#F75F4D] font-semibold' : 'text-[#808080] font-medium'}
              ${element !== DOTS && 'cursor-pointer'}`}
                                        onClick={scrollToView}
                                    >
                                        {typeof element === 'number' ? element.toString().padStart(2, '') : element}
                                    </span>
                                </Link>
                            ))
                            : paginationRange?.map((element, index) => (
                                <div
                                    key={index}
                                    className={`flex py-[3px] px-[9px] justify-center items-center transition-all duration-200 ease-linear
                 hover:bg-[#FFE4E0]
              ${currentPage === element ? 'text-white bg-[#F75F4D] font-semibold' : 'text-[#808080] font-medium'}
              ${element !== DOTS && 'cursor-pointer'}`}
                                    onClick={() => onChangePage(Number(element))}
                                >
                                    {typeof element === 'number' ? element.toString().padStart(2, '') : element}
                                </div>
                            ))}
                    </div>
                    <button
                        aria-label="Next Page"
                        className="w-12 h-12 flex justify-center items-center  border border-solid border-[#B3B8C2] rounded-full
          hover:border-[#F75F4D] disabled:border-[#B3B8C2] disabled:opacity-70
          disabled:cursor-not-allowed transition-all duration-200 ease-linear"
                        disabled={currentPage === totalPage}
                        onClick={() => currentPage < totalPage && onChangePage(currentPage + 1)}
                    >
                        <img src={'./images/arrow-right.png'} alt="arrow_right" width={24} height={24} />
                    </button>
                </div>
            </div>
        )
    },
)
