import { PostCardContent } from "./PostCardContent.model";
import testScreen from '../../../../../public/indarrascreen.png'
import Image from 'next/image'


export default function PostCard({ content }: { content: PostCardContent }) {

   const pills = [
      'JavaScript', 'Angular', 'MongoDB'
   ]

   return (
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 transition-all hover:shadow-[rgba(50,_50,_105,_0.65)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded w-full my-4 cursor-pointer`}>
         <div className=" p-6 `rounded-[calc(1.5rem-1px)]`">
            <div>
               <span className="text-slate-500 text-md">{content.date ? content.date : ''}</span>
            </div>
            <div>
               <h1 className="cursor-pointer transition-all hover:text-slate-500 text-xl font-semibold">{content.title ? content.title : ''}</h1>
               <h2 className="text-slate-500 text-md">{content.subtitle ? content.subtitle : ''}</h2>
               <p className="mt-4">
                  {content.description ? content.description : ''}
               </p>

               <div className="mt-4 flex flex-wrap gap-y-2">
                  {content.technos?.map(techno => {
                     return (
                        <span className=" text-sm font-medium bg-slate-800 text-slate-100 hover:text-slate-800 hover:bg-slate-200 transition-all cursor-default rounded-full mr-2 p-2">{techno}</span>
                     )
                  })
                  }
               </div>
            </div>

         </div>
         {content.image &&
            <div className="flex justify-center px-4 py-4">
               <Image className="shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]   border-solid border-slate-600" src={content.image} alt={"screen shot"}></Image>
            </div>}

      </div>
   )
}
// bg-gradient-to-tl from-slate-300/50 to-slate-100/50 