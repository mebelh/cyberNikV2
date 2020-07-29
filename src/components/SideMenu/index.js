import React from 'react'
import './style.scss'
import 'bootstrap/dist/css/bootstrap.css';


export default function SideMenu_course() {
  return (
    <React.Fragment>
      <div class="accordion" id="accordionExample">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h2 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Модуль 1
        </button>
            </h2>
          </div>

          <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body">
              <a className="lecture" href="#">
                <div className="lecture__name">О защите</div>
                <div className="lecture__duration">49 минут</div>
              </a>
              <a className="lecture" href="#">
                <div className="lecture__name">О защите</div>
                <div className="lecture__duration">55 минут</div>
              </a>
              <a className="lecture" href="#">
                <div className="lecture__name">О защите</div>
                <div className="lecture__duration">45 минут</div>
              </a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingTwo">
            <h2 class="mb-0">
              <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Модуль 2
        </button>
            </h2>
          </div>
          <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div class="card-body" href="#">
              <a className="lecture" href="#">
                <div className="lecture-name">О защите</div>
                <div className="lecture-duration">35 минут</div>
              </a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingThree">
            <h2 class="mb-0">
              <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Модуль 3
        </button>
            </h2>
          </div>
          <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <a class="card-body" href="#">
              <a className="lecture" href="#">
                <div className="lecture-name">О защите</div>
                <div className="lecture-duration">45 минут</div>
              </a>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
