import React from 'react'
import ClassDetailView from '../Component/ClassDetailView'
import Classes from './Classes'

function Curriculum() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <Classes/>
                </div>
                <div className="col-8">
                    <ClassDetailView/>
                </div>

            </div>
            
        </div>
    )
}

export default Curriculum
