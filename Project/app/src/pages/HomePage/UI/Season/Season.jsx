import React from 'react'
import "../../../../app/Fonts/typograhy.css"
import "./Season.css"
import "../../../../shared/UI/line.css"
import Button from './../../../../shared/UI/Button/Button';
import Card from '../../../../widgets/Card/Card'

function Season() {
    return (
        <div className='season-block'>
            <div className='new-season'>
                <div className='center'>
                    <h3 className='Playfair white title'>СЕЗОН 2020/21</h3>
                    <div className='line'></div>
                </div>
                <div className='cards'>
                    <Card />
                    <Card />
                    <Card />

                </div>
            </div>
            <div className='new-season-img'>
                <div className='center'>
                    <h3 className='Playfair white title'>НОВАЯ КОЛЛЕКЦИЯ</h3>
                    <div className='line'></div>
                    <Button>КАТАЛОГ</Button>
                    
                </div>
            </div>
        </div>
    )
}

export default Season
