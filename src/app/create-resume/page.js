'use client'
import Header from '../../components/header'
import Input from '../../components/input'
import { END_POINT } from '@/config/end-point'
import axios from 'axios'
import { useEffect, useState } from 'react'
import AutoCompleteSelect from '@/components/AutoCompleteSelect'
import SelectDate from '@/components/SelectDate'
import WorkingHistory from '@/components/workingHistory'
import ModalAddExp from '@/components/ModalAddExp'
import AutoCompleteTags from '@/components/AutoCompleteTags'

export default function CreateResume() {
    const [cities, setCities] = useState([])
    const [countries, setCountries] = useState([])
    const [skills, setSkills] = useState([])
    const [workingHistories, setWorkingHistories] = useState([])
    const [modalExpIsOpen, setModalExpIsOpen] = useState(false)
    useEffect(() => {
        console.log("didMount")
        axios.get(`${END_POINT}/api/region/cities`).then(res => {
            setCities(res.data)
        })

        axios.get(`${END_POINT}/api/region/countries`).then(res => {
            setCountries(res.data)
        })
        axios.get(`${END_POINT}/api/skills`).then(res => {
            setSkills(res.data)
        })
    }, [])

    console.log("rerender")
    const onSelect = (data) => {
        console.log("onSelect", data)
    }

    const closeModalExp = () => {
        setModalExpIsOpen(false)
    }

    const addWorkingHistory = (item) => {
        setWorkingHistories([...workingHistories, item])
        closeModalExp()
    }

    const removeWorkingHistory = (workingHistory) => {
        let wh = [...workingHistories]
        let index = workingHistories.indexOf(workingHistory)
        wh.splice(index, 1)
        setWorkingHistories(wh)
    }

    return (
        <main>
            <Header />
            <div className="container ptb7">
                <h1>Ваше резюме</h1>
                <h3>Контактные данные</h3>
                <Input placeholder="" type="text" label="Имя" size="fieldset-md" />
                <Input placeholder="" type="text" label="Фамилия" size="fieldset-md" />
                <Input placeholder="" type="text" label="Мобильный телефон" size="fieldset-md" />


                <h3>Основная информация</h3>
                <SelectDate size="fieldset-sm" label="Дата рождения" />
                <fieldset className="fieldset fieldset-sm">
                    <label>Пол</label>
                    <div className='radio-group'>
                        <div className='radio'>
                            <input type="radio" name="gender" id="g1" />
                            <label for="g1">Мужской</label>
                        </div>
                        <div className='radio'>
                            <input type="radio" name="gender" id="g2" />
                            <label for="g2">Женский</label>
                        </div>
                    </div>
                </fieldset>

                <AutoCompleteSelect placeholder="" type="text" label="Гражданство" size="fieldset-md" items={countries} onSelect={onSelect} />

                <h3>Специальность</h3>
                <Input placeholder="" type="text" label="Желаемая должность" size="fieldset-lg" />

                <fieldset className="fieldset fieldset-lg">
                    <label>Зарплата</label>
                    <div className='salary'>
                        <input placeholder="" type="text" className='input' />
                        <select className='input'>
                            <option>KZT</option>
                            <option>USD</option>
                            <option>RUB</option>
                        </select>
                        на руки
                    </div>
                </fieldset>

                <h3>Опыт работы</h3>
                {modalExpIsOpen && <ModalAddExp close={closeModalExp} addWorkingHistory={addWorkingHistory} />}
                <fieldset className="fieldset fieldset-lg">
                    <label>Места работы</label>
                    <div className='exp'>
                        {workingHistories.map(item => (<WorkingHistory workingHistory={(item)} remove={removeWorkingHistory} />))}
                        <button className='button button-primary-bordered' onClick={() => setModalExpIsOpen(true)}>Добавить место работы</button>
                    </div>
                </fieldset>

                <fieldset className={"fieldset fieldset-lg"}>
                    <label>О себе</label>
                    <textarea className="textarea" placeholder="Расскажите о себе"></textarea>
                </fieldset>

                <AutoCompleteTags placeholder="" type="text" label="Ключевые навыки" size="fieldset-md" items={skills} onSelect={onSelect} />
            </div>
        </main >
    )
}