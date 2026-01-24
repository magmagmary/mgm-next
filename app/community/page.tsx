import Image from 'next/image'

const CommunityPage = () => {
  return (
    <>
      <header className="flex flex-col gap-12 mx-auto my-12 mb-20 w-[90%] max-w-300 text-foreground text-2xl text-center">
        <h1 className="font-['Montserrat',sans-serif]">
          One shared passion: <span className="bg-linear-to-r from-primary to-destructive bg-clip-text text-transparent">Food</span>
        </h1>
        <p>Join our community and share your favorite recipes!</p>
      </header>
      <main className="w-[90%] max-w-300 mx-auto text-center">
        <h2 className="font-['Montserrat',sans-serif] text-3xl mb-12 text-foreground">Community Perks</h2>

        <ul className="list-none my-12 p-0">
          <li className="flex flex-col items-center gap-8">
            <Image src="/images/meal.png" alt="A delicious meal" width={128} height={128} className="w-32 h-32 object-contain" />
            <p className="font-['Montserrat',sans-serif] text-2xl font-bold m-0 text-foreground">Share & discover recipes</p>
          </li>
          <li className="flex flex-col items-center gap-8">
            <Image src="/images/community.png" alt="A crowd of people, cooking" width={128} height={128} className="w-32 h-32 object-contain" />
            <p className="font-['Montserrat',sans-serif] text-2xl font-bold m-0 text-foreground">Find new friends & like-minded people</p>
          </li>
          <li className="flex flex-col items-center gap-8">
            <Image
              src="/images/events.png"
              alt="A crowd of people at a cooking event"
              width={128}
              height={128}
              className="w-32 h-32 object-contain"
            />
            <p className="font-['Montserrat',sans-serif] text-2xl font-bold m-0 text-foreground">Participate in exclusive events</p>
          </li>
        </ul>
      </main>
    </>
  )
}

export default CommunityPage