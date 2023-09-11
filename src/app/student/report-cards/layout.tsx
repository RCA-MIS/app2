import ReportSidemenu from "@/components/Sidemenu/ReportSidemenu"

const ReportLayout = ({children}: {children: React.ReactNode}) =>{
    return(
        <div className="w-full flex">
            <ReportSidemenu/>
            {children}
        </div>
    )
}

export default ReportLayout