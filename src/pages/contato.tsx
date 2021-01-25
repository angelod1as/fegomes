// import fetchContentful from '@functions/fetchContentful'
import Contact from '@pageComponents/contact/index'

export default function Contato() {
  return (
    <>
      <Contact />
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
