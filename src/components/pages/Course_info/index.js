import React from 'react'
import './style.scss'
import 'components/InviteHeader'
import InviteHeader from 'components/InviteHeader'
import Info_course from 'components/Info_course'
import SideMenu from 'components/SideMenu'


// function Chapters(props) {
//   return (
//     props.chapters.map(el => (
//       <div className='chapter'>
//         <div className='chapter__header'>{el.header}</div>
//         <div className='chapter__duration'>{el.videoDuration}</div>
//       </div>
//     ))
//   )
// }

// function CourseMaterials(props) {
//   return (
//     props.modules.map(el => (
//       <React.Fragment>
//         <div className='module'>
//           <div className='module__header'> <i className="fas fa-angle-down"></i> {el.header}</div>
//           <div className='module__duration'>{el.vidoDuration}</div>
//         </div>
//         <Chapters chapters={el.chapters} />
//       </React.Fragment>
//     ))
//   )
// }

export default function Course_info({ videoURL, shortDesc, longDescArr }) {

  let moduleList = [
    {
      moduleName: "Module 1",

      lectures: [
        {
          name: "О защите",
          duration: "49 минут",
          link: "#"
        },

        {
          name: "О защите",
          duration: "59 минут",
          link: "#"
        },

        {
          name: "О защите",
          duration: "39 минут",
          link: "#"
        }
      ]
    },

    {
      moduleName: "Module 2",

      lectures: [
        {
          name: "О защите",
          duration: "49 минут",
          link: "#"
        },

        {
          name: "О щите",
          duration: "59 минут",
          link: "#"
        },

        {
          name: "О защите",
          duration: "39 минут",
          link: "#"
        }
      ]
    },

    {
      moduleName: "Module 3",

      lectures: [
        {
          name: "О защите",
          duration: "49 минут",
          link: "#"
        },

        {
          name: "О защите",
          duration: "59 минут",
          link: "#"
        },

        {
          name: "О защите",
          duration: "39 минут",
          link: "#"
        }
      ]
    }
  ]

  return (
    <div className="coursePage">


      <div className="courseMaterials">
        <InviteHeader className="Info_course" shortDesc={shortDesc} longDescArr={longDescArr} />

        <div className="course_info-desc">
          <Info_course hortDesc={shortDesc} longDescArr={longDescArr} />
          <SideMenu moduleList={moduleList} />
        </div>

        {/* <CourseMaterials modules={modules} /> */}
      </div>
    </div>
  )
}
