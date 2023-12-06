// import React from 'react'

const Modal = () => {
  return (
    <section className='modal-popup'>
      <div className='modal'>
        <h3>Delete comment</h3>
        <p>Are your sure you want to delete this comment? 
            This will remove the comment and can&apos;t be undone.
        </p>
        <div className='modal-btns'>
            <button type="button">NO, CANCEL</button>
            <button type="button">YES, DELETE</button>
        </div>
      </div>
    </section>
  )
}

export default Modal;
