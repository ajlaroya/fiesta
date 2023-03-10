import InfoCard from "@/components/InfoCard";
import Map from "@/components/Map";
import Head from "next/head";
import { useRouter } from "next/router";

function Search({ searchResults }) {
  const router = useRouter();

  const { location, startDate, endDate, noOfGuests } = router.query;

  const range = `${startDate} to ${endDate}`;

  return (
    <main className="flex">
      <Head>
        <title>Search - Fiesta</title>
      </Head>
      <section className="flex-grow pt-8 px-6">
        <p className="text-xs">
          300+ Fiestas - {range} - for {noOfGuests} guests
        </p>
        <h1 className="text-3xl font-semibold mt-2 mb-6">
          Stays in &apos;{location}&apos;
        </h1>

        <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
          <p className="button">Cancellation Flexibility</p>
          <p className="button">Type of Place</p>
          <p className="button">Price</p>
          <p className="button">Rooms and Beds</p>
          <p className="button">More filters</p>
        </div>

        <div className="flex flex-col">
          {searchResults.map(
            ({ img, location, title, description, star, price, total }) => (
              <InfoCard
                key={img}
                img={img}
                location={location}
                title={title}
                description={description}
                star={star}
                price={price}
                total={total}
              />
            )
          )}
        </div>
      </section>

      <section className="hidden xl:inline-flex xl:min-w-[600px]">
        <Map searchResults={searchResults} />
      </section>
    </main>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
