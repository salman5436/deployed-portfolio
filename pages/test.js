// export default function Test({queryParam}) {
//     let name = queryParam
    
//     return (
//         <>
//             <h1 id="hello">
//                 Hey {name}
//             </h1>
//             <style jsx>
//                 {`
//                   #hello {
//                       color: hotpink;
//                   }  
//                 `}
//             </style>
//         </>
//     )
// }

// export function getServerSideProps({query}) {
//     // get query param from url
//     let queryParam = query.name

//     return {
//         props: {
//             queryParam,
//         }
//     }
// }