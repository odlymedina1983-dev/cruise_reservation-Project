function LinkDrawer({ isOpen }) {
  const links = ['HOME', 'DEALS', 'DESTINATIONS', 'ABOUT KS', 'GUIDES']

  return (
    <div className={`link-drawer ${isOpen ? 'open' : ''}`}>
      
      {/* trigger */}
      <div className="link-drawer__trigger" />

      {/* panel */}
      <div className="link-drawer__panel">
        {links.map((link) => (
          <span key={link} className="link-drawer__link">
            {link}
          </span>
        ))}
      </div>

    </div>
  )
}
export default LinkDrawer