import MainLayout from "@/src/components/layouts/MainLayout"
import { ListStudent } from "@/src/screens/Student"

const StudentPage = () => {
    return (
        <div>
            <MainLayout>
                <ListStudent />
            </MainLayout>
        </div>
    )
}

export default StudentPage