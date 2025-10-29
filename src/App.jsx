import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTODO } from './redux/reducers/Todo.reducer';
import TodoCard from './components/ToodCard';
import { toast } from 'react-toastify';
import Loader from './components/Loader';

const App = () => {
  const dispatch = useDispatch()

  const { todos = {}, isLoading, isError, errorMsg } = useSelector(state => state.todos);

  useEffect(() => {
    dispatch(getAllTODO())
    toast.success('<-API call->');
  }, [dispatch])

  useEffect(() => {
    if (isError) {
      toast.error(`Error: ${errorMsg}`)
    }
  }, [isError, errorMsg])


  return (
    <section >
      <h1 className='text-center text-3xl font-bold underline'> WordTODO</h1>
      {isLoading ? <Loader /> : <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 max-w-6xl mx-auto      
  "
      >
        {todos.length == 0 && <h1 className="col-span-full text-center text-gray-500 text-lg">
          No Data Found
        </h1>}
        {todos.map(todo => <TodoCard todo={todo} key={todo.id} />)}
      </div>}
    </section >
  )
}

export default App