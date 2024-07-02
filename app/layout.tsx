import Header from '@/components/header'
import './globals.css'
export const metadata = {
  title: "Yashita | Personal Portfolio",
  description: "Yashita is a newbie to tech.",
}

import { Inter, Roboto_Mono} from 'next/font/google'
 
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
 
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable} scroll-smooth`}>
      <body className={` bg-gray-50 text-gray-950 relative h-[5000px pt-28 sm:pt-36 overflow-x-hidden`}>
        <div className="bg-[#b31c21] absolute top-[-6rem] -z-10 right-[0rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] "></div>
        <div className="bg-[#6c61c3] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem]"></div>
        <div className="bg-[#e86134] absolute top-[42rem] -z-10 right-[12rem] h-[31.25rem] w-[80rem] rounded-full blur-[10rem] sm:w-[70rem]"></div>
        <div className="bg-[#8d2aab] absolute top-[110rem] -z-10 right-[-25rem] h-[31.25rem] w-[30rem] rounded-full blur-[20rem] sm:w-[68.75rem]"></div>
        
        < Header/>
        {children}
        </body>
    </html>
  )
}
