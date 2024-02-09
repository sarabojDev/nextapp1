

import { PT_Sans } from 'next/font/google'


const aks = PT_Sans({
  weight: ["400", '700'],
  subsets: ["latin", 'cyrillic-ext']
})

const getData = () => {
  return new Promise((res, rej) => {
    fetch("https://jsonplaceholder.typicode.com/posts", { next: { revalidate: 3000 } })
      .then((dataD) => {
        dataD.json().then((daaF) => {
          console.log("fff")
          setTimeout(() => {
            res(daaF)
          }, 3000);
        })
      })
  })
}

export default async function Home() {
  const data = await getData();
  return (
    <div className={aks.className}>
      <div className='bg-green-400 p-4 sticky left-0 top-0'>
        afsdfasdfasdfsdfa
      </div>
      {data.map(f => (
        <div className='p-4 border-b'>{f.body}</div>
      ))}
    </div>
  );
}
