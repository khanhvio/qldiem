import Link from "next/link"

export const NavbarMenu = () => {
    return (
        <div className="w-2/12 h-screen bg-purple-800">
            <div className="flex">
                <div className="pt-9 ml-9">
                    <img
                        loading="lazy"
                        placeholder="blur"
                        src="./images/logo.png"
                        alt="Logo"
                        height={45}
                        width={45}
                    />
                </div>
                <div className="pt-10 text-white text-xl leading-9 ml-2 font-sans">
                    QUAN LY DIEM
                </div>
            </div>
            <ul className="text-lg font-sans text-white text-center mt-10">
                <Link href="/student">
                    <li className="pt-5 pb-5 hover:bg-purple-950 cursor-pointer">Học sinh</li>
                </Link>
                <Link href="/course">
                    <li className="pt-5 pb-5 hover:bg-purple-950 cursor-pointer">Khóa học</li>
                </Link>
                <Link href="/subject">
                    <li className="pt-5 pb-5 hover:bg-purple-950 cursor-pointer">
                        Môn học
                    </li>
                </Link>
                <Link href="/classes">
                    <li className="pt-5 pb-5 hover:bg-purple-950 cursor-pointer">
                        Lớp học
                    </li>
                </Link>
            </ul>
            <div className="absolute bottom-0 text-white text-center bg-purple-950 w-2/12 pb-5 pt-5 cursor-pointer hover:text-red">
                Đăng xuất
            </div>
        </div>
    )
}