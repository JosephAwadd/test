import React from 'react'
import './styles.css'

function CreditCard() {
    return (
        <div className='creditCard'>
            <div className='creditCardNumber'>
                <p>4050 5044 7890 3941</p>
            </div>
            <div className='creditCardDate'>
                <p>10/28</p>
            </div>
            <div className='creditCardName'>
                <p>Name</p>
            </div>
        </div>
    )
}

export default CreditCard