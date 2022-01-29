import React from 'react'
import HEAD from 'next/head'


function Layout(props) {
    return (
        <div >
            <HEAD>
                <link rel="stylesheet" href="https://bootswatch.com/4/cyborg/bootstrap.css"/>
                <link rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                        crossorigin="anonymous"
                        />
                <link rel = "icon" href =  
'/images/logo.png'
        type = "image/x-icon"/>         
                 <title>DTC</title>       
            </HEAD>
           
            
           <div className="container mt-4">

            {props.children}
           </div>
        </div>
    )
}

export default Layout
