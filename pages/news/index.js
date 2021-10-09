import { Fragment } from 'react';
import Link from 'next/link';

function NewsPage() {
  return (
  <Fragment>
    <h1>The News Page</h1>
    <ul>
      <li>
        <Link href="/news/nextjs">
          NextJS Is A Great Framework
        </Link>
      </li>
      <li>Someting else ....</li>
    </ul>
  </Fragment>
  );
}

export default NewsPage;