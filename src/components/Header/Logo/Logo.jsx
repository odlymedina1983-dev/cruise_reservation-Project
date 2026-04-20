import logo from '../../../assets/logo/logo_size-desktop.png'

function Logo({ size = 'mobile' }) {
  return (
    <div className={`logo logo--${size}`}>
      <img src={logo} alt="Kanowa Cruises" />
    </div>
  )
}

export default Logo