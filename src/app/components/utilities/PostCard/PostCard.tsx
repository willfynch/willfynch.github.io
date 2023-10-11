import { PostCardContent } from "./PostCardContent.model";


export default function PostCard({ content }: { content: PostCardContent }) {

   const pills = [
      'JavaScript', 'Angular', 'MongoDB'
   ]

   return (
      <div className={`transition-all hover:shadow-[rgba(50,_50,_105,_0.65)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded w-full`}>
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

               <div className="mt-4">
                  {pills.map(pill => {
                     return (
                        <span className="text-sm font-medium bg-slate-800 text-slate-100 hover:text-slate-800 hover:bg-slate-200 transition-all cursor-default rounded-full mr-2 p-2">{pill}</span>
                     )
                  })
                  }
               </div>
            </div>

         </div>

      </div>
   )
}
// bg-gradient-to-tl from-slate-300/50 to-slate-100/50 