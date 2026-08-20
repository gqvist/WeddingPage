import './MainButton.css'

function MainButton({
  href,
  children,
  className = '',
  backgroundColor = '#7E8243',
  target,
  rel,
  type = 'button',
  style,
  ...props
}) {
  const classes = ['main-button', className].filter(Boolean).join(' ')
  const buttonStyle = {
    '--main-button-bg': backgroundColor,
    ...style,
  }

  if (href) {
    const linkRel = target === '_blank' && !rel ? 'noreferrer' : rel

    return (
      <a
        className={classes}
        href={href}
        target={target}
        rel={linkRel}
        style={buttonStyle}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={classes} type={type} style={buttonStyle} {...props}>
      {children}
    </button>
  )
}

export default MainButton
