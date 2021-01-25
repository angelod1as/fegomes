import How from '@pageComponents/How'

export default function ComoFunciona() {
  return (
    <>
      <How />
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
