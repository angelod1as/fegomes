import Projects from '@pageComponents/Projects/index'

export default function Projetos() {
  return (
    <>
      <Projects />
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
