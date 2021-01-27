// import fetchContentful from '@functions/fetchContentful'
import Home from '@pageComponents/Home/index'

export default function Index() {
  return (
    <>
      <Home />
    </>
  )
}

// export async function getStaticProps({ locale }) {
//   // const items = await fetchContentful({ type: 'tile', locale })
//   const items = await fetchContent(`
//   query {
//     projectCollection {
//       items {
//         title
//       }
//     }
//     }
//   `)

//   return {
//     props: {
//       homeData: items,
//     },
//   }
// }
