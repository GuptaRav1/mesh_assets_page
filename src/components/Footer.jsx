import React from 'react'

const Footer = () => {
  return (
    <footer className="relative flex justify-center w-full overflow-hidden bg-[var(--color-primary)]">
      <h1 className="z-10 text-[var(--color-tertiary)] text-[23vw] font-bold -translate-x-8 translate-y-40">Meshcraft</h1>
      <img className="w-52 h-52 bottom-0 animate-[bounce_5s_linear_infinite] absolute" src="images/hello.png" />
      <div>
        <h4>Contact Us</h4>
      </div>
    </footer>
  )
}

export default Footer
