import React from 'react'

import { useState } from 'react'

const App = () => {

  const [title, settitle] = useState('')
  const [writenote, setwritenote] = useState('')


  const [notes, setnotes] = useState([])

  const submithandler = (e) => {
    e.preventDefault();
    


    const copynote = [...notes]

    copynote.push({ title, writenote })

    setnotes(copynote)


    settitle('')
    setwritenote('')


  }

  const deletehandler = (idx) => {
  
    const copynote = [...notes]
    copynote.splice(idx, 1)
    setnotes(copynote)
  }



  return (
    <>
      <div className='flex'>
        <div className='bg-black h-screen text-white w-2/4'>
          <div>
            <form
              onSubmit={(e) => {
                submithandler(e)
              }}

              className='p-10 flex flex-col gap-5'>

              {/* first input */}
              <input className=' border-2 px-4 py-3 rounded-lg'
                type="text"
                placeholder='Enter Note Heading'

                value={title}
                onChange={(e) => {
                  settitle(e.target.value)

                }}
              />

              {/* second input  */}
              <textarea
                className=' flex items-start flex-row border-2 px-4 py-20 rounded-lg'
                type="text"
                placeholder='Write Note'

                value={writenote}
                onChange={(e) => {
                  setwritenote(e.target.value)

                }}
              />

              <button
                className='bg-white active:scale-95 text-black rounded-lg px-4 py-3 '>Submit</button>

            </form>
          </div>

        </div>
        <div className='bg-black flex flex-wrap justify-start gap-5 p-10 h-screen w-2/4 overflow-y-scroll'>
          {notes.map(function (elem, idx) {

            return <div key={idx} className=" relative text-black bg-[url('https://i.pinimg.com/1200x/47/65/2f/47652fd6686a1410670ac27e89d106e3.jpg')] bg-[length:310px_270px] bg-center h-50 w-40 ">

              <div>
                <h1 className='p-4 font-bold text-xl'>{elem.title}</h1>
                <h4 className='p-4'>{elem.writenote}</h4>
              
              <button className='absolute bottom-3 right-3 active:scale-95 text-white bg-red-500 rounded-full w-8 h-8 flex justify-center items-center'
                onClick={() => deletehandler(idx)}
              >
                X
              </button>
              </div>
            </div>
          })}
        </div>
      </div>

    </>
  )
  }

export default App
