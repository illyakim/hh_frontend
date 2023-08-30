
import Header from '../../components/header'
import UserLogin from '../../components/auth/user'
import MyResumes from '@/components/myresumes'
const resumes = [
    {
        position: "Менеджер отдела продаж",
        createdAt: "25.07.2023",
        stats: {
            views: 0,
            applies: 0,
            shows: 0
        },
    },
    {
        position: "Back-end Developer",
        createdAt: "2.08.2023",
        stats: {
            views: 100,
            applies: 7,
            shows: 1000
        },
    },
    {
        position: "React Developer",
        createdAt: "23.07.2023",
        stats: {
            views: 4,
            applies: 1,
            shows: 513
        },
    }

]
export default function ResumePage() {
    return (
        <main>
            <Header />
            <div className="container">
                <div className='flex flex-ai-c flex-jc-sb ptb7'>
                    <h1>Мои резюме</h1>
                    <button className='button button-secondary-bordered'>Создать резюме</button>
                </div>
                <MyResumes resumes={resumes} />
            </div>
        </main>
    )
}
