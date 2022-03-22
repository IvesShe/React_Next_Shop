import { getSortedPostsData } from '../lib/posts'

export default function dataShow({ allPostsData }) {
  return (
    <div>
      {
        allPostsData.map(({ id, title, date }) => (
          <p key={id}>
            {id}<br />
            {title}<br />
            {date}<br />
          </p>
        ))
      }
    </div>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}