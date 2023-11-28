import { Inter } from 'next/font/google'
import DashboardLayout from "./components/DashboardLayout.jsx"
import {Theme} from "../components/Provider.jsx"
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function DashboardRootLayout({ children }) {
  return (
        <Theme className="dark:bg-gray-900/80">
          <DashboardLayout>  
            {children}
          </DashboardLayout>  
        </Theme>    
  )
}