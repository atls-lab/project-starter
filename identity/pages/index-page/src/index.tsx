export default () => null

export const getServerSideProps = () => ({
  redirect: {
    destination: '/auth/login',
    permanent: false,
  },
})
