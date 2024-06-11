import { Button } from "@/shared";
import Link from "next/link";
import HeroLogo from '@/shared/images/hero.png'
import Image from 'next/image'
import Search from "@/widgets/components/Search";
import CategoryFilter from "@/widgets/components/CategoryFilter";
import Collected from "@/features/components/Collected";
type SearchParamProps = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || '';
  const category = (searchParams?.category as string) || '';

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">Историко-краеведческий музей</h1>
            <p className="p-regular-20 md:p-regular-24">Узнаваемое здание с круглой башенкой, которое находится на проспекте Луначарского, было построено в 1928 году специально для музея.</p>
            <div className="flex flex-row gap-4">
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">
                Афиша
              </Link>
            </Button>
            <Button size='lg' asChild className="button w-full sm:w-fit bg-red-500">
            <Link href="#events">
                Подробнее
              </Link>
            </Button>
            </div>
      
          </div>

          <Image 
            src={HeroLogo}
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section> 

      <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">Доверено <br/> десятками мероприятий</h2>

        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search />
          <CategoryFilter />
        </div>

        <Collected />
      </section>
      <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
      <h2 className="h2-bold">Афиша</h2>
      <h2 className="h2-bold">Последние новости</h2>
      </section>
    </>
  )
}