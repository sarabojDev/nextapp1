"use client"
import React, { useEffect, useState } from 'react'
import { AnimatePresence, Reorder, delay, motion } from "framer-motion"



const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};



const Animate1 = () => {
    const [items, setItems] = useState([0, 1, 2, 3])
    const [selectedId, setSelectedId] = useState(null)
    const [dataCard, setDataCard] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [item, setitem] = useState({})
    const getDATA = async () => {
        setIsLoading(true)
        const fet = await fetch("https://dummyjson.com/products")
        const dataD = await fet.json();
        console.log(dataD.products)
        setDataCard(dataD.products)
        setIsLoading(false)
    }

    useEffect(() => {
        getDATA()
    }, [])


    const selectedItemModal = (id) => {
        setSelectedId(id)
        const data = dataCard.find(r => r.id === id);
        setitem(data)
    }

    return (
        <div>

            <button className='bg-green-400 text-white p-2' onClick={() => getDATA()}>Reload</button>
            {isLoading ? (<>
                <div>Loadinggg - Changed</div>
            </>) : (
                <>

                    {/* <motion.ul
                        className="grid grid-cols-1 sm:grid-cols-4 gap-2 p-5"
                        variants={{
                            hidden: { opacity: 1, scale: 0 },
                            visible: {
                                opacity: 1,
                                scale: 1,
                                transition: {
                                    delayChildren: 0.3,
                                    staggerChildren: 0.2
                                }
                            }
                        }}
                        initial="hidden"
                        animate="visible"
                    >
                        {dataCard.map(item => (
                            <motion.li
                                key={item.id} layoutId={item.id} onClick={() => selectedItemModal(item.id)} className='h-[300px] bg-blue-400 p-3 rounded-md cursor-pointer' variants={{
                                    hidden: { y: 20, opacity: 0, scale: 0 },
                                    visible: {
                                        y: 0,
                                        opacity: 1,
                                        scale: 1
                                    }
                                }}


                            >
                                <motion.h5>{item.description}</motion.h5>
                                <motion.h2>{item.title}</motion.h2>

                            </motion.li>
                        ))}
                    </motion.ul> */}

                    {/* <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 p-5">
                        {dataCard.map(item => (
                            <motion.div layoutId={item.id} onClick={() => selectedItemModal(item.id)} className='h-[300px] bg-blue-400 p-3 rounded-md'>
                                <motion.h5>{item.description}</motion.h5>
                                <motion.h2>{item.title}</motion.h2>
                            </motion.div>
                        ))}
                    </div> */}


                    {/* <AnimatePresence>
                        {selectedId && (
                            <CardContainer item={item} selectedId={selectedId} setSelectedId={setSelectedId} />
                        )}
                    </AnimatePresence> */}


                    <Reorder.Group values={items} onReorder={setItems} className=''>
                        {items.map(item => (
                            <Reorder.Item key={item} value={item} className='p-4 shadow  cursor-pointer mb-4 w-1/2 mx-auto'>
                                {item}
                            </Reorder.Item>
                        ))}
                    </Reorder.Group>

                </>
            )}
        </div>
    )
}


function CardContainer({ item, selectedId, setSelectedId }) {
    useEffect(() => {
        console.log("FFFFFFF")
    }, [])
    return (
        <motion.div className="fixed left-0 top-0 w-full h-screen bg-transparent flex justify-center items-center" >
            <motion.div layoutId={selectedId} className=' bg-blue-400 w-[500px] h-[500px]   rounded-md shadow-md p-5 '>
                <motion.h5>{item.description}</motion.h5>
                <motion.h2>{item.title}</motion.h2>
                <motion.button onClick={() => setSelectedId(null)} className='bg-white p-3 rounded' >Close</motion.button>
            </motion.div>
        </motion.div>
    )
}

export default Animate1
