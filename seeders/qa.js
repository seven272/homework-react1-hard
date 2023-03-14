const array = [
 {
   title: 'Первый вопрос: Ut nec elit eu purus ultrices',
   descr: 'Ответ: Nulla gravida porta lorem non consectetur',
 },
 {
   title: 'Второй вопрос: Duis lobortis',
   descr: 'Варианты ответа: Nullam ac tincidunt ante',
   children: [
     {
       title: 'Lobortis #1',
       descr: 'Phasellus gravida',
     },
     {
       title: 'Lobortis #2',
       descr: 'Phasellus gravida',
     },
     {
       title: 'Lobortis #3',
       descr: 'Phasellus gravida',
     },
   ],
 },
 {
   title: 'Третий вопрос: Duis lobortis',
   descr: 'Варианты ответа: Donec tincidunt neque turpis',
   children: [
     {
       title: 'Duis #1',
       descr: 'Quisque id feugiat sem',
     },
     {
       title: 'Duis #2',
       descr: 'Suspendisse eu interdum diam',
       children: [
         {
           title: 'Porttitor #1',
           descr: 'Donec porttitor ullamcorper magna',
         },
         {
           title: 'Porttitor #2',
           descr: 'Quisque id feugiat sem',
         },
       ],
     },
   ],
 },
]
