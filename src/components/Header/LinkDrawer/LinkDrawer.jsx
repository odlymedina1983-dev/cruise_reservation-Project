function LinkDrawer({ isOpen }) {
  const links = ['HOME', 'DEALS', 'DESTINATIONS', 'ABOUT KS', 'GUIDES']

  return (
    <div className="link-drawer">
      
      {/* CLOSED */}
      {!isOpen && (
        <div className="link-drawer__trigger" />
      )}

      {/* OPEN */}
      {isOpen && (
        <div className="link-drawer__panel">
          {links.map((link) => (
            <span key={link} className="link-drawer__link">
              {link}
            </span>
          ))}
        </div>
      )}

    </div>
  )
}
export default LinkDrawer