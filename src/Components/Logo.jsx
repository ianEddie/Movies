import logo from '../assets/logo.png'
//
export function Logo () {
  return (
    <div className='w-14 absolute top-2 left-10 z-30 '>
      <img src={logo} alt='logo' className='h-10' />
    </div>
  )
}
