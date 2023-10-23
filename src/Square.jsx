/* eslint-disable react/prop-types */

function Square({value,onSquareClick}) {

  return (
    <button className='w-10 h-10 flex justify-center align-middle' onClick={onSquareClick}>{value}</button>
  )
}

export default Square