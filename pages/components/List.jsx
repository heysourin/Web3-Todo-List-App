import React from 'react'

const List = (props) => {
  const { todo, deleteTodos, idx } = props

  const handleChecked = () => {
    alert('Are you sure you want to set this task as completed!!!')
    deleteTodos(idx)
  }

  const handleDelete = () => {
    alert('Are you sure you want to delete this task?')
    deleteTodos(idx)
  }

  return (
      <div className=" my-4 flex flex-col justify-between items-center mt-7">
        <div className=" py-5 text-white bg-gray-900 dark:bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-50  md:text-2xl  sm:text-xl rounded px-3 sm: w-10/12 flex  justify-between pb-3 ">
          {todo}
          <div className="flex items-center">
            <button
              onClick={handleDelete}
              className="text-1xl  text-white cursor-pointer"
            >
              🗑️
            </button>

            <button
              onClick={handleChecked}
              className="text-1xl text-white cursor-pointer"
            >
              ✅
            </button>
          </div>
        </div>
      </div>
    
  )
}

export default List