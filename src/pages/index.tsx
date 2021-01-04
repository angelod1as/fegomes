// import fetchContentful from '@functions/fetchContentful'
import Home from '@pageComponents/home/index'

export default function Index() {
  return (
    <>
      <Home />
    </>
  )
}

// export async function getStaticProps({ locale }) {
//   const items = await fetchContentful({ type: 'tile', locale })

//   return {
//     props: {
//       homeData: items,
//     },
//   }
// }
