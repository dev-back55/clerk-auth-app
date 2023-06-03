import { SignUp } from '@clerk/nextjs/app-beta'

const Page = async () => {
  return (
    <section className='py-24'>
      <div className='container'>
        <div className='flex justify-center'>
          <SignUp redirectUrl='/'/>
        </div>
      </div>
    </section>
  )
}

export default Page
