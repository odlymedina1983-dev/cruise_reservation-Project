function AvatarIcon() {
  return (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <g clipPath="url(#avatar-clip)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.0001 8C13.0001 9.65685 11.657 11 10.0001 11C8.34327 11 7.00012 9.65685 7.00012 8C7.00012 6.34315 8.34327 5 10.0001 5C11.657 5 13.0001 6.34315 13.0001 8ZM12.0001 8C12.0001 9.10457 11.1047 10 10.0001 10C8.89555 10 8.00012 9.10457 8.00012 8C8.00012 6.89543 8.89555 6 10.0001 6C11.1047 6 12.0001 6.89543 12.0001 8Z"
          fill="currentColor"
        />
        <path
          d="M10.0001 12.5C6.76293 12.5 4.00476 14.4142 2.9541 17.096C3.21005 17.3502 3.47967 17.5906 3.76177 17.816C4.54414 15.3538 6.99848 13.5 10.0001 13.5C13.0018 13.5 15.4561 15.3538 16.2385 17.816C16.5206 17.5906 16.7902 17.3502 17.0461 17.096C15.9955 14.4142 13.2373 12.5 10.0001 12.5Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="avatar-clip">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <path
        d="M12.9592 10.8301L11.2842 12.5108C10.6049 13.1925 9.40979 13.2071 8.71584 12.5108L7.04073 10.8301L1.02448 16.8659C1.24842 16.9695 1.49533 17.0312 1.75783 17.0312H18.2422C18.5047 17.0312 18.7515 16.9695 18.9754 16.8659L12.9592 10.8301Z"
        fill="currentColor"
      />
      <path
        d="M18.2422 2.96875H1.75782C1.49532 2.96875 1.2484 3.03055 1.02454 3.1341L7.45333 9.58422C7.45375 9.58465 7.45426 9.58473 7.45469 9.58516C7.45512 9.58559 7.4552 9.58617 7.4552 9.58617L9.54555 11.6834C9.76758 11.9055 10.2325 11.9055 10.4545 11.6834L12.5445 9.58652C12.5445 9.58652 12.545 9.58559 12.5454 9.58516C12.5454 9.58516 12.5463 9.58465 12.5468 9.58422L18.9754 3.13406C18.7515 3.03047 18.5047 2.96875 18.2422 2.96875Z"
        fill="currentColor"
      />
      <path
        d="M0.186953 3.95359C0.0710937 4.18789 0 4.44797 0 4.72656V15.2734C0 15.552 0.0710156 15.8121 0.186914 16.0464L6.21359 10.0002L0.186953 3.95359Z"
        fill="currentColor"
      />
      <path
        d="M19.813 3.95351L13.7864 10.0002L19.813 16.0465C19.9289 15.8122 20 15.5521 20 15.2734V4.72656C20 4.44789 19.9289 4.18781 19.813 3.95351Z"
        fill="currentColor"
      />
    </svg>
  )
}

function UserBar({
  logged = false,
  username = 'username',
}) {
  return (
    <div className={`user-bar ${logged ? 'user-bar--logged' : ''}`}>
      
      <div className="user-bar__left">
        <span className="user-bar__avatar">
          <AvatarIcon />
        </span>

        <span className="user-bar__primary">
          {logged ? username : 'LOGIN'}
        </span>

        <span className="user-bar__secondary">
          {logged ? 'deals for you' : 'create account'}
        </span>
      </div>

      <div className="user-bar__right">
        {logged && (
          <span className="user-bar__email">
            <EmailIcon />
          </span>
        )}
      </div>

    </div>
  )
}

export default UserBar