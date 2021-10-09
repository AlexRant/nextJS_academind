import { useRouter } from 'next/router';

function DetailsPage() {
  const router = useRouter();

  const newsId = router.query.newsId;

  //send a request to the backend API
  //to fetch the news item with newsId


  return <h1>The News Page with some detailes ................</h1>
}

export default DetailsPage;