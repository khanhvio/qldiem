import React, { HTMLAttributes, PropsWithChildren } from 'react'
import dynamic from 'next/dynamic'
import { HeaderCommon } from '../Header'
import { HtmlHead, Props as HeadProps } from '../HtmlHead'
import { NavbarMenu } from '../Navbar'

// const Footer = dynamic(() => import('../Footer/index').then((mod) => mod.Footer))

type Props = PropsWithChildren<HeadProps> &
    HTMLAttributes<HTMLDivElement> & {
        mainClassName?: string
        showMenu?: boolean
        showConnectWalletButton?: boolean
        isWideScreen?: boolean
        footerClassName?: string
    }

const MainLayout: React.FC<Props> = (props) => {
    const { children } = props
    return (
        <>
            <HtmlHead {...props} />
            <main className="flex">
                <NavbarMenu />
                <div className="w-10/12">
                    <HeaderCommon />
                    <div>{children}</div>
                </div>
                {/* <Footer /> */}
            </main>
        </>
    )
}

export default React.memo(MainLayout)
