import React from 'react'

const about = () => {
    return (
        <div>
            <div className="container">
            <h3>This is inside a container</h3>
            </div>
        
        <style jsx>
         {
            `.container {
                margin: 0 auto;
                background: blue;
                color: white;
            }`
         }
        </style>
        </div>
    )
}

export default about
