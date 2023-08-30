'use client'

import logo from '../../app/images/hh_logo.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <div>
                        <Link href="/">
                            <Image src={logo} /></Link>
                        <Link href="/resumes"> Мои резюме</Link>
                        <a>Помощь</a>
                    </div>
                    <div>
                        <button className="header-search">
                            <img></img>
                            Поиск
                        </button>
                        <Link className="header-button-green" href="/create-resume">
                            Создать резюме
                        </Link>
                        <Link className="header-button" href="/login">
                            Войти
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}