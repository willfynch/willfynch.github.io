import { PostCardContent } from "./PostCardContent";


export default function PostCard({ content }: { content: PostCardContent }) {

   const pills = [
      'JavaScript', 'Angular', 'MongoDB'
   ]

   return (
      <div className={`transition-all hover:shadow-[rgba(50,_50,_105,_0.65)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] shadow-[rgba(50,_50,_105,_0.35)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]  rounded h-60 w-full `}>
         <div className=" p-6 `rounded-[calc(1.5rem-1px)]`">
            <h1 className="cursor-pointer transition-all hover:text-slate-500 text-xl font-semibold">{content.title ? content.title : 'Placeholder'}</h1>
            <h2 className="text-slate-500 text-lg">Subtitile of subtitle</h2>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui excepturi ipsam, quisquam amet facere dolores, odio modi voluptatum repudiandae dolorum minima animi est. Temporibus dicta amet, repudiandae sequi quam ab?
            </p>

            <div>
            {pills.map(pill => {
               return (
               <span className="text-sm font-medium bg-slate-800 text-slate-100 hover:text-slate-800 hover:bg-slate-200 transition-all cursor-default rounded-full mr-2 p-2">{pill}</span>
            )
            })
            }
            </div>

         </div>

      </div>
   )
}
// bg-gradient-to-tl from-slate-300/50 to-slate-100/50 