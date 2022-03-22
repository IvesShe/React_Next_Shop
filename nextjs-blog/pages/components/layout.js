

export default function Layout({ children }) {
  return <div>
    {children}

    <footer>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        new ives Powered by{' '}
        <img src="/vercel.svg" alt="Vercel" className="logo" />
      </a>
    </footer>
  </div>
}