'use client'

import logo from '../../app/images/hh_logo.svg'
import Image from 'next/image'
export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <div>
                        <Image src={logo} />
                        <a>Работодатели</a>
                        <a>Помощь</a>
                    </div>
                    <div>
                        <button className="header-search">
                            <img></img>
                            Поиск
                        </button>
                        <button className="header-button-green">
                            Создать резюме
                        </button>
                        <button className="header-button">
                            Войти
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}