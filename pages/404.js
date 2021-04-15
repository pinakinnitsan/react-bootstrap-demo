import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container">
      <h1 className="mt-4 mb-3">404</h1>
      <div className="jumbotron">
        <h1 className="display-1">404</h1>
        <p>The page you're looking for could not be found. Here are some helpful links to get you back on track:</p>
        <ul>
          <li>
            <Link href="/"><a>Home</a></Link>
          </li>
          <li>
            <Link href="/about"><a>About</a></Link>
          </li>
          <li>
            <Link href="/contact"><a>Contact</a></Link>
          </li>
        </ul>
      </div>
    </div>
  )
}