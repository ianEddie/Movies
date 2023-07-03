import { logo } from '../Assets/Images'
//
export function Logo () {
  return (
    <div className='sm:w-14 absolute sm:top-2 sm:left-10 sm:z-30 '>
      <img src={logo} alt='logo' className='h-10' />
    </div>
  )
}
