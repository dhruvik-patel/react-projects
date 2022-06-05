import React from 'react'

function Modal({ selectedImage, setSelectedImage}) {

    const closeModalHandler = (e) => {
        if(e.target.classList.contains('backdrop')){
            setSelectedImage(null)
        }
    }

    return (
        <div className='backdrop' onClick={closeModalHandler}>
            <img src={selectedImage} alt="" />
        </div>
    )
}

export default Modal
