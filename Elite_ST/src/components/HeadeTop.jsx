import styles from './HeaderTop.module.css'
export const HeadeTop = () => {


  return (
    <>
        
        <div id='home' className={styles.home}>
        <div className={styles.back}>
          
          <div  className='text-white font-bold mt-[8rem]  '>
                <h1 className=' sm:text-[2.4rem] text-white text-[2rem]' > A segurança consiste na </h1>
                <h3 className='text-center text-zinc-200 sm:text-[1.3rem]'> responsabilidade de saber e agir da maneira correta.</h3>
                <button  className=' my-[2rem] text-[1.2rem] border w-[8rem] h-[2.5rem] bg-transparent border-solid border-[#F0C70A] text-[#F0C70A] outline-none cursor-pointer
                 hover:bg-[#f0c70a] hover:text-slate-100 uppercase'><a href="#about">Sobre nós</a></button>
            
          </div>
          </div>
            
        </div>


    
    </>
   
  )
}










// And after that you'll be able to use it in your components like this

// const Component = () => {
// 

//   return (
//    
//   );
// }