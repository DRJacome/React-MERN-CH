import React from 'react'
import { EntradasDiario } from './EntradasDiario'

export const Sidebar = () => {
    return (
        <aside className='journal__sidebar'>
            <div className='journal__sidebar-navbar'>
                <h3 className='mt-5'>
                    <i className='far fa-moon' />
                    <span>David</span>
                </h3>
                <button className='btn'>Desconectarse</button>
            </div>
            <div className='journal__new-entry'>
                <i className='far fa-calendar-plus fa-5x'></i>
                <p className='mt-5'>Nueva entrada</p>
            </div>
            <EntradasDiario />
        </aside>
    )
}